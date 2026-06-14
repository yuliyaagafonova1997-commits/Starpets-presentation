import { Slide } from '../ui/Slide';
import {
  GamepadHardcoreIcon,
  PersonIcon,
  CycleIcon,
  WarningIcon,
  MoneyIcon,
  StarIcon,
} from '../icons';
import './MainInsightSlide.css';

const insights = [
  { icon: GamepadHardcoreIcon, label: 'Hardcore' },
  { icon: PersonIcon, label: 'Adult' },
  { icon: CycleIcon, label: 'Cyclical Pattern' },
  { icon: WarningIcon, label: 'Fear of Losing Account' },
  { icon: MoneyIcon, label: 'Prefers Currency' },
  { icon: StarIcon, label: 'Trusts KOLs' },
];

export function MainInsightSlide() {
  return (
    <Slide number={2} total={16}>
      <div className="section-header">
        <h2 className="section-title">Главный инсайт</h2>
        <p className="section-subtitle">
          Шесть характеристик целевого игрока — все они сходятся в&nbsp;одну фигуру
          взрослого hardcore-покупателя, который боится потерять аккаунт
        </p>
      </div>
      <div className="insight-diagram">
        <div className="insight-center">
          <div className="insight-ring insight-ring-1" />
          <div className="insight-ring insight-ring-2" />
          <div className="insight-ring insight-ring-3" />
          <div className="insight-blocks">
            {insights.map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={i} className={`insight-block insight-block-${i + 1}`}>
                  <span className="insight-block-icon">
                    <Icon size={16} color="var(--text-primary)" />
                  </span>
                  {it.label}
                </div>
              );
            })}
          </div>
          <div className="insight-person">
            <div className="insight-person-head" />
            <div className="insight-person-body" />
            <div className="insight-poe-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="poeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#c9a227' }} />
                    <stop offset="50%" style={{ stopColor: '#8b6914' }} />
                    <stop offset="100%" style={{ stopColor: '#5c4a0f' }} />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#poeGrad2)"
                  strokeWidth="4"
                />
                <path
                  d="M50 15 L65 35 L85 40 L70 55 L75 80 L50 70 L25 80 L30 55 L15 40 L35 35 Z"
                  fill="url(#poeGrad2)"
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="12" fill="#ffffff" />
                <circle cx="50" cy="50" r="6" fill="url(#poeGrad2)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
