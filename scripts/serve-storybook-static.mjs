import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('storybook-static');
const port = Number(process.env.PORT || 6006);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function resolveRequestPath(url = '/') {
  const pathname = decodeURIComponent(new URL(url, `http://${host}:${port}`).pathname);
  const requested = normalize(join(root, pathname));

  if (!requested.startsWith(root)) {
    return null;
  }

  return requested;
}

const server = createServer(async (request, response) => {
  let filePath = resolveRequestPath(request.url);

  if (!filePath) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      filePath = join(filePath, 'index.html');
    }
  } catch {
    filePath = join(root, 'index.html');
  }

  try {
    await stat(filePath);
    response.setHeader('Content-Type', mimeTypes[extname(filePath)] || 'application/octet-stream');
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

server.listen(port, host, () => {
  console.log(`Storybook is available at http://${host}:${port}/`);
});
