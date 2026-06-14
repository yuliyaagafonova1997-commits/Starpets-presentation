import { Slide } from '../ui/Slide';
import './HypothesesSlide.css';

export function HypothesesSlide() {
  return (
    <Slide number={9} total={15}>
      <div className="section-header">
        <h2 className="section-title">Гипотезы и вердикты</h2>
      </div>
      <div className="hypo-list">
        <div className="hypo-item">
          <div className="hypo-num">1</div>
          <div className="hypo-content">
            <h3>Аудитория взрослая и хардкорная, маркетинг должен это учитывать</h3>
            <p>Для Антона: 1 — подтверждена</p>
            <span className="verdict verdict-confirmed">Подтверждена</span>
          </div>
        </div>
        <div className="hypo-item">
          <div className="hypo-num">2</div>
          <div className="hypo-content">
            <h3>Безопасность — ключ к конверсии не-покупателей.</h3>
            <p>Для Антона: 2 — переформулирована</p>
            <span className="verdict verdict-reformulated">Переформулирована</span>
          </div>
        </div>
        <div className="hypo-item">
          <div className="hypo-num">3</div>
          <div className="hypo-content">
            <h3>Спрос жёстко привязан к старту лиги, вне пика маркетинг неэффективен.</h3>
            <p>Для Антона: 3 — подтверждена</p>
            <span className="verdict verdict-confirmed">Подтверждена</span>
          </div>
        </div>
        <div className="hypo-item">
          <div className="hypo-num">4</div>
          <div className="hypo-content">
            <h3>Валюта доминирует над предметами и услугами.</h3>
            <p>Для Антона: 4 — подтверждена с оговоркой</p>
            <span className="verdict verdict-confirmed">Подтверждена</span>
            <span className="verdict-note">с оговоркой</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}