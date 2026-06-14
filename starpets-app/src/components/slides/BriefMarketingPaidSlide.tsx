import { Slide } from '../ui/Slide';
import { TargetIcon } from '../icons';
import './BriefMarketingSlide.css';

export function BriefMarketingPaidSlide() {
  return (
    <Slide number={14} total={16}>
      <div className="section-header">
        <h2 className="section-title">Брифинг: маркетинг и&nbsp;Paid</h2>
        <p className="section-subtitle">
          Команда маркетинга — фокус на&nbsp;performance и&nbsp;таргетированные креативы под сегменты
        </p>
      </div>
      <div className="ic-card ic-card-full">
        <h3>
          <span className="ic-card-icon">
            <TargetIcon size={22} color="var(--accent)" />
          </span>
          Маркетинг + Paid
        </h3>
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
            <strong>Пилот с лояльными инфлюенсерами</strong> — открытая реклама RMT
          </li>
        </ul>
      </div>
    </Slide>
  );
}
