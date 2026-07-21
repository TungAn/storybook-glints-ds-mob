import type { Meta, StoryObj } from '@storybook/react';
import * as RemixIcons from '@remixicon/react';
import { Icon, iconNames, remixIconSourceByName, type IconName } from '../components/shared/Icon';
import './Documentation.css';

const meta = {
  title: 'Docs/Foundations/Icon',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type RemixIconComponent = typeof RemixIcons.RiSearchLine;

const remixIconEntries = Object.entries(RemixIcons)
  .filter((entry): entry is [string, RemixIconComponent] => entry[0].startsWith('Ri') && typeof entry[1] === 'function')
  .sort(([first], [second]) => first.localeCompare(second));

export const Overview: Story = {
  render: () => (
    <article className="aries-doc-page">
      <header className="aries-doc-hero">
        <span className="aries-doc-eyebrow">Foundations</span>
        <h1>Icon</h1>
        <p>
          Icons are bridged from Remix Icon through a small semantic wrapper. Components should use Glints semantic names
          instead of importing Remix icons directly.
        </p>
      </header>

      <section className="aries-doc-section">
        <h2>Usage</h2>
        <div className="aries-doc-grid">
          <div className="aries-doc-card">
            <h3>Use semantic names</h3>
            <p>Use names like alert, info, search, and briefcase so component intent stays stable.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Map to Remix</h3>
            <p>When adding a new component icon, choose the closest Remix icon and map it in the bridge.</p>
          </div>
          <div className="aries-doc-card">
            <h3>Color with tokens</h3>
            <p>Icons inherit currentColor, so status and action colors should come from Aries icon tokens.</p>
          </div>
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Current Icon Bridge</h2>
        <p>
          These are the approved semantic icons that components use today. Each item points to a Remix Icon source.
        </p>
        <div className="aries-icon-grid">
          {iconNames.map((name) => (
            <div className="aries-icon-card" key={name}>
              <Icon name={name} size={24} />
              <strong>{name}</strong>
              <span>{remixIconSourceByName[name]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="aries-doc-section">
        <h2>Mapping</h2>
        <table className="aries-doc-table">
          <thead>
            <tr>
              <th>Semantic name</th>
              <th>Remix Icon source</th>
              <th>Default use</th>
            </tr>
          </thead>
          <tbody>
            {iconNames.map((name) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{remixIconSourceByName[name]}</td>
                <td>{usageByIconName[name] || 'Component-specific icon usage'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="aries-doc-section">
        <h2>Remix Icon Library</h2>
        <p>
          Full Remix Icon set available from the installed package. Use this as a picker, then add the chosen icon to
          the semantic bridge before using it in a component.
        </p>
        <div className="aries-icon-library">
          {remixIconEntries.map(([name, RemixIcon]) => (
            <div className="aries-icon-card aries-icon-card--compact" key={name}>
              <RemixIcon size={22} color="currentColor" aria-hidden="true" focusable="false" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  ),
};

const usageByIconName: Partial<Record<IconName, string>> = {
  alert: 'Caution, warning, and error states',
  'arrow-left': 'Back navigation',
  briefcase: 'Jobs and work items',
  building: 'Company or organization',
  calendar: 'Date and schedule',
  check: 'Selected, confirmed, or completed state',
  'chevron-down': 'Expandable menus and dropdowns',
  close: 'Dismiss, remove, or close',
  filter: 'Filtering and refinement controls',
  'file-text': 'Uploaded document file type',
  image: 'Image attachment or media placeholder',
  info: 'Informative status',
  location: 'Location and maps',
  more: 'Overflow actions menu',
  movie: 'Video or motion attachment',
  paperclip: 'Attachment',
  profile: 'Candidate or profile context',
  refresh: 'Reload or retry',
  search: 'Search input or command',
  send: 'Send message or submit chat',
  settings: 'Settings and configuration',
  sparkle: 'Generated or profile-based creation action',
  upload: 'Upload action',
  user: 'User identity',
};
