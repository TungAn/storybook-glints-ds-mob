import './Backdrop.css';

export interface BackdropProps {
  opacity?: number;
  height?: number;
}

export function Backdrop({ opacity = 0.64, height = 640 }: BackdropProps) {
  return (
    <button
      className="aries-backdrop"
      style={{ '--backdrop-opacity': opacity, height } as React.CSSProperties}
      type="button"
      aria-label="Dismiss overlay"
    />
  );
}
