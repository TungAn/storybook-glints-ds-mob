import type { StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag/Tag';
import './Documentation.css';

type Story = StoryObj;

export const colorTokens = [
  ['Text/normal', '#666666', 'Normal text, labels, menu tabs, bottom tabs, radio, checkbox'],
  ['Text/normal_onDark', '#FFFFFF', 'Normal text, labels, menu tabs, bottom tabs, radio, checkbox on dark background'],
  ['Text/outstanding', '#2D2D2D', 'Headline, page title'],
  ['Text/supplementary', '#808080', 'Placeholders, disabled text'],
  ['Text/active', '#1A73E8', 'Primary text, text which can trigger action, button text, link, selected text, selected tab'],
  ['Text/updated', '#008464', 'Safety color text'],
  ['Text/success', '#76973A', 'Success text, message'],
  ['Text/danger', '#D42327', 'Attention text, error message'],
  ['Text/cautious', '#F5A623', 'Cautious text, warning message'],
  ['Text/discount', '#FFD96A', 'Highlight text, promo text, this is low contrast so only use on dark background'],
  ['Text/enticing', '#EC7200', 'Enticing text, discount text'],
  ['Text/brandingBlue', '#059FFF', 'Branding blue color text'],
  ['Text/brandingYellow', '#FFCB34', 'Branding yellow color text'],
  ['Icon/normal', '#808080', 'Informative icon, trailing icon, close button, icon in a tab'],
  ['Icon/active', '#1A73E8', 'CTA buttons or selected item, selected tab icon'],
  ['Icon/disabled', '#DDDDDD', 'Disabled button or disable tab icon'],
  ['Icon/onDark', '#FFFFFF', 'Use when icon on dark background'],
  ['Icon/updated', '#008464', 'Safety color icon'],
  ['Icon/success', '#93BD49', 'Success icon'],
  ['Icon/danger', '#D42327', 'Attention icon, error icon'],
  ['Icon/cautious', '#F5A623', 'Cautious icon, warning icon'],
  ['Icon/discount', '#FFD96A', 'Highlight icon, promo icon, this is low contrast so only use on dark background'],
  ['Icon/enticing', '#EC7200', 'Enticing icon, discount icon'],
  ['Icon/brandingBlue', '#059FFF', 'Branding blue color icon'],
  ['Icon/brandingYellow', '#FFCB34', 'Branding yellow color icon'],
  ['Background/normal', '#FFFFFF', 'Content background, card background, section background'],
  ['Background/supplementary', '#F7F9FA', 'Page background, and additional information background, such as annotation, embedded content info'],
  ['Background/supplementary2', '#F3F3F3', 'Use when icon on dark background'],
  ['Background/outstanding', '#C3E8FF', 'Highlighted background'],
  ['Background/primary_bright', '#1A73E8', 'Primary button background, splash screen'],
  ['Background/primary_muted', '#E6F4FA', 'Info banner background, unread notification background, unread card'],
  ['Background/updated_bright', '#008464', 'Safety banner background primary or highlighted'],
  ['Background/updated_muted', '#C3E4DC', 'Safety banner background secondary'],
  ['Background/success_bright', '#93BD49', 'Success background primary'],
  ['Background/success_muted', '#DEEBC8', 'Success background secondary'],
  ['Background/danger_bright', '#D42327', 'Danger, attention background primary'],
  ['Background/danger_muted', '#FFEEEE', 'Danger, attention background secondary'],
  ['Background/enticing_bright', '#EC7200', 'Enticing, discount background primary'],
  ['Background/enticing_muted', '#FCE9C8', 'Enticing, discount, warning background secondary'],
  ['Background/cautions', '#F5A623', 'Caution, warning background secondary'],
  ['Background/discount_bright', '#FFD96A', 'Promotion background primary'],
  ['Background/discount_muted', '#FFEEBE', 'Promotion background secondary'],
  ['Background/dark', '#2D2D2D', 'Dark background'],
  ['Background/searchBox', '#E6F4FA', 'Disabled button or disable tab icon'],
  ['Background/searchBox_active', '#C3E8FF', 'Disabled button or disable tab icon'],
  ['Background/searchBox_disabled', '#F3F3F3', 'Disabled button or disable tab icon'],
  ['Background/inputSelect_select01', '#E6F4FA', 'Background for selected text'],
  ['Background/inputSelect_select02', '#1A73E8', 'Background for selected item'],
  ['Background/inputSelect_active', '#58BFFF', 'Focused or pressed chips'],
  ['Background/action01', '#1A73E8', 'Primary action button, blue dot, stepper on carousel'],
  ['Background/action01_active', '#58BFFF', 'Focused or pressed primary button, chips'],
  ['Background/action02', '#FFFFFF', 'Secondary button, chips, normal input field'],
  ['Background/action02_active', '#E6F4FA', 'Focused or pressed secondary button, chips'],
  ['Background/action_disabled', '#F3F3F3', 'Disabled button or disabled chips'],
  ['Border/normal', '#DDDDDD', 'Divider, card border'],
  ['Border/outstanding', '#B3B3B3', 'Highlighted card border'],
  ['Border/active', '#1A73E8', 'Selected item in a tab or menu'],
  ['Border/danger', '#D42327', 'Error state of error text field border'],
  ['Border/action', '#1A73E8', 'Secondary CTA button border'],
  ['Border/action_active', '#58BFFF', 'Secondary CTA button border focus or active'],
  ['Border/action_disabled', '#DDDDDD', 'CTA button border disabled'],
  ['Border/inputSelect', '#666666', 'Radio buttons, checkbox, text field, dropdown border'],
  ['Border/inputSelect_selected', '#1A73E8', 'Radio buttons, checkbox, text field, dropdown border selected'],
  ['Border/inputBox', '#B3B3B3', 'Input border'],
  ['Border/inputBox_active', '#58BFFF', 'Input border focus or active'],
  ['Border/inputBox_disabled', '#DDDDDD', 'Input border disabled'],
  ['Overlay/normal', '#666666', 'Overlay background'],
  ['Overlay/active', '#E6F4FA', 'Secondary, tertiary overlay'],
];

export const typographyRows = [
  ['H1', 'Roboto', 'Bold (700)', '96px', '150%', '0px', 'Headlines'],
  ['H2', 'Roboto', 'Medium (500)', '60px', '150%', '0px', 'Headlines'],
  ['H3', 'Roboto', 'Regular (400)', '48px', '150%', '0px', 'Headlines'],
  ['H4', 'Roboto', 'Regular (400)', '34px', '150%', '0px', 'Headlines'],
  ['H5', 'Roboto', 'Semi-Bold (600)', '24px', '150%', '0px', 'Headlines'],
  ['H6', 'Roboto', 'Bold (700)', '18px', '150%', '0.15px', 'Page Title'],
  ['Subtitle 1', 'Roboto', 'Semi-Bold (600)', '16px', '150%', '0.15px', 'Section/Content Box Header'],
  ['Subtitle 2', 'Roboto', 'Regular (400)', '12px', '150%', '0px', 'Error placeholder, Help text'],
  ['Body 1', 'Roboto', 'Regular (400)', '14px', '150%', '0px', 'Sentence, Paragraph, Chips'],
  ['Body 2', 'Roboto', 'Semi-Bold (600)', '14px', '140%', '0px', 'Emphasis, Inline Links, Tab Labels, Tags'],
  ['Button', 'Roboto', 'Semi-Bold (600)', '14px', '150%', '0.25px', 'Full-width, text, outlined, contained buttons'],
  ['Caption', 'Roboto', 'Medium (500)', '12px', '140%', '0.2px', 'Text Field Labels'],
  ['Overline', 'Roboto', 'Medium (500)', '10px', '140%', '0.2px', 'Nav Bar Labels'],
];

export default {
  title: 'Docs/Getting Started',
  excludeStories: ['colorTokens', 'typographyRows'],
  parameters: {
    layout: 'padded',
  },
};

export const Overview: Story = {
  render: () => (
    <article className="aries-doc-page">
      <header className="aries-doc-hero">
        <span className="aries-doc-eyebrow">Documentation</span>
        <h1>Glints Aries Mobile Design System</h1>
        <p>
          This Storybook is organized as product documentation first: foundations, component guidance, and reusable
          screen templates for mobile app work.
        </p>
      </header>
      <section className="aries-doc-section">
        <h2>Structure</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Docs</h3>
            <p>Foundations, tokens, typography, design principles, and implementation notes.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Components</h3>
            <p>Usage guidance, best practices, examples, variants, and component API.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Templates</h3>
            <p>Blank structure for future screen prototypes that non-designers can clone and modify.</p>
          </div>
        </div>
      </section>
      <section className="aries-doc-section">
        <h2>Design Rules</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Inline Tags</h3>
            <p>
              When a tag appears inline with text, use the small visual treatment and squared shape. Avoid rounded pill
              tags inside sentences or metadata rows.
            </p>
            <p className="aries-doc-inline-example">
              Resume_1.pdf <Tag label="Default" color="green" type="muted" size="small" rounded={false} icon={false} />
            </p>
          </div>
        </div>
      </section>
    </article>
  ),
};
