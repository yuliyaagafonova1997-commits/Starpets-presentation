import { chartColors } from './chartColors';
import './LineChart.css';

export interface LinePoint {
  x: string; // label (e.g. "Day 0", "Week 1")
  y: number;
}

interface LineSeries {
  label: string;
  color: string;
  data: LinePoint[];
}

interface LineChartProps {
  series: LineSeries[];
  /** Y-axis label / unit. */
  yLabel?: string;
  /** Optional baseline value to draw a horizontal reference line. */
  baseline?: number;
  height?: number;
  /** Render a smooth curve. Default true. */
  smooth?: boolean;
  /** Show point markers. Default true. */
  markers?: boolean;
  /** Compact mode for small slides. */
  compact?: boolean;
}

export function LineChart({
  series,
  yLabel,
  baseline,
  height = 280,
  smooth = true,
  markers = true,
  compact = false,
}: LineChartProps) {
  const padding = compact
    ? { top: 24, right: 24, bottom: 36, left: 48 }
    : { top: 32, right: 32, bottom: 44, left: 56 };

  // Compute domain from all series + baseline.
  const allY = series.flatMap((s) => s.data.map((p) => p.y));
  if (baseline !== undefined) allY.push(baseline);
  const yMin = 0;
  const yMaxRaw = allY.length > 0 ? Math.max(...allY) : 100;
  const yMax = Math.ceil(yMaxRaw / 10) * 10 + 10;

  // X domain is the union of all x labels (preserve first series' order).
  const xLabels = series[0]?.data.map((p) => p.x) ?? [];

  // SVG viewBox is always 1000x{height} to allow CSS scaling.
  const width = 1000;
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  const xStep = xLabels.length > 1 ? innerW / (xLabels.length - 1) : innerW;
  const xAt = (i: number) => padding.left + i * xStep;
  const yAt = (v: number) => padding.top + innerH - ((v - yMin) / (yMax - yMin)) * innerH;

  // Build line path for a series.
  const linePath = (s: LineSeries) => {
    const pts = s.data.map((p, i) => ({ x: xAt(i), y: yAt(p.y) }));
    if (smooth && pts.length > 1) {
      // Cubic-bezier smoothing.
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const cx1 = p0.x + (p1.x - p0.x) / 2;
        const cy1 = p0.y;
        const cx2 = p0.x + (p1.x - p0.x) / 2;
        const cy2 = p1.y;
        d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${p1.x} ${p1.y}`;
      }
      return d;
    }
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  };

  // Build area-fill path (line + close to baseline).
  const areaPath = (s: LineSeries) => {
    const line = linePath(s);
    const last = s.data.length - 1;
    return `${line} L ${xAt(last)} ${padding.top + innerH} L ${xAt(0)} ${padding.top + innerH} Z`;
  };

  // Y-axis ticks (4 horizontal gridlines).
  const yTicks = 4;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => (yMax / yTicks) * i);

  return (
    <div className={`line-chart ${compact ? 'line-compact' : ''}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="line-svg"
        role="img"
      >
        {/* Gridlines */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={padding.left}
            x2={width - padding.right}
            y1={yAt(t)}
            y2={yAt(t)}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={1}
          />
        ))}

        {/* Y-axis labels */}
        {ticks.map((t, i) => (
          <text
            key={i}
            x={padding.left - 12}
            y={yAt(t) + 4}
            textAnchor="end"
            className="line-tick-label"
          >
            {Math.round(t)}
          </text>
        ))}

        {/* Y-axis unit */}
        {yLabel && (
          <text
            x={padding.left - 36}
            y={padding.top - 12}
            className="line-axis-label"
          >
            {yLabel}
          </text>
        )}

        {/* X-axis labels */}
        {xLabels.map((label, i) => (
          <text
            key={i}
            x={xAt(i)}
            y={height - padding.bottom + 18}
            textAnchor="middle"
            className="line-tick-label"
          >
            {label}
          </text>
        ))}

        {/* Baseline */}
        {baseline !== undefined && (
          <line
            x1={padding.left}
            x2={width - padding.right}
            y1={yAt(baseline)}
            y2={yAt(baseline)}
            stroke={chartColors.gray1000}
            strokeWidth={1.5}
            strokeDasharray="6 6"
            opacity={0.7}
          />
        )}

        {/* Series */}
        {series.map((s, i) => (
          <g key={i}>
            <path d={areaPath(s)} fill={s.color} opacity={0.08} />
            <path
              d={linePath(s)}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {markers &&
              s.data.map((p, j) => (
                <circle
                  key={j}
                  cx={xAt(j)}
                  cy={yAt(p.y)}
                  r={compact ? 3 : 4}
                  fill="#fff"
                  stroke={s.color}
                  strokeWidth={2.5}
                />
              ))}
          </g>
        ))}
      </svg>

      {series.length > 0 && (
        <ul className="line-legend">
          {series.map((s, i) => (
            <li key={i}>
              <span className="line-legend-swatch" style={{ background: s.color }} />
              {s.label}
            </li>
          ))}
          {baseline !== undefined && (
            <li className="line-legend-baseline">
              <span
                className="line-legend-swatch"
                style={{ background: 'transparent', borderTop: `2px dashed ${chartColors.gray1000}` }}
              />
              baseline
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
