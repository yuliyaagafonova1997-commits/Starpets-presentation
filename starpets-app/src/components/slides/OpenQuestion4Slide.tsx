import { Slide } from '../ui/Slide';
import { ComparisonCard } from '../charts/ComparisonCard';
import { chartColors } from '../charts/chartColors';
import { QuestionIcon } from '../icons';
import './VerdictSlide.css';

export function OpenQuestion4Slide() {
  return (
    <Slide number={34} total={34} dark>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="question-meta">
            <QuestionIcon size={14} color="var(--accent)" />
            Открытый вопрос · 4 из&nbsp;4
          </div>
          <h2 className="question-headline">Готовы ли топ-стримеры открыто рекламировать RMT-сервис?</h2>
          <p className="question-quote">
            Топ-стримеры&nbsp;— основной канал трафика в&nbsp;PoE. Но&nbsp;их&nbsp;аудитория чувствительна
            к&nbsp;RMT, и&nbsp;один негативный пост разрушает репутацию стримера
          </p>
          <p className="hypo-body">
            Нужен пилот с&nbsp;2–3 стримерами, чтобы понять реальную готовность и&nbsp;тот&nbsp;формат,
            который не&nbsp;уничтожит их&nbsp;репутацию
          </p>
        </div>
        <div className="hypo-right">
          <ComparisonCard
            left={{
              title: 'Закрытая реклама',
              items: [
                { label: 'Безопасность бренда', value: '~95%', color: chartColors.orange500 },
                { label: 'Охват', value: '~30%', color: chartColors.orange },
                { label: 'Реакция аудитории', value: 'Нейтральная', color: chartColors.gray },
              ],
              caption: 'Стример не называет продукт прямо',
            }}
            right={{
              title: 'Открытая реклама',
              items: [
                { label: 'Безопасность бренда', value: '~50%', color: chartColors.gray1000 },
                { label: 'Охват', value: '~90%', color: chartColors.orange500 },
                { label: 'Реакция аудитории', value: 'Риск токсичности', color: chartColors.gray1000 },
              ],
              caption: 'Стример открыто называет маркетплейс',
            }}
            divider="vs"
          />
          <div className="hypo-evidence" style={{ background: 'rgba(254, 153, 32, 0.1)' }}>
            <h4 style={{ color: chartColors.orange }}>Пилот</h4>
            <ul>
              <li>
                2–3 лояльных стримера, разные форматы
              </li>
              <li>
                Тестировать в&nbsp;течение одной лиги
              </li>
              <li>
                Метрика: соотношение новых пользователей к&nbsp;репутационным потерям
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
