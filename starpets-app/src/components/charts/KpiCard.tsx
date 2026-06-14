import './KpiCard.css';

interface KpiCardProps {
  /** Big numeric value (or short string) shown hero-style. */
  value: string;
  /** Small label above the value. */
  label?: string;
  /** Caption / description below the value. */
  caption?: string;
  /** Accent color (defaults to --accent). */
  accent?: string;
  /** Optional small icon or letter to display top-left. */
  glyph?: string;
  /** Compact variant: smaller text, no border. */
  compact?: boolean;
}

export function KpiCard({
  value,
  label,
  caption,
  accent,
  glyph,
  compact = false,
}: KpiCardProps) {
  return (
    <div
      className={`kpi-card ${compact ? 'kpi-compact' : ''}`}
      style={
        accent
          ? ({ ['--kpi-accent' as string]: accent } as React.CSSProperties)
          : undefined
      }
    >
      {glyph && <div className="kpi-glyph">{glyph}</div>}
      {label && <div className="kpi-label">{label}</div>}
      <div className="kpi-value">{value}</div>
      {caption && <div className="kpi-caption">{caption}</div>}
    </div>
  );
}
