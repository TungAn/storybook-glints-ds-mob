import type { Meta, StoryObj } from '@storybook/react';
import { colorTokens } from './SystemDocs.stories';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Color Tokens',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <article className="aries-doc-page">
      <header className="aries-doc-hero">
        <span className="aries-doc-eyebrow">Foundations</span>
        <h1>Color Tokens</h1>
        <p>Use semantic token names instead of raw hex values. Tokens map to Aries UI Kit roles.</p>
      </header>
      <table className="aries-doc-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          {colorTokens.map(([token, value, use]) => (
            <tr key={token}>
              <td>{token}</td>
              <td>
                <span className="aries-token-swatch">
                  <span style={{ background: value }} />
                  {value}
                </span>
              </td>
              <td>{use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  ),
};
