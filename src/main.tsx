import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Tag } from './components/Tag/Tag';
import './styles/tokens.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main style={{ padding: 24 }}>
      <Tag label="Name your label" icon />
    </main>
  </StrictMode>,
);
