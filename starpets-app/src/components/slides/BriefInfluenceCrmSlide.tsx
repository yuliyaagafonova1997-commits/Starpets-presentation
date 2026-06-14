import { Slide } from '../ui/Slide';
import { ChartIcon, EyeIcon } from '../icons';
import './BriefMarketingSlide.css';

export function BriefInfluenceCrmSlide() {
  return (
    <Slide number={15} total={16}>
      <div className="section-header">
        <h2 className="section-title">Брифинг команд: Influence и&nbsp;CRM</h2>
        <p className="section-subtitle">
          Два параллельных потока: Influence закрывает нативные интеграции с&nbsp;лидерами мнений,
          CRM готовит сегментацию и&nbsp;триггерные цепочки к&nbsp;старту лиги
        </p>
      </div>
      <div className="influence-crm-grid">
        <div className="ic-card">
          <h3>
            <span className="ic-card-icon">
              <EyeIcon size={22} color="var(--accent)" />
            </span>
            Influence
          </h3>
          <ul className="ic-list">
            <li>
              <strong>Договориться с&nbsp;2–3 стримерами-гайдоделами</strong> о&nbsp;нативных
              интеграциях&nbsp;— в&nbsp;течение пары недель, пока лига ещё живая
            </li>
            <li>
              <strong>Подготовить скрипты для интеграций</strong>&nbsp;— на&nbsp;этой неделе
            </li>
            <li>
              <strong>Подготовить аффилиэйт ссылки</strong>&nbsp;— на&nbsp;этой неделе
            </li>
          </ul>
        </div>
        <div className="ic-card">
          <h3>
            <span className="ic-card-icon">
              <ChartIcon size={22} color="var(--accent)" />
            </span>
            CRM
          </h3>
          <ul className="ic-list">
            <li>
              <strong>Подготовить триггерные цепочки</strong> для активации&nbsp;— за&nbsp;неделю
              до&nbsp;старта лиги
            </li>
            <li>
              <strong>За&nbsp;3 дня до&nbsp;лиги</strong>&nbsp;— «стартовый капитал»
            </li>
            <li>
              <strong>День 2–3</strong>&nbsp;— «цены упали, пополняемся»
            </li>
            <li>
              <strong>Через 7&nbsp;дней неактивности</strong> после посещения
            </li>
            <li>
              <strong>Сегментировать базу</strong> (новички / покупатели / продавцы)&nbsp;—
              после 100 сделок в&nbsp;сегменте PoE
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
