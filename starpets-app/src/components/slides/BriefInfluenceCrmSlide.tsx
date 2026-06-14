import { Slide } from '../ui/Slide';
import { ChartIcon } from '../icons';
import './BriefMarketingSlide.css';

export function BriefInfluenceCrmSlide() {
  return (
    <Slide number={15} total={16}>
      <div className="section-header">
        <h2 className="section-title">Брифинг: Influence и&nbsp;CRM</h2>
        <p className="section-subtitle">
          Команда CRM — сегментация базы, перенос репутации и&nbsp;триггерные цепочки вокруг старта лиги
        </p>
      </div>
      <div className="ic-card ic-card-full">
        <h3>
          <span className="ic-card-icon">
            <ChartIcon size={22} color="var(--accent)" />
          </span>
          Influence + CRM
        </h3>
        <ul className="ic-list">
          <li>
            <strong>Сегментация базы:</strong> новички / покупатели / продавцы — после 100 сделок в
            PoE
          </li>
          <li>
            <strong>Перенос репутации</strong> с G2G/FunPay + нулевая комиссия
          </li>
          <li>
            <strong>Аффилиэйт ссылки</strong> — на этой неделе
          </li>
        </ul>
        <div className="ic-triggers">
          <div className="ic-triggers-label">Триггерные цепочки CRM</div>
          <ul className="ic-list">
            <li>— За 3 дня до лиги — «стартовый капитал»</li>
            <li>— День 2–3 — «цены упали, пополняемся»</li>
            <li>— Через 7 дней неактивности — реактивация</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
