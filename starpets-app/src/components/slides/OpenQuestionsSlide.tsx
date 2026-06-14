import { Slide } from '../ui/Slide';
import { PersonIcon, MoneyIcon, GroupIcon, StarIcon } from '../icons';
import './OpenQuestionsSlide.css';

const questions = [
  {
    title: 'Можно ли конвертировать принципиальных противников',
    text: 'вроде Кори без официального партнёрства с GGG?',
    Icon: PersonIcon,
  },
  {
    title: 'Каков реальный LTV',
    text: 'покупателя и продавца? Требуются когортные данные.',
    Icon: MoneyIcon,
  },
  {
    title: 'Как массово переманить продавцов с G2G и FunPay?',
    text: 'Гипотеза: перенос репутации + нулевая комиссия.',
    Icon: GroupIcon,
  },
  {
    title: 'Готовы ли топ-стримеры',
    text: 'открыто рекламировать RMT-сервис? Нужен пилот.',
    Icon: StarIcon,
  },
];

export function OpenQuestionsSlide() {
  return (
    <Slide number={16} total={16}>
      <div className="section-header">
        <h2 className="section-title">Открытые вопросы и риски</h2>
        <p className="section-subtitle">
          Четыре вопроса, на&nbsp;которые у&nbsp;нас пока нет данных. Они определяют
          дорожную карту команды на&nbsp;ближайший квартал
        </p>
      </div>
      <div className="questions-grid">
        {questions.map((q, i) => {
          const Icon = q.Icon;
          return (
            <div key={i} className="question-card">
              <div className="q-icon">
                <Icon size={20} color="var(--accent)" />
              </div>
              <p>
                <strong>{q.title}</strong> {q.text}
              </p>
            </div>
          );
        })}
      </div>
    </Slide>
  );
}
