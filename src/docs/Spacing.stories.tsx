import type { Meta, StoryObj } from '@storybook/react';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const spacingRows = [
  ['4px', 'space-small-4', 'Use a spacing of 4 pixels', 'Small and compact pieces of UI.'],
  ['8px', 'space-small-8', 'Use a spacing of 8 pixels', 'Small and compact pieces of UI.'],
  ['12px', 'space-small-12', 'Use a spacing of 12 pixels', 'Small and compact pieces of UI.'],
  ['16px', 'space-medium-16', 'Use a spacing of 16 pixels', 'Larger and less dense pieces of UI.'],
  ['20px', 'space-medium-20', 'Use a spacing of 20 pixels', 'Larger and less dense pieces of UI.'],
  ['24px', 'space-medium-24', 'Use a spacing of 24 pixels', 'Larger and less dense pieces of UI.'],
  ['28px', 'space-large-28', 'Use a spacing of 28 pixels', 'Largest pieces of UI and layout elements.'],
  ['32px', 'space-large-32', 'Use a spacing of 32 pixels', 'Largest pieces of UI and layout elements.'],
  ['36px', 'space-large-36', 'Use a spacing of 36 pixels', 'Largest pieces of UI and layout elements.'],
  ['40px', 'space-large-40', 'Use a spacing of 40 pixels', 'Largest pieces of UI and layout elements.'],
];

const guidelineRows = [
  [
    'Small values',
    '0px to 12px',
    'Use for compact UI: icon/text gaps, small component padding, button groups, input internals, tight card content, and trigger-to-menu gaps.',
  ],
  [
    'Medium values',
    '16px to 24px',
    'Use for larger components: button padding, avatar/content gaps, card spacing, and less dense component rows.',
  ],
  [
    'Large values',
    '28px to 40px',
    'Use for page and layout spacing, such as separating page content from headers or aligning larger content areas.',
  ],
];

export const Overview: Story = {
  render: () => (
    <article className="aries-doc-page">
      <header className="aries-doc-hero">
        <span className="aries-doc-eyebrow">Foundations</span>
        <h1>Spacing</h1>
        <p>
          Aries uses a 4-point spacing grid. The most common values are 4px, 8px, 12px, 16px, 24px, and 32px.
          Use spacing tokens instead of raw pixel values when setting component gap, padding, and margin.
        </p>
      </header>

      <section className="aries-doc-section">
        <h2>Scale</h2>
        <table className="aries-doc-table">
          <thead>
            <tr>
              <th>Scale unit</th>
              <th>Token</th>
              <th>Figma usage</th>
              <th>Common usage</th>
            </tr>
          </thead>
          <tbody>
            {spacingRows.map(([value, token, figmaUsage, commonUsage]) => (
              <tr key={token}>
                <td>
                  <span className="aries-spacing-swatch" style={{ '--spacing-value': value } as React.CSSProperties} />
                  {value}
                </td>
                <td>{token}</td>
                <td>{figmaUsage}</td>
                <td>{commonUsage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="aries-doc-section">
        <h2>Guideline</h2>
        <div className="aries-doc-grid">
          {guidelineRows.map(([title, range, description]) => (
            <div className="aries-doc-card" key={title}>
              <h3>{title}</h3>
              <strong className="aries-doc-muted">{range}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  ),
};
