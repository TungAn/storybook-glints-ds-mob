# Figma MCP Integration

Rules for implementing designs from the Glints Aries App - UI Kit 2.0 using the Figma MCP server.

## File Reference

| | Value |
|---|---|
| URL | https://www.figma.com/design/r20p8eotJkuTxjmSXiYp0n/Aries-App---UI-Kit-2.0 |
| File key | `r20p8eotJkuTxjmSXiYp0n` |
| Library key | see `figma-secrets.local.md` (gitignored) |

## Required Implementation Flow

```
1. get_design_context(nodeId, fileKey)      ← structured representation of the design
2. get_screenshot(nodeId, fileKey)          ← visual reference for fidelity checking
3. search_design_system(query, fileKey)     ← find existing Aries components before building
4. Implement using Aries components         ← adapt MCP output to the project stack
5. Validate against screenshot              ← confirm 1:1 visual match
```

## Scoped Design System Search

Always scope searches to the Aries library key to avoid noise from iOS/Material/community libraries:

```
search_design_system(
  query = "<component name>",
  fileKey = "r20p8eotJkuTxjmSXiYp0n",
  includeLibraryKeys = [
    "<FIGMA_LIBRARY_KEY from figma-secrets.local.md>"
  ]
)
```

## Node ID Extraction

```
URL: https://figma.com/design/r20p8eotJkuTxjmSXiYp0n/...?node-id=8234-19716
                                                                   ↓
                                                                8234:19716
```

## Implementation Rules

- IMPORTANT: Treat MCP output (React + Tailwind) as a reference — adapt to the project's actual stack
- IMPORTANT: If MCP returns a `localhost` URL for an image or SVG, use it directly — no placeholders
- IMPORTANT: Do not install icon packages — all icons come from the MCP payload
- Replace hardcoded hex colors with semantic tokens (`Background/action01`, `Text/danger`, `Border/inputBox`)
- If a node is too large, call `get_metadata` first to map the structure, then call `get_design_context` on specific child nodes
- Always check for an existing Aries component before building anything custom

## Token Naming in Code

Map Figma style names to your CSS/theming system:

```
Background/action01       →  --color-bg-action-primary
Text/danger               →  --color-text-danger
Border/inputBox_active    →  --color-border-input-focus
```
