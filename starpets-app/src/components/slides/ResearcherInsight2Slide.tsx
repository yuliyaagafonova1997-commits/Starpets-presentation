import { Slide } from '../ui/Slide';
import { ComparisonCard } from '../charts/ComparisonCard';
import { chartColors } from '../charts/chartColors';
import { EyeIcon } from '../icons';
import './ThesisSlide.css';

export function ResearcherInsight2Slide() {
  return (
    <Slide number={12} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Инсайт ресерчера</span>
            <span className="step-num">· 2 из&nbsp;2</span>
          </div>
          <h2 className="thesis-headline">Пост без&nbsp;запроса<br />лучше</h2>
          <p className="thesis-subhead">
            Если публиковать пользу без&nbsp;прямого запроса, конверсия и&nbsp;вовлечённость
            выше. Но&nbsp;и&nbsp;риск бана тоже растёт&nbsp;— каналы чувствуют рекламу
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>+</strong> Выше конверсия, лучше reception аудитории
            </li>
            <li>
              <strong>−</strong> Выше риск бана, если канал распознает рекламу
            </li>
            <li>
              Нужен тщательный выбор каналов и&nbsp;тона
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <ComparisonCard
            left={{
              title: 'Прямой запрос',
              items: [
                { label: 'Конверсия', value: '~5%', color: chartColors.red },
                { label: 'Риск бана', value: '~70%', color: chartColors.red },
                { label: 'Reception', value: 'Токсичный', color: chartColors.gray },
              ],
              caption: 'Канал чувствует давление и закрывается',
            }}
            right={{
              title: 'Пост без запроса',
              items: [
                { label: 'Конверсия', value: '~15%', color: chartColors.green },
                { label: 'Риск бана', value: '~40%', color: chartColors.orange },
                { label: 'Reception', value: 'Нейтральный', color: chartColors.green },
              ],
              caption: 'Требует нативности и пользы в контенте',
            }}
            divider="vs"
          />
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <EyeIcon size={14} color="var(--accent)" />
              Вывод
            </div>
            <div>
              Нативный контент&nbsp;— основной канал. Прямой запрос&nbsp;— только в&nbsp;лояльных
              каналах с&nbsp;предварительным аппрувом
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
