import { Slide } from '../ui/Slide';
import { ProcessStep } from '../charts/ProcessStep';
import { chartColors } from '../charts/chartColors';
import { QuestionIcon } from '../icons';
import './VerdictSlide.css';

const migrationSteps = [
  { num: 1, title: 'Импорт рейтинга', desc: 'с G2G / FunPay', color: chartColors.orange },
  { num: 2, title: 'Нулевая комиссия', desc: 'первые 3 месяца', color: chartColors.orange },
  { num: 3, title: 'Аффилиат', desc: 'бонус за&nbsp;привод', color: chartColors.gray },
  { num: 4, title: 'Возврат', desc: 'если не&nbsp;зашло', color: chartColors.gray },
];

export function OpenQuestion3Slide() {
  return (
    <Slide number={33} total={34}>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="question-meta">
            <QuestionIcon size={14} color="var(--accent)" />
            Открытый вопрос · 3 из&nbsp;4
          </div>
          <h2 className="question-headline">Как массово переманить продавцов с&nbsp;G2G и&nbsp;FunPay?</h2>
          <p className="question-quote">
            У&nbsp;продавцов уже есть репутация, оборот и&nbsp;клиентская база. Их&nbsp;миграция&nbsp;=
            самый быстрый способ наполнить маркетплейс supply&nbsp;side
          </p>
          <p className="hypo-body">
            Гипотеза&nbsp;— перенос репутации + нулевая комиссия. Но&nbsp;какая комбинация
            оффера реально работает, пока не&nbsp;проверено
          </p>
        </div>
        <div className="hypo-right">
          <div className="hypo-evidence">
            <h4>Гипотеза миграции</h4>
            <ProcessStep steps={migrationSteps} orientation="vertical" />
          </div>
          <div className="hypo-evidence" style={{ background: 'rgba(254, 153, 32, 0.08)' }}>
            <h4 style={{ color: 'var(--accent)' }}>Метрики успеха</h4>
            <ul>
              <li>
                <strong>Conversion</strong> — % продавцов, принявших оффер
              </li>
              <li>
                <strong>GMV per&nbsp;seller</strong> — сохранился ли оборот после&nbsp;миграции
              </li>
              <li>
                <strong>Churn 30d</strong> — не&nbsp;вернулись ли назад
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
