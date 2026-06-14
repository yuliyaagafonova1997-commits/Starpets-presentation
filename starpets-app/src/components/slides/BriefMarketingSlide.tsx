import { Slide } from '../ui/Slide';
import './BriefMarketingSlide.css';

export function BriefMarketingSlide() {
  return (
    <Slide number={14} total={15}>
      <div className="section-header">
        <h2 className="section-title">Брифинг команд: маркетинг и Influence + CRM</h2>
      </div>
      <div className="influence-crm-grid">
        <div className="ic-card">
          <h3>🎯 Influence + Маркетинг</h3>
          <ul className="ic-list">
            <li>
              <strong>Креативы под сегменты</strong> — к началу следующей лиги
            </li>
            <li>
              <strong>Ретаргетинг</strong> на посетителей PoE-ресурсов
            </li>
            <li>
              <strong>Баннеры на Poe Ninja/Wiki</strong> — исследовать толерантность к RMT
            </li>
            <li>
              <strong>2–3 стримера-гайдодела</strong> для нативных интеграций
            </li>
            <li>
              <strong>Триггерные цепочки CRM:</strong> за 3 дня до лиги, день 2–3, через 7 дней
              неактивности
            </li>
          </ul>
        </div>
        <div className="ic-card">
          <h3>📊 CRM + Paid</h3>
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
            <li>
              <strong>Пилот с лояльными инфлюенсерами</strong> — открытая реклама RMT
            </li>
          </ul>
          <ul className="ic-list ic-sub">
            <li>— За 3 дня до лиги — «стартовый капитал»</li>
            <li>— День 2–3 — «цены упали, пополняемся»</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}