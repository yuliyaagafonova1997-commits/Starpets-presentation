import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './CurrencyKingSlide.css';

// PDF page 10 — what would you most likely buy (36 ответов).
const buyData = [
  { label: 'In-game currency (Divine/Chaos)', value: 25, color: chartColors.orange },
  { label: 'In-game services (leveling, etc.)', value: 8, color: chartColors.gray },
  { label: 'In-game items (Headhunter, etc.)', value: 3, color: chartColors.black },
];

// PDF page 10 — what would you most likely sell (36 ответов).
const sellData = [
  { label: 'In-game currency (Divine/Chaos)', value: 26, color: chartColors.orange },
  { label: 'In-game services (leveling, etc.)', value: 6, color: chartColors.gray },
  { label: 'In-game items (Headhunter, etc.)', value: 4, color: chartColors.black },
];

const todos = [
  {
    title: 'Главный экран — курсы Divine/Chaos',
    text: 'Остальные товары и услуги — в отдельные вкладки',
  },
  {
    title: 'Escrow + страховка от бана',
    text: 'Импорт репутации с G2G/FunPay (если реализуемо)',
  },
  {
    title: 'Онбординг для новичков',
    text: 'Пользователь под NDA — нужен тест маскировки',
  },
];

export function CurrencyKingSlide() {
  return (
    <Slide number={11} total={16}>
      <div className="section-header">
        <h2 className="section-title">Валюта — король</h2>
        <p className="section-subtitle">
          69% покупают и&nbsp;72% продают валюту. Items и&nbsp;services — вторичны.
          Это определяет структуру главного экрана и&nbsp;приоритет фич
        </p>
      </div>
      <div className="currency-charts">
        <div className="currency-chart-card">
          <div className="currency-chart-label">Что покупают</div>
          <PieChart
            data={buyData}
            size={180}
            thickness={30}
            centerLabel="69%"
            centerSubLabel="currency"
            countUnit={36}
          />
        </div>
        <div className="currency-chart-card">
          <div className="currency-chart-label">Что продают</div>
          <PieChart
            data={sellData}
            size={180}
            thickness={30}
            centerLabel="72%"
            centerSubLabel="currency"
            countUnit={36}
          />
        </div>
        <div className="currency-todo">
          <div className="currency-todo-label">To do для продукта</div>
          <ul>
            {todos.map((t, i) => (
              <li key={i}>
                <div className="todo-num">{i + 1}</div>
                <div>
                  <div className="todo-title">{t.title}</div>
                  <div className="todo-text">{t.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="data-source">N&nbsp;=&nbsp;36 · Опрос PoE-аудитории, 2025</span>
    </Slide>
  );
}
