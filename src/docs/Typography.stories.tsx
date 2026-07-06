import type { Meta, StoryObj } from '@storybook/react';
import { typographyRows } from './SystemDocs.stories';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Typography',
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
        <h1>Typography</h1>
        <p>Current mobile typography references Roboto and Android text roles from Aries UI Kit specs.</p>
      </header>
      <table className="aries-doc-table">
        <thead>
          <tr>
            <th>Scale category</th>
            <th>Typeface</th>
            <th>Weight</th>
            <th>Size</th>
            <th>Line height</th>
            <th>Letter spacing</th>
            <th>Use</th>
          </tr>
        </thead>
        <tbody>
          {typographyRows.map(([style, font, weight, size, lineHeight, letterSpacing, use]) => (
            <tr key={style}>
              <td>{style}</td>
              <td>{font}</td>
              <td>{weight}</td>
              <td>{size}</td>
              <td>{lineHeight}</td>
              <td>{letterSpacing}</td>
              <td>{use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  ),
};
