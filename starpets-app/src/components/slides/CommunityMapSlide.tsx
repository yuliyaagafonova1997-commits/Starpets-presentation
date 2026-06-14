import { Slide } from '../ui/Slide';
import { GroupIcon, GamepadIcon, PenIcon, EyeIcon } from '../icons';
import './ThesisSlide.css';

const tiles = [
  {
    icon: GroupIcon,
    title: 'Discord-серверы трейдеров',
    sub: 'TFT, Eternal Trove — основной канал продавцов и&nbsp;покупателей валюты',
    meta: 'Канал №1',
  },
  {
    icon: GamepadIcon,
    title: 'Сабреддиты',
    sub: 'r/pathofexile — органические обсуждения, обзоры маркетплейсов, RMT-дебаты',
    meta: 'Органика',
  },
  {
    icon: PenIcon,
    title: 'Группы маркетплейсов',
    sub: 'G2G, FunPay — где живут продавцы и&nbsp;можно изучить конкурентов',
    meta: 'Конкуренты',
  },
  {
    icon: EyeIcon,
    title: 'KOL и стримеры',
    sub: 'Twitch, YouTube — гайдоделы и&nbsp;хардкорщики, через которых идёт трафик',
    meta: 'Влияние',
  },
];

export function CommunityMapSlide() {
  return (
    <Slide number={10} total={34}>
      <div className="section-header">
        <h2 className="section-title">Карта сообществ PoE</h2>
        <p className="section-subtitle">
          Четыре канала, в&nbsp;которых живут потенциальные покупатели и&nbsp;продавцы. Каждый канал
          требует отдельной тактики исследования
        </p>
      </div>
      <div className="community-grid">
        {tiles.map((t, i) => {
          const Icon = t.icon;
          return (
            <div key={i} className="community-tile">
              <div style={{ color: 'var(--accent)' }}>
                <Icon size={28} color="var(--accent)" />
              </div>
              <h4>{t.title}</h4>
              <p>{t.sub}</p>
              <div className="tile-meta">{t.meta}</div>
            </div>
          );
        })}
      </div>
      <span className="data-source">N&nbsp;=&nbsp;36 · Опрос PoE-аудитории, 2025</span>
    </Slide>
  );
}
