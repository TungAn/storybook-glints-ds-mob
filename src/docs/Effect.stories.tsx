import type { Meta, StoryObj } from '@storybook/react';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Effect',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const effectRows = [
  [
    'Card Shadow (Downwards)',
    '--aries-effect-card-shadow-downwards',
    '0 1px 2px 0 rgba(179, 179, 179, 0.5)',
    'Subtle card separation below an element.',
  ],
  [
    'Card Shadow (Upwards)',
    '--aries-effect-card-shadow-upwards',
    '0 -1px 2px 0 rgba(179, 179, 179, 0.5)',
    'Subtle card separation above an element.',
  ],
  [
    'Shadow (Elevated - 1)',
    '--aries-effect-shadow-elevated-1',
    '0 1px 3px 0 rgba(102, 102, 102, 0.5)',
    'Low elevation for lightweight raised surfaces.',
  ],
  [
    'Shadow (Elevated - 2)',
    '--aries-effect-shadow-elevated-2',
    '0 1px 10px 0 rgba(153, 153, 153, 0.3)',
    'Medium elevation for picker and floating panels.',
  ],
  [
    'Shadow (Elevated - 3)',
    '--aries-effect-shadow-elevated-3',
    '0 2px 4px 0 rgba(0, 0, 0, 0.3), 0 1px 12px 0 rgba(0, 0, 0, 0.15)',
    'Higher elevation for prominent overlays.',
  ],
  [
    'Shadow (Elevated - 4)',
    '--aries-effect-shadow-elevated-4',
    '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 4px 8px 3px rgba(0, 0, 0, 0.15)',
    'Snackbar elevation.',
  ],
];

export const Overview: Story = {
  render: () => (
    <article className="aries-doc-page">
      <header className="aries-doc-hero">
        <span className="aries-doc-eyebrow">Foundations</span>
        <h1>Effect</h1>
        <p>
          Effect tokens capture Aries shadow styles from Figma. Use these tokens for surface elevation instead of
          hardcoded shadow values.
        </p>
      </header>

      <section className="aries-doc-section">
        <h2>Shadow Tokens</h2>
        <div className="aries-effect-grid">
          {effectRows.map(([name, token, css, usage]) => (
            <div className="aries-doc-card aries-effect-card" key={token} style={{ boxShadow: css }}>
              <h3>{name}</h3>
              <strong>{token}</strong>
              <code>{css}</code>
              <p>{usage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Usage</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Use For Elevation</h3>
            <p>Apply effect tokens to cards, snackbars, pickers, and overlays that need surface depth.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Do Not Use For Focus</h3>
            <p>Focus rings, avatar outlines, and keyboard key strokes are component states, not elevation shadows.</p>
          </div>
        </div>
      </section>
    </article>
  ),
};
