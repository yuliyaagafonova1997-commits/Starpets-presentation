import { Slide } from '../ui/Slide';
import { BarChart } from '../charts/BarChart';
import { chartColors } from '../charts/chartColors';
import { GamepadHardcoreIcon } from '../icons';
import './ThesisSlide.css';

const gamerData = [
  { label: 'Average gamer', value: 44.4, count: 16, color: chartColors.orange, highlight: true },
  { label: 'Hardcore gamer', value: 38.9, count: 14, color: chartColors.black },
  { label: 'Casual gamer', value: 16.7, count: 6, color: chartColors.lightGray },
];

export function Methodology2PoeExperienceSlide() {
  return (
    <Slide number={5} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 2 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">Сотни часов в&nbsp;PoE</h2>
          <p className="thesis-subhead">
            83% — hardcore или average, только 17% casual. Ветераны играют и&nbsp;в&nbsp;PoE1, и&nbsp;в&nbsp;PoE2.
            Новички пропускают первую часть
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>Hardcore + Average</strong> — 83% аудитории, знают рынок и&nbsp;понимают риски
            </li>
            <li>
              Ветераны перешли с&nbsp;PoE1 на&nbsp;PoE2&nbsp;— лояльны к&nbsp;серии
            </li>
            <li>
              Casual-сегмент минимален&nbsp;— там ниже LTV и&nbsp;доверие к&nbsp;маркетплейсам
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>
              Тип игрока
            </div>
            <BarChart data={gamerData} maxValue={50} compact />
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <GamepadHardcoreIcon size={14} color="var(--accent)" />
              Опыт
            </div>
            <div>
              Целевой пользователь понимает разницу между Divine и&nbsp;Chaos Orb и&nbsp;знает лигу по&nbsp;имени
            </div>
          </div>
        </div>
      </div>
      <span className="data-source">N&nbsp;=&nbsp;36 · Опрос PoE-аудитории, 2025</span>
    </Slide>
  );
}
