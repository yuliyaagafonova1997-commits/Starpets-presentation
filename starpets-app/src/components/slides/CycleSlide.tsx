import { Slide } from '../ui/Slide';
import './CycleSlide.css';

export function CycleSlide() {
  return (
    <Slide number={10} total={15}>
      <div className="section-header">
        <h2 className="section-title">Цикличность игры и сценарии покупки</h2>
      </div>
      <div className="cycle-diagram">
        <div className="cycle-wheel">
          <div className="cycle-center">Цикл лиги PoE</div>
          <div className="cycle-ring cycle-ring-1"></div>
          <div className="cycle-ring cycle-ring-2"></div>
          <div className="cycle-ring cycle-ring-3"></div>
          <div className="cycle-node cycle-node-1">
            <span className="c-icon">🚀</span>Старт
          </div>
          <div className="cycle-node cycle-node-2">
            <span className="c-icon">📈</span>Пик
          </div>
          <div className="cycle-node cycle-node-3">
            <span className="c-icon">📉</span>Спад
          </div>
          <div className="cycle-node cycle-node-4">
            <span className="c-icon">❄️</span>Межсезонье
          </div>
        </div>
        <div className="cycle-labels">
          <div className="cycle-label-item">
            <div>
              <div className="phase">Фаза 1 — Старт лиги</div>
              <h4>Максимальный спрос</h4>
              <p>Все скупают валюту для старта, максимальная активность на маркетплейсе</p>
            </div>
          </div>
          <div className="cycle-label-item">
            <div>
              <div className="phase">Фаза 2 — Пик (день 2–3)</div>
              <h4>Второй всплеск</h4>
              <p>Цены упали, пополняемся. Второй пик спроса на валюту</p>
            </div>
          </div>
          <div className="cycle-label-item">
            <div>
              <div className="phase">Фаза 3 — Спад</div>
              <h4>Спрос падает</h4>
              <p>Маркетинг неэффективен, активность снижается</p>
            </div>
          </div>
          <div className="cycle-label-item">
            <div>
              <div className="phase">Фаза 4 — Межсезонье</div>
              <h4>Минимальная активность</h4>
              <p>Ожидание следующей лиги, распродажа остатков</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}