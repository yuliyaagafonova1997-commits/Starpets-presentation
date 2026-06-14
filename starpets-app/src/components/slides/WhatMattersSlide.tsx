import { Slide } from '../ui/Slide';
import { BarChart } from '../charts/BarChart';
import { chartColors } from '../charts/chartColors';
import './WhatMattersSlide.css';

// PDF page 7 — What would you pay the most attention to when buying in-game items?
// 36 ответов (multi-select). Топ-9 значимых пунктов.
const whatMattersData = [
  { label: 'Репутация площадки', value: 75, count: 27, highlight: true },
  { label: 'Цена и выгода', value: 72.2, count: 26, highlight: true },
  { label: 'История сделок продавца', value: 66.7, count: 24 },
  { label: 'Безопасность оплаты', value: 55.6, count: 20 },
  { label: 'Скорость доставки', value: 52.8, count: 19 },
  { label: 'Безопасность аккаунта', value: 44.4, count: 16 },
  { label: 'Рекомендация стримера', value: 25, count: 9 },
  { label: 'Качество поддержки', value: 19.4, count: 7 },
  { label: 'Узнаваемость бренда', value: 19.4, count: 7 },
];

export function WhatMattersSlide() {
  return (
    <Slide number={8} total={16}>
      <div className="section-header">
        <h2 className="section-title">Что важно при выборе маркетплейса</h2>
        <p className="section-subtitle">
          Репутация и&nbsp;цена — два главных фактора. Безопасность оплаты и&nbsp;скорость
          доставки — на&nbsp;втором эшелоне. Это приоритеты для продукта и&nbsp;маркетинга
        </p>
      </div>
      <div className="what-matters-layout">
        <div className="bar-card">
          <BarChart data={whatMattersData} compact />
        </div>
        <div className="what-matters-side">
          <div className="priority-card priority-p1">
            <div className="priority-label">P1 — must have</div>
            <ul>
              <li>
                <span className="dot" style={{ background: chartColors.orange }} />
                <div>
                  <strong>Репутация площадки</strong> — обзорный рейтинг и&nbsp;история
                  сделок продавца
                </div>
              </li>
              <li>
                <span className="dot" style={{ background: chartColors.orange }} />
                <div>
                  <strong>Цена и&nbsp;ценность</strong> — конкурентные курсы Divine/Chaos
                </div>
              </li>
            </ul>
          </div>
          <div className="priority-card priority-p2">
            <div className="priority-label">P2 — should have</div>
            <ul>
              <li>
                <span className="dot" style={{ background: chartColors.gray }} />
                <div>Безопасная оплата и&nbsp;скорость доставки</div>
              </li>
              <li>
                <span className="dot" style={{ background: chartColors.gray }} />
                <div>Защита аккаунта (страховка от&nbsp;бана)</div>
              </li>
            </ul>
          </div>
          <div className="priority-card priority-p3">
            <div className="priority-label">P3 — nice to have</div>
            <ul>
              <li>Эндорсмент от&nbsp;KOL, качество поддержки, видимость рекламы</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
