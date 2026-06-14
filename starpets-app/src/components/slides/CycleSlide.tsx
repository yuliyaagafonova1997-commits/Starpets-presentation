import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './CycleSlide.css';

// PDF page 9 — main reason to choose third-party marketplace (36 ответов).
// «kickstart + become a seller» — единый пункт в источнике, не разделяем.
const reasonData = [
  { label: 'To achieve a certain power level faster', value: 10, color: chartColors.orange },
  { label: 'To try different builds and playstyles', value: 7, color: chartColors.blue },
  { label: 'To keep up with the top-players', value: 4, color: chartColors.black },
  { label: 'To kickstart progress / become a seller', value: 3, color: chartColors.green },
  { label: 'To avoid potential in-game scam trades', value: 1, color: chartColors.red },
  { label: 'Other', value: 11, color: chartColors.lightGray },
];

// PDF page 9 — what players do instead of using a marketplace (36 ответов).
const insteadData = [
  { label: 'Farmed more than usual', value: 11, color: chartColors.orange },
  { label: 'Relied on in-game p2p trades', value: 7, color: chartColors.blue },
  { label: 'Borrowed from friends or guildmates', value: 7, color: chartColors.green },
  { label: 'Flipped items / crafted for profit', value: 4, color: chartColors.purple },
  { label: 'Sold my own items or services', value: 4, color: chartColors.teal },
  { label: 'Just waited / postponed', value: 2, color: chartColors.gray },
  { label: 'Scum other players', value: 1, color: chartColors.red },
];

const phases = [
  { num: 1, name: 'Старт', desc: 'Максимальный спрос, все скупают валюту' },
  { num: 2, name: 'Пик (день 2–3)', desc: 'Цены упали — второй всплеск спроса' },
  { num: 3, name: 'Спад', desc: 'Активность снижается, маркетинг дорожает' },
  { num: 4, name: 'Межсезонье', desc: 'Минимальная активность, распродажа' },
];

export function CycleSlide() {
  return (
    <Slide number={10} total={16}>
      <div className="section-header">
        <h2 className="section-title">Цикличность игры и сценарии покупки</h2>
        <p className="section-subtitle">
          Спрос жёстко привязан к&nbsp;старту лиги. Когда нужен капитал — идут
          на&nbsp;маркетплейс; когда не&nbsp;хотят рисковать — фармят или берут
          у&nbsp;друзей
        </p>
      </div>
      <div className="phase-strip">
        {phases.map((p) => (
          <div key={p.num} className="phase-chip">
            <div className="phase-chip-num">{p.num}</div>
            <div>
              <div className="phase-chip-name">{p.name}</div>
              <div className="phase-chip-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="cycle-charts">
        <div className="cycle-chart-card">
          <div className="cycle-chart-title">Почему идут на маркетплейс</div>
          <PieChart
            data={reasonData}
            size={200}
            thickness={32}
            centerLabel="27.8%"
            centerSubLabel="power level"
            countUnit={36}
          />
        </div>
        <div className="cycle-chart-card">
          <div className="cycle-chart-title">Что делают, если не маркетплейс</div>
          <PieChart
            data={insteadData}
            size={200}
            thickness={32}
            centerLabel="30.6%"
            centerSubLabel="farm more"
            countUnit={36}
          />
        </div>
      </div>
      <span className="data-source">N&nbsp;=&nbsp;36 · Опрос PoE-аудитории, 2025</span>
    </Slide>
  );
}
