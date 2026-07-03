import './Divider.css';

export interface DividerProps {
  inset?: boolean;
}

export function Divider({ inset = false }: DividerProps) {
  return <div className="aries-divider" data-inset={inset} role="separator" />;
}
