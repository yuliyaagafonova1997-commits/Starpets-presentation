import './StackedBar.css';

export interface StackedSegment {
  label: string;
  value: number; // percentage of total (0-100)
  color: string;
}

interface StackedBarProps {
  /** Each row is a category, each segment is a portion of 100. */
  rows: {
    label: string;
    segments: StackedSegment[];
  }[];
  /** Title shown above the chart. */
  caption?: string;
  /** Show percentage labels inside segments. */
  showValues?: boolean;
  /** Compact mode: smaller font, less padding. */
  compact?: boolean;
}

export function StackedBar({
  rows,
  caption,
  showValues = true,
  compact = false,
}: StackedBarProps) {
  return (
    <div className={`stacked-bar ${compact ? 'sb-compact' : ''}`}>
      {caption && <div className="sb-caption">{caption}</div>}
      <div className="sb-rows">
        {rows.map((row, i) => (
          <div key={i} className="sb-row">
            <div className="sb-label">{row.label}</div>
            <div className="sb-track">
              {row.segments.map((seg, j) => {
                const width = Math.max(0, Math.min(100, seg.value));
                return (
                  <div
                    key={j}
                    className="sb-segment"
                    style={{
                      width: `${width}%`,
                      background: seg.color,
                    }}
                    title={`${seg.label}: ${seg.value.toFixed(0)}%`}
                  >
                    {showValues && width >= 10 && (
                      <span className="sb-value">{width.toFixed(0)}%</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Shared legend at the bottom */}
      <ul className="sb-legend">
        {(() => {
          const seen = new Set<string>();
          const items: { label: string; color: string }[] = [];
          rows.forEach((r) =>
            r.segments.forEach((s) => {
              if (!seen.has(s.label)) {
                seen.add(s.label);
                items.push({ label: s.label, color: s.color });
              }
            })
          );
          return items.map((it, i) => (
            <li key={i}>
              <span className="sb-legend-swatch" style={{ background: it.color }} />
              {it.label}
            </li>
          ));
        })()}
      </ul>
    </div>
  );
}
