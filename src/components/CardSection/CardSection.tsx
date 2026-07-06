import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { Icon } from '../shared/Icon';
import './CardSection.css';

export type JobCardType = 'application' | 'search' | 'saved';
export type JobCardStatus = 'active' | 'submitted' | 'closed' | 'expired' | 'chat-initiated';

export interface JobCardProps {
  cardType?: JobCardType;
  status?: JobCardStatus;
  statusLabel?: string;
  title?: string;
  salary?: string;
  company?: string;
  location?: string;
  submittedOn?: string;
  savedOn?: string;
  tags?: string[];
  recruiterName?: string;
  recruiterStatus?: string;
  recruiterPremium?: boolean;
  actionLabel?: string;
}

export interface SectionProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function JobCard({
  cardType = 'application',
  status = 'active',
  statusLabel = 'Applied',
  title = 'Product Designer',
  salary = 'Rp 6-8 mio',
  company = 'Glints',
  location = 'Jakarta',
  submittedOn = 'Submitted on 12 Jun 2026',
  savedOn = 'Saved on 12 Jun 2026',
  tags = ['Full-time', 'Remote', '1-3 years'],
  recruiterName = 'Jane Doe',
  recruiterStatus = 'Online',
  recruiterPremium = true,
  actionLabel = 'APPLY',
}: JobCardProps) {
  const isInactive = status === 'closed' || status === 'expired';
  const resolvedStatusLabel = statusLabel || statusLabelByStatus[status];

  return (
    <article className="aries-job-card" data-card-type={cardType} data-status={status}>
      {cardType === 'application' ? (
        <div className="aries-job-card__tags">
          <Tag label={resolvedStatusLabel} color={tagColorByStatus[status]} icon={false} />
        </div>
      ) : null}

      <div className="aries-job-card__header">
        <h3>{title}</h3>
        {cardType !== 'application' ? <strong className="aries-job-card__salary">{salary}</strong> : null}
      </div>

      <JobCardMeta company={company} location={location} />

      {cardType === 'application' ? (
        <p className="aries-job-card__date">
          <Icon name="calendar" size={16} />
          {submittedOn}
        </p>
      ) : null}

      {cardType === 'saved' ? (
        <p className="aries-job-card__date">
          <Icon name="check" size={16} />
          {savedOn}
        </p>
      ) : null}

      {cardType === 'search' || cardType === 'saved' ? (
        <div className="aries-job-card__skill-tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} color="grey" icon={false} />
          ))}
        </div>
      ) : null}

      {cardType === 'search' ? (
        <div className="aries-job-card__cta-row">
          <div className="aries-job-card__recruiter">
            <Avatar name={recruiterName} size={32} border />
            <div>
              <span>
                <strong>{recruiterName}</strong>
                {recruiterPremium ? (
                  <Tag label="VIP" color="orange" size="small" rounded={false} icon={false} />
                ) : null}
              </span>
              <small>{recruiterStatus}</small>
            </div>
          </div>
          <Button size="small" state={isInactive ? 'disabled' : 'normal'}>
            {isInactive ? status.toUpperCase() : actionLabel}
          </Button>
        </div>
      ) : null}
    </article>
  );
}

const statusLabelByStatus: Record<JobCardStatus, string> = {
  active: 'Active',
  submitted: 'Submitted',
  closed: 'Closed',
  expired: 'Expired',
  'chat-initiated': 'Chat Initiated',
};

const tagColorByStatus: Record<JobCardStatus, 'blue' | 'green' | 'red' | 'orange' | 'grey'> = {
  active: 'blue',
  submitted: 'green',
  closed: 'grey',
  expired: 'red',
  'chat-initiated': 'blue',
};

function JobCardMeta({ company, location }: Pick<JobCardProps, 'company' | 'location'>) {
  return (
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
