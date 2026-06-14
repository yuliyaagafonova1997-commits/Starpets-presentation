import { Slide } from '../ui/Slide';
import { KpiCard } from '../charts/KpiCard';
import { chartColors } from '../charts/chartColors';
import { QuestionIcon } from '../icons';
import './VerdictSlide.css';

export function OpenQuestion2Slide() {
  return (
    <Slide number={32} total={34} dark>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="question-meta">
            <QuestionIcon size={14} color="var(--accent)" />
            Открытый вопрос · 2 из&nbsp;4
          </div>
          <h2 className="question-headline">Каков реальный LTV покупателя и&nbsp;продавца?</h2>
          <p className="question-quote">
            У&nbsp;нас пока нет когортных данных, чтобы ответить, кто&nbsp;ценнее: 100&nbsp;покупателей
            или 20&nbsp;продавцов с&nbsp;большим оборотом
          </p>
          <p className="hypo-body">
            Без&nbsp;этого не&nbsp;понять, на&nbsp;какой сегмент давить маркетингом и&nbsp;как считать
            юнит-экономику
          </p>
        </div>
        <div className="hypo-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <KpiCard
              value="?"
              label="LTV покупателя"
              caption="гипотеза: 2–4 сделки за лигу"
              accent={chartColors.orange}
              compact
            />
            <KpiCard
              value="?"
              label="LTV продавца"
              caption="гипотеза: 1 лига активности"
              accent={chartColors.blue}
              compact
            />
          </div>
          <div className="hypo-evidence">
            <h4>Что нужно собрать</h4>
            <ul>
              <li>
                Когорты по&nbsp;месяцу регистрации
              </li>
              <li>
                Среднее число сделок на&nbsp;пользователя за&nbsp;лигу
              </li>
              <li>
                Retention curve между&nbsp;лигами
              </li>
              <li>
                GMV per&nbsp;user по&nbsp;сегментам
              </li>
            </ul>
          </div>
          <div className="hypo-evidence" style={{ background: 'rgba(254, 153, 32, 0.08)' }}>
            <h4 style={{ color: 'var(--accent)' }}>Метод</h4>
            <ul>
              <li>
                Включить аналитику в&nbsp;MVP&nbsp;— иначе вопрос закроется только после&nbsp;6&nbsp;месяцев
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
}
