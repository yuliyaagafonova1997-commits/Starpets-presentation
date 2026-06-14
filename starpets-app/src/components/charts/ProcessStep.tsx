import './ProcessStep.css';

export interface ProcessStepData {
  /** Step number (1-based) shown in a circle. */
  num: number;
  /** Short heading. */
  title: string;
  /** One-line description. */
  desc: string;
  /** Optional accent color for the number circle. */
  color?: string;
}

interface ProcessStepProps {
  steps: ProcessStepData[];
  /** Layout direction. */
  orientation?: 'horizontal' | 'vertical';
  /** Compact: smaller font, tighter spacing. */
  compact?: boolean;
}

export function ProcessStep({
  steps,
  orientation = 'horizontal',
  compact = false,
}: ProcessStepProps) {
  return (
    <div
      className={`process-step process-${orientation} ${compact ? 'ps-compact' : ''}`}
    >
      {steps.map((s, i) => (
        <div key={i} className="ps-step">
          <div
            className="ps-circle"
            style={s.color ? { background: s.color } : undefined}
          >
            {s.num}
          </div>
          {i < steps.length - 1 && orientation === 'horizontal' && (
            <div className="ps-connector" />
          )}
          <div className="ps-body">
            <div className="ps-title">{s.title}</div>
            <div className="ps-desc">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
