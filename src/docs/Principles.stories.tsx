import type { Meta, StoryObj } from '@storybook/react';
import './Documentation.css';

const meta = {
  title: 'Docs/Getting Started/Principles',
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
        <span className="aries-doc-eyebrow">Getting Started</span>
        <h1>Design Principles</h1>
        <p>Placeholder template. Replace these sections with Glints-specific philosophy later.</p>
      </header>
      <section className="aries-doc-grid">
        {['Principle name', 'What it means', 'How it shows up', 'What to avoid'].map((item) => (
          <div className="aries-doc-card" key={item}>
            <h3>{item}</h3>
            <p>Draft content goes here.</p>
          </div>
        ))}
      </section>
    </article>
  ),
};
