import { Slide } from '../ui/Slide';
import './CurrencyKingSlide.css';

export function CurrencyKingSlide() {
  return (
    <Slide number={11} total={15}>
      <div className="section-header">
        <h2 className="section-title">Валюта — король</h2>
      </div>
      <div className="currency-grid">
        <div className="currency-orbs">
          <div className="orb-card">
            <span className="orb-icon">💎</span>
            <div>
              <h4>Divine Orb</h4>
              <p>Основная валюта для торговли предметами высшего уровня</p>
            </div>
          </div>
          <div className="orb-card">
            <span className="orb-icon">🔥</span>
            <div>
              <h4>Chaos Orb</h4>
              <p>Базовая валюта для повседневных операций</p>
            </div>
          </div>
        </div>
        <div className="todo-box">
          <h3>To do:</h3>
          <ul className="todo-list">
            <li>
              Главный экран — курсы Divine Orb/Chaos Orb. Остальное вынести в отдельные вкладки.
            </li>
            <li>Escrow, страховка от бана (если реализуемо), импорт репутации</li>
            <li>Онбординг для новичков</li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}