import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import '../../docs/Documentation.css';

const meta = {
  title: 'Components/Banner',
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
        <span className="aries-doc-eyebrow">Component</span>
        <h1>Banner</h1>
        <p>
          Inline messaging for non-blocking updates, profile guidance, promotions, and recoverable status messages.
        </p>
      </header>

      <section className="aries-doc-section">
        <h2>Usage</h2>
        <p>
          Use Banner inside page content when the user should notice information without being blocked. For blocking
          decisions, use Dialog or Bottom Sheet instead.
        </p>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Purpose</h3>
            <p>Surface contextual information without interrupting the current task.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Placement</h3>
            <p>Place inline with screen content, usually near the top of the related section.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Action</h3>
            <p>Use one action only when the message has a clear next step.</p>
          </div>
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Anatomy</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Leading icon</h3>
            <p>Communicates the banner status. Icon color follows the status token.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Message content</h3>
            <p>Includes a title and supporting message. Keep both scannable.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Dismiss</h3>
            <p>Use close only when the message is optional and can be safely hidden.</p>
          </div>
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Best practices</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Do</h3>
            <p>Use semantic status variants instead of custom colors.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Do</h3>
            <p>Keep copy short and action-oriented, with one clear next step.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Don't</h3>
            <p>Use banners for destructive confirmation or required decisions.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Don't</h3>
            <p>Stack multiple banners at the top of the same screen.</p>
          </div>
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Examples</h2>
        <p>Common configurations, variations, and states.</p>
        <div className="aries-doc-example">
          <h3>Informative banner</h3>
          <Banner status="informative" title="informative banner" />
        </div>
        <div className="aries-doc-example">
          <h3>Status variants</h3>
          <div style={{ display: 'grid', gap: 12 }}>
            {(['informative', 'success', 'warning', 'danger', 'promotional'] as const).map((status) => (
              <Banner key={status} status={status} title={`${status} banner`} />
            ))}
          </div>
        </div>
      </section>
    </article>
  ),
};
