import { chartColors } from './chartColors';
import './BarChart.css';

export interface BarDatum {
  label: string;
  value: number; // percentage (0-100)
  count?: number;
  color?: string;
  highlight?: boolean;
}

interface BarChartProps {
  data: BarDatum[];
  /** Max value for the scale (defaults to 100 for percentages). */
  maxValue?: number;
  /** Compact layout: smaller font, less padding (good for dense slides). */
  compact?: boolean;
  /** Optional caption rendered above the chart. */
  caption?: string;
}

export function BarChart({
  data,
  maxValue = 100,
  compact = false,
  caption,
}: BarChartProps) {
  return (
    <div className={`bar-chart ${compact ? 'bar-compact' : ''}`}>
      {caption && <div className="bar-caption">{caption}</div>}
      {data.map((d, i) => {
        const pct = Math.min(100, (d.value / maxValue) * 100);
        const color = d.color || (d.highlight ? chartColors.orange : chartColors.black);
        return (
          <div key={i} className="bar-row">
            <div className="bar-label" title={d.label}>
              {d.label}
            </div>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: `${pct}%`,
                  background: color,
                }}
              />
            </div>
            <div className="bar-value">
              {d.value}%
              {d.count !== undefined && (
                <span className="bar-value-count"> · {d.count}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
