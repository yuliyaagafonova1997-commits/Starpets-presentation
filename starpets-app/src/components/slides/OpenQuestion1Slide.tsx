import { Slide } from '../ui/Slide';
import { QuestionIcon } from '../icons';
import './VerdictSlide.css';

export function OpenQuestion1Slide() {
  return (
    <Slide number={31} total={34}>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="question-meta">
            <QuestionIcon size={14} color="var(--accent)" />
            Открытый вопрос · 1 из&nbsp;4
          </div>
          <h2 className="question-headline">Можно ли конвертировать принципиальных противников?</h2>
          <p className="question-quote">
            &laquo;Кори&raquo; и&nbsp;другие публичные критики RMT&nbsp;— конвертируются ли
            без&nbsp;официального партнёрства с&nbsp;GGG?
          </p>
          <p className="hypo-body">
            Их&nbsp;аудитория доверяет их&nbsp;мнению. Если они открыто негативны
            к&nbsp;маркетплейсу&nbsp;— это замораживает значимый сегмент. Нужно либо
            партнёрство, либо долгая работа с&nbsp;возражениями
          </p>
        </div>
        <div className="hypo-right">
          <div className="hypo-evidence">
            <h4>Что нужно выяснить</h4>
            <ul>
              <li>
                Готовы ли они к&nbsp;диалогу при&nbsp;прозрачных условиях?
              </li>
              <li>
                Есть ли сценарий партнёрства, который не&nbsp;нарушает ToS GGG?
              </li>
              <li>
                Какой % их&nbsp;аудитории уже пользуется RMT-маркетплейсами?
              </li>
            </ul>
          </div>
          <div className="hypo-evidence" style={{ background: 'rgba(254, 153, 32, 0.08)' }}>
            <h4 style={{ color: 'var(--accent)' }}>Следующий шаг</h4>
            <ul>
              <li>
                Пилотный контакт через&nbsp;KOL-сеть
              </li>
              <li>
                A/B тест: партнёрский vs&nbsp;нейтральный контент
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
