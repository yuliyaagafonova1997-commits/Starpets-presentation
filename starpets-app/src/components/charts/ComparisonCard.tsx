import './ComparisonCard.css';

export interface ComparisonItem {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}

interface ComparisonCardProps {
  left: { title: string; items: ComparisonItem[]; caption?: string };
  right: { title: string; items: ComparisonItem[]; caption?: string };
  /** Optional small label between the two cards (e.g. "vs"). */
  divider?: string;
}

export function ComparisonCard({ left, right, divider = 'vs' }: ComparisonCardProps) {
  return (
    <div className="cmp-card">
      <div className="cmp-side">
        <div className="cmp-side-title">{left.title}</div>
        <ul className="cmp-list">
          {left.items.map((it, i) => (
            <li key={i}>
              <div className="cmp-row">
                <span className="cmp-label">{it.label}</span>
                <span
                  className="cmp-value"
                  style={it.color ? { color: it.color } : undefined}
                >
                  {it.value}
                </span>
              </div>
              {it.sub && <div className="cmp-sub">{it.sub}</div>}
            </li>
          ))}
        </ul>
        {left.caption && <div className="cmp-caption">{left.caption}</div>}
      </div>
      <div className="cmp-divider">{divider}</div>
      <div className="cmp-side">
        <div className="cmp-side-title">{right.title}</div>
        <ul className="cmp-list">
          {right.items.map((it, i) => (
            <li key={i}>
              <div className="cmp-row">
                <span className="cmp-label">{it.label}</span>
                <span
                  className="cmp-value"
                  style={it.color ? { color: it.color } : undefined}
                >
                  {it.value}
                </span>
              </div>
              {it.sub && <div className="cmp-sub">{it.sub}</div>}
            </li>
          ))}
        </ul>
        {right.caption && <div className="cmp-caption">{right.caption}</div>}
      </div>
    </div>
  );
}
