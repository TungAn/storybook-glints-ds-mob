import './Progress.css';

export interface ProgressBarProps {
  value: number;
  max?: number;
}

export interface StepperProps {
  steps?: number;
  currentStep?: number;
}

export interface IndicatorProps {
  count?: number;
  activeIndex?: number;
}

export function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="aries-progress-bar" aria-valuemax={max} aria-valuemin={0} aria-valuenow={value} role="progressbar">
      <span style={{ width: `${percent}%` }} />
    </div>
  );
}

export function Stepper({ steps = 3, currentStep = 1 }: StepperProps) {
  return (
    <div className="aries-stepper" aria-label={`Step ${currentStep} of ${steps}`}>
      {Array.from({ length: steps }, (_, index) => (
        <span key={index} data-active={index < currentStep} />
      ))}
    </div>
  );
}

export function Indicator({ count = 4, activeIndex = 0 }: IndicatorProps) {
  return (
    <div className="aries-indicator" aria-label={`${activeIndex + 1} of ${count}`}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index} data-active={index === activeIndex} />
      ))}
    </div>
  );
}
