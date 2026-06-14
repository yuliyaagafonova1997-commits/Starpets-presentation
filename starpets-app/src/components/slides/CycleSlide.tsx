import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './CycleSlide.css';

// PDF page 9 — главная причина выбрать маркетплейс (36 ответов).
// «kickstart + become a seller» — единый пункт в источнике, не разделяем.
const reasonData = [
  { label: 'Быстрее прокачаться', value: 10, color: chartColors.orange },
  { label: 'Попробовать разные билды', value: 7, color: chartColors.blue },
  { label: 'Не отставать от топов', value: 4, color: chartColors.black },
  { label: 'Стартовать / стать продавцом', value: 3, color: chartColors.green },
  { label: 'Избежать скама в игре', value: 1, color: chartColors.red },
  { label: 'Другое', value: 11, color: chartColors.lightGray },
];

// PDF page 9 — что делают вместо маркетплейса (36 ответов).
const insteadData = [
  { label: 'Фармили больше обычного', value: 11, color: chartColors.orange },
  { label: 'P2P-торговля в игре', value: 7, color: chartColors.blue },
  { label: 'Брали у друзей / гильдии', value: 7, color: chartColors.green },
  { label: 'Флипали / крафтили', value: 4, color: chartColors.purple },
  { label: 'Продавали свои предметы', value: 4, color: chartColors.teal },
  { label: 'Ждали / откладывали', value: 2, color: chartColors.gray },
  { label: 'Обманывали игроков', value: 1, color: chartColors.red },
];

const phases = [
  { num: 1, name: 'Старт', desc: 'Максимальный спрос на валюту' },
  { num: 2, name: 'Пик (2–3 день)', desc: 'Цены упали, второй всплеск' },
  { num: 3, name: 'Спад', desc: 'Активность падает' },
  { num: 4, name: 'Межсезонье', desc: 'Минимум активности' },
];

export function CycleSlide() {
  return (
    <Slide number={10} total={16}>
      <div className="section-header">
        <h2 className="section-title">Цикличность игры и сценарии покупки</h2>
        <p className="section-subtitle">
          Спрос жёстко привязан к&nbsp;старту лиги. Нужен капитал&nbsp;— идут
          на&nbsp;маркетплейс; не&nbsp;хотят рисковать&nbsp;— фармят или берут
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
            size={140}
            thickness={24}
            centerLabel="27.8%"
            centerSubLabel="прокачка"
            countUnit={36}
            legendPosition="bottom"
          />
        </div>
        <div className="cycle-chart-card">
          <div className="cycle-chart-title">Что делают, если не маркетплейс</div>
          <PieChart
            data={insteadData}
            size={140}
            thickness={24}
            centerLabel="30.6%"
            centerSubLabel="фарм"
            countUnit={36}
            legendPosition="bottom"
          />
        </div>
      </div>
    </Slide>
  );
}
