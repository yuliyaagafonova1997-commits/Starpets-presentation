import { chartColors } from './chartColors';
import './PieChart.css';

export interface PieDatum {
  label: string;
  value: number;
  color?: string;
}

interface PieChartProps {
  data: PieDatum[];
  /** SVG viewport size in px. */
  size?: number;
  /** Donut ring thickness. */
  thickness?: number;
  /** Center label (e.g. "100%"). */
  centerLabel?: string;
  centerSubLabel?: string;
  /** Show percentage column in legend. */
  showPercent?: boolean;
  /** Show raw count column in legend. */
  countUnit?: number; // total N for percent<->count math
  legendPosition?: 'bottom' | 'right';
}

export function PieChart({
  data,
  size = 220,
  thickness = 36,
  centerLabel,
  centerSubLabel,
  showPercent = true,
  countUnit,
  legendPosition = 'right',
}: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  let cumulative = 0;
  const slices = data.map((d, i) => {
    const length = (d.value / total) * circumference;
    const color = d.color || chartColors.gray;
    const slice = (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={thickness}
        strokeDasharray={`${length} ${circumference}`}
        strokeDashoffset={-cumulative}
        transform={`rotate(-90 ${cx} ${cy})`}
        className="pie-slice"
      />
    );
    cumulative += length;
    return slice;
  });

  return (
    <div className={`pie-chart pie-legend-${legendPosition}`}>
      <div className="pie-svg-wrap" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="pie-svg"
        >
          {/* subtle background ring */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="transparent"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth={thickness}
          />
          {slices}
        </svg>
        {(centerLabel || centerSubLabel) && (
          <div className="pie-center">
            {centerLabel && <div className="pie-center-label">{centerLabel}</div>}
            {centerSubLabel && (
              <div className="pie-center-sublabel">{centerSubLabel}</div>
            )}
          </div>
        )}
      </div>
      <ul className="pie-legend">
        {data.map((d, i) => {
          const pct = (d.value / total) * 100;
          return (
            <li key={i}>
              <span
                className="pie-legend-swatch"
                style={{ background: d.color || chartColors.gray }}
              />
              <span className="pie-legend-label">{d.label}</span>
              {showPercent && (
                <span className="pie-legend-value">
                  {pct >= 1 ? pct.toFixed(1) : pct.toFixed(1)}%
                  {countUnit !== undefined && (
                    <span className="pie-legend-count"> · {d.value}</span>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
