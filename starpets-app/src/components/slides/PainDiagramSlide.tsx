import { Slide } from '../ui/Slide';
import { BanIcon, ScaredIcon, MoneyIcon, LinkIcon } from '../icons';
import { chartColors } from '../charts/chartColors';
import './PainDiagramSlide.css';

// Top-3 barriers derived from the in-game struggles survey (PDF p.5 + p.6).
// 4 (jonatan eblan geimdzaina, 2.8%) included in the footnote on the FieldResearch slide.
const topPains = [
  {
    icon: BanIcon,
    color: chartColors.red,
    pct: '27.6%',
    title: 'Страх бана аккаунта',
    sub: 'Fear of losing the account — главный барьер, страх нарушить правила PoE',
    count: 8,
  },
  {
    icon: ScaredIcon,
    color: chartColors.orange,
    pct: '27.6%',
    title: 'Хочу заработать сам',
    sub: 'Предпочитают фармить сами — это не наш сегмент, но и не мешают остальным',
    count: 8,
  },
  {
    icon: MoneyIcon,
    color: chartColors.blue,
    pct: '17.2%',
    title: 'Риск скама',
    sub: 'Страх обмана — решается escrow и прозрачной историей сделок',
    count: 5,
  },
];

const other = [
  { icon: LinkIcon, label: 'P2P подозрительно', pct: '10.3%' },
  { icon: ScaredIcon, label: 'Долгий вывод', pct: '6.9%' },
  { icon: MoneyIcon, label: 'Высокие комиссии', pct: '6.9%' },
  { icon: BanIcon, label: 'Поддержка — боль', pct: '3.5%' },
];

export function PainDiagramSlide() {
  return (
    <Slide number={6} total={16}>
      <div className="section-header">
        <h2 className="section-title">Главные боли и&nbsp;барьеры</h2>
        <p className="section-subtitle">
          Три топ-причины покрывают&nbsp;72% негатива аудитории. Бан аккаунта&nbsp;— главный
          страх, и&nbsp;именно его должен снять продукт
        </p>
      </div>
      <div className="pain-top">
        {topPains.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="pain-top-card">
              <div className="pain-top-icon" style={{ color: p.color }}>
                <Icon size={28} color={p.color} />
              </div>
              <div className="pain-top-pct" style={{ color: p.color }}>
                {p.pct}
              </div>
              <h4>{p.title}</h4>
              <p>{p.sub}</p>
              <div className="pain-top-count">N&nbsp;=&nbsp;{p.count}</div>
            </div>
          );
        })}
      </div>
      <div className="pain-secondary">
        <div className="pain-secondary-label">Остальные барьеры</div>
        <div className="pain-secondary-grid">
          {other.map((o, i) => {
            const Icon = o.icon;
            return (
              <div key={i} className="pain-secondary-item">
                <span className="pain-secondary-icon">
                  <Icon size={16} color="var(--text-secondary)" />
                </span>
                <span className="pain-secondary-name">{o.label}</span>
                <span className="pain-secondary-pct">{o.pct}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
