import { Button } from '../Button/Button';
import { Icon } from '../shared/Icon';
import './Banner.css';

export type BannerStatus = 'informative' | 'success' | 'warning' | 'danger' | 'promotional';

export interface BannerProps {
  status?: BannerStatus;
  border?: boolean;
  icon?: boolean;
  title?: string;
  message?: string;
  textButton?: string;
  closeButton?: boolean;
  compact?: boolean;
}

export function Banner({
  status = 'informative',
  border = false,
  icon = true,
  title = 'Are the results not relevant?',
  message = 'Update your job interests and preferences in just 1 min.',
  textButton = 'Update now',
  closeButton = true,
  compact = false,
}: BannerProps) {
  return (
    <section className="aries-banner" data-status={status} data-border={border} data-compact={compact}>
      {icon ? (
        <span className="aries-banner__icon">
          <Icon name={status === 'danger' ? 'alert' : 'info'} size={compact ? 20 : 32} />
        </span>
      ) : null}
      <div className="aries-banner__content">
        {title ? <strong>{title}</strong> : null}
        {message ? <p>{message}</p> : null}
        {textButton ? (
          <Button buttonType="ghost" size="small">
            {textButton}
          </Button>
        ) : null}
      </div>
      {closeButton ? (
        <button className="aries-banner__close" type="button" aria-label="Close banner">
          <Icon name="close" size={18} />
        </button>
      ) : null}
    </section>
  );
}
