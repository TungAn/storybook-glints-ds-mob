import { Avatar } from '../Avatar/Avatar';
import { Tag } from '../Tag/Tag';
import { Icon } from '../shared/Icon';
import './CardSection.css';

export interface JobCardProps {
  statusLabel?: string;
  title?: string;
  company?: string;
  location?: string;
  submittedOn?: string;
}

export interface SectionProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function JobCard({
  statusLabel = 'Applied',
  title = 'Product Designer',
  company = 'Glints',
  location = 'Jakarta',
  submittedOn = 'Submitted on 12 Jun 2026',
}: JobCardProps) {
  return (
    <article className="aries-job-card">
      <div className="aries-job-card__tags">
        <Tag label={statusLabel} color="blue" icon={false} />
      </div>
      <h3>{title}</h3>
      <div className="aries-job-card__meta">
        <span>
          <Icon name="building" size={16} />
          {company}
        </span>
        <span>
          <Icon name="location" size={16} />
          {location}
        </span>
      </div>
      <p>
        <Icon name="calendar" size={16} />
        {submittedOn}
      </p>
    </article>
  );
}

export function CompanyCard({ name = 'Glints', description = 'Tech-enabled talent marketplace' }) {
  return (
    <article className="aries-company-card">
      <Avatar name={name} size={40} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function Section({ title = 'Recommended Jobs', subtitle = 'Based on your profile', children }: SectionProps) {
  return (
    <section className="aries-section">
      <header>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      <div>{children || <JobCard />}</div>
    </section>
  );
}
