import { Slide } from '../ui/Slide';
import { BarChart } from '../charts/BarChart';
import { chartColors } from '../charts/chartColors';
import { ShieldCheckIcon, StarIcon, MoneyIcon } from '../icons';
import './ThesisSlide.css';

const prefsData = [
  { label: 'Marketplace reputation', value: 75, count: 27, color: chartColors.orange, highlight: true },
  { label: 'Price and value', value: 72.2, count: 26, color: chartColors.orange, highlight: true },
  { label: "Clear seller's history", value: 66.7, count: 24, color: chartColors.gray },
  { label: 'Payment security', value: 55.6, count: 20, color: chartColors.gray },
  { label: 'Delivery speed', value: 52.8, count: 19, color: chartColors.gray },
  { label: 'Account safety', value: 44.4, count: 16, color: chartColors.gray },
];

export function Methodology6PrefsSlide() {
  return (
    <Slide number={9} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 6 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">Репутация + цена<br />= два столпа</h2>
          <p className="thesis-subhead">
            75% смотрят на&nbsp;репутацию площадки, 72% — на&nbsp;цену. Безопасность
            оплаты и&nbsp;скорость доставки&nbsp;— второй эшелон
          </p>
          <ul className="thesis-bullets">
            <li>
              <StarIcon size={16} color={chartColors.orange} /> <strong>P1 must-have</strong> — репутация и&nbsp;история сделок
            </li>
            <li>
              <MoneyIcon size={16} color={chartColors.orange} /> <strong>P1 must-have</strong> — конкурентные курсы Divine/Chaos
            </li>
            <li>
              <ShieldCheckIcon size={16} color={chartColors.gray} /> <strong>P2 should-have</strong> — escrow и&nbsp;защита аккаунта
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>
              Что важно при выборе маркетплейса
            </div>
            <BarChart data={prefsData} maxValue={100} compact />
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">P1</div>
            <div>
              Без рейтинга и&nbsp;прозрачной истории сделок ни&nbsp;один маркетплейс не&nbsp;получит
              конверсию в&nbsp;покупку
            </div>
          </div>
        </div>
      </div>
      <span className="data-source">N&nbsp;=&nbsp;36 · Опрос PoE-аудитории, 2025 · multi-select</span>
    </Slide>
  );
}
