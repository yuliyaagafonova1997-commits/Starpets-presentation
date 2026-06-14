import { Slide } from '../ui/Slide';
import './FieldResearchSlide.css';

export function FieldResearchSlide() {
  return (
    <Slide number={3} total={15}>
      <div className="section-header">
        <h2 className="section-title">Полевая разведка</h2>
      </div>
      <div className="research-grid">
        <div className="research-card">
          <h3>1. Составление опроса</h3>
          <p>
            портрет игрока → опыт в PoE → отношение к RMT и маркетплейсам → боли и барьеры в
            игре → триггеры для покупки/продажи валюты → преференции по функционалу
            маркетплейса
          </p>
        </div>
        <div className="research-card">
          <h3>2. Карта сообществ</h3>
          <p>
            Discord серверы трейдеров (TFT; Eternal Trove) и крупных стримеров; сабреддиты по
            игре; группы в Facebook; группы маркетплейсов-конкурентов.
          </p>
        </div>
      </div>
    </Slide>
  );
}