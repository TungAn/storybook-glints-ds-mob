import type { ReactNode } from 'react';
import { Backdrop } from '../Backdrop/Backdrop';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Switch } from '../Switch/Switch';
import { Icon, type IconName } from '../shared/Icon';
import './Feedback.css';

export interface InlineErrorProps {
  message?: string;
  icon?: boolean;
  significant?: boolean;
}

export function InlineError({
  message = 'This field is required',
  icon = true,
  significant = false,
}: InlineErrorProps) {
  return (
    <p className="aries-inline-error" data-significant={significant}>
      {icon ? <Icon name="alert" size={12} /> : null}
      <span>{message}</span>
    </p>
  );
}

export interface BottomSheetProps {
  title?: string;
  fullPage?: boolean;
  header?: boolean;
  headerActionLabel?: string;
  footer?: boolean;
  footerLayout?: 'vertical' | 'horizontal';
  primaryLabel?: string;
  secondaryLabel?: string;
  children?: ReactNode;
}

export function BottomSheet({
  title = 'Filter jobs',
  fullPage = false,
  header = true,
  headerActionLabel = 'ACTION',
  footer = true,
  footerLayout = 'vertical',
  primaryLabel,
  secondaryLabel,
  children,
}: BottomSheetProps) {
  return (
    <div className="aries-overlay-frame">
      <Backdrop />
      <section className="aries-bottom-sheet" data-full-page={fullPage}>
        {header ? <BottomSheetHeader actionLabel={headerActionLabel} title={title} /> : null}
        <div className="aries-bottom-sheet__body">
          {children ?? (
            <>
              <BottomSheetActionItem icon="location" label="Location" value="Jakarta" />
              <BottomSheetToggle checked label="Remote jobs only" />
              <BottomSheetCheckbox checked label="Full-time" />
              <BottomSheetInfo title="Recommended" description="Filters will be saved for your next search." />
            </>
          )}
        </div>
        {footer ? <BottomSheetFooter layout={footerLayout} primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} /> : null}
      </section>
    </div>
  );
}

export function BottomSheetHeader({
  title = 'Sheet title',
  actionLabel = 'ACTION',
}: {
  title?: string;
  actionLabel?: string;
}) {
  return (
    <header className="aries-bottom-sheet__header">
      <button className="aries-bottom-sheet__dismiss" aria-label="Dismiss bottom sheet" type="button">
        <Icon name="close" size={24} />
      </button>
      <div className="aries-bottom-sheet__title-row">
        <h2>{title}</h2>
      </div>
      {actionLabel ? (
        <button className="aries-bottom-sheet__action" type="button">
          {actionLabel}
        </button>
      ) : null}
    </header>
  );
}

export function BottomSheetFooter({
  primaryLabel = 'Apply',
  secondaryLabel = 'Reset',
  layout = 'vertical',
}: {
  primaryLabel?: string;
  secondaryLabel?: string;
  layout?: 'vertical' | 'horizontal';
}) {
  const primaryButton = (
    <Button fullWidth size="large">
      {primaryLabel}
    </Button>
  );
  const secondaryButton = (
    <Button buttonType={layout === 'horizontal' ? 'outline' : 'ghost'} fullWidth size="large">
      {secondaryLabel}
    </Button>
  );

  return (
    <footer className="aries-bottom-sheet__footer" data-layout={layout}>
      {layout === 'horizontal' ? (
        <>
          {secondaryButton}
          {primaryButton}
        </>
      ) : (
        <>
          {primaryButton}
          {secondaryButton}
        </>
      )}
    </footer>
  );
}

export function BottomSheetActionItem({
  icon = 'settings',
  label = 'Action item',
  value,
}: {
  icon?: IconName;
  label?: string;
  value?: string;
}) {
  return (
    <button className="aries-sheet-row aries-sheet-row--action" type="button">
      <Icon name={icon} size={20} />
      <span>
        <strong>{label}</strong>
        {value ? <small>{value}</small> : null}
      </span>
      <Icon name="chevron-down" size={16} />
    </button>
  );
}

export function BottomSheetInfo({
  title = 'Information',
  description = 'Use this row for contextual guidance inside a sheet.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="aries-sheet-row aries-sheet-row--info">
      <Icon name="info" size={20} />
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
    </div>
  );
}

export function BottomSheetToggle({ label = 'Toggle item', checked = true }: { label?: string; checked?: boolean }) {
  return (
    <div className="aries-sheet-row aries-sheet-row--control">
      <span>{label}</span>
      <Switch checked={checked} label="" />
    </div>
  );
}

export function BottomSheetCheckbox({
  label = 'Checkbox item',
  checked = false,
}: {
  label?: string;
  checked?: boolean;
}) {
  return (
    <div className="aries-sheet-row aries-sheet-row--checkbox">
      <Checkbox checked={checked} description="" label={label} />
    </div>
  );
}

export interface DialogProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function Dialog({
  title = 'Device permission denied',
  description = 'Allow device permissions from your browser settings to continue.',
  primaryLabel = 'Open settings',
  secondaryLabel = 'Not now',
}: DialogProps) {
  return (
    <div className="aries-overlay-frame">
      <Backdrop />
      <section className="aries-dialog" role="dialog" aria-modal="true" aria-labelledby="aries-dialog-title">
        <h2 id="aries-dialog-title">{title}</h2>
        <p>{description}</p>
        <div className="aries-dialog__actions">
          <Button buttonType="ghost" size="medium">
            {secondaryLabel}
          </Button>
          <Button size="medium">
            {primaryLabel}
          </Button>
        </div>
      </section>
    </div>
  );
}

export function ExpandingSheet({ expanded = false }: { expanded?: boolean }) {
  return (
    <div className="aries-overlay-frame">
      <Backdrop opacity={0.36} />
      <section className="aries-bottom-sheet aries-expanding-sheet" data-expanded={expanded}>
        <BottomSheetHeader title="Job description" />
        <div className="aries-bottom-sheet__body">
          <BottomSheetInfo
            title="Senior Product Designer"
            description="Design hiring experiences across mobile and web surfaces."
          />
          <p>
            Own user flows, partner with product teams, and translate candidate insights into polished interfaces.
          </p>
        </div>
      </section>
    </div>
  );
}
