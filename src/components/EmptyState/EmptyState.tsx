import { Button } from '../Button/Button';
import { Illustration } from '../Illustration/Illustration';
import { Icon } from '../shared/Icon';
import './EmptyState.css';

export interface EmptyStateProps {
  type?: 'empty' | 'error';
  variant?: 'full-page' | 'inline';
  title?: string;
  description?: string;
  primaryAction?: string;
  secondaryAction?: string;
  illustration?: boolean;
}

export function EmptyState({
  type = 'empty',
  variant = 'full-page',
  title = 'No results found',
  description = 'Try changing your search or filters to find what you need.',
  primaryAction = 'TRY AGAIN',
  secondaryAction,
  illustration = true,
}: EmptyStateProps) {
  return (
    <section className="aries-empty-state" data-type={type} data-variant={variant}>
      {illustration ? (
        <div className="aries-empty-state__illustration">
          <Illustration kind={type === 'error' ? 'error' : 'empty'} size="small" />
        </div>
      ) : null}
      <div className="aries-empty-state__copy">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
      {primaryAction || secondaryAction ? (
        <div className="aries-empty-state__actions">
          {primaryAction ? (
            <Button fullWidth size="medium">
              {primaryAction}
            </Button>
          ) : null}
          {secondaryAction ? (
            <Button buttonType="ghost" fullWidth size="medium">
              {secondaryAction}
            </Button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export function ErrorWarning({ message = 'Something went wrong. Please try again.' }: { message?: string }) {
  return (
    <div className="aries-error-warning" role="alert">
      <Icon name="alert" size={16} />
      <span>{message}</span>
    </div>
  );
}
