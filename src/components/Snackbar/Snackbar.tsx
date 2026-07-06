import { Button } from '../Button/Button';
import { Icon } from '../shared/Icon';
import './Snackbar.css';

export type SnackbarStatus = 'informative' | 'success' | 'warning' | 'danger';

export interface SnackbarProps {
  status?: SnackbarStatus;
  message?: string;
  action?: string;
  icon?: boolean;
}

export function Snackbar({
  status = 'informative',
  message = 'Application submitted',
  action = 'UNDO',
  icon = true,
}: SnackbarProps) {
  return (
    <div className="aries-snackbar" data-status={status} role="status">
      {icon ? <Icon name={status === 'danger' ? 'alert' : 'info'} size={20} /> : null}
      <span>{message}</span>
      {action ? (
        <Button buttonType="ghost" size="small">
          {action}
        </Button>
      ) : null}
    </div>
  );
}
