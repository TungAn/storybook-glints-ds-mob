import type { Meta, StoryObj } from '@storybook/react';
import { Illustration, illustrationKinds } from '../components/Illustration/Illustration';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Illustration',
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
        <h1>Illustration</h1>
        <p>
          Scenario illustrations support empty states, error states, service interruption, connection issues, and company
          logo fallback moments.
        </p>
      </header>

      <section className="aries-doc-section">
        <h2>Scenarios</h2>
        <div className="aries-illustration-grid">
          {illustrationKinds.map((kind) => (
            <div className="aries-doc-card" key={kind}>
              <Illustration kind={kind} />
            </div>
          ))}
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Usage</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Empty</h3>
            <p>Use for no results, no saved items, or no content yet.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Error</h3>
            <p>Use for failed load, failed action, or blocking error states.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Connect issue</h3>
            <p>Use when the user needs to check network or retry connection.</p>
          </div>
        </div>
      </section>
    </article>
  ),
};
