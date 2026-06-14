import { Slide } from '../ui/Slide'
import './FieldResearchSlide.css'

export function FieldResearchSlide() {
  return (
    <Slide number={3} total={16}>
      <div className="section-header">
        <h2 className="section-title">Полевая разведка</h2>
        {/*<p className="section-subtitle">
          Два параллельных трека: целевой опрос PoE-аудитории и&nbsp;карта
          сообществ, в&nbsp;которых живут потенциальные покупатели
          и&nbsp;продавцы
        </p>*/}
      </div>
      <div className="research-grid">
        <div className="research-card">
          <h3>1. Составление опроса</h3>
          <p>
            портрет игрока → опыт в PoE → отношение к RMT и маркетплейсам → боли
            и&nbsp;барьеры в&nbsp;игре → триггеры для покупки/продажи валюты →
            преференции по&nbsp;функционалу маркетплейса
          </p>
        </div>
        <div className="research-cards-wrapper">
          <div className="research-card">
            <h3>2. Карта сообществ</h3>
            <p>
              Discord серверы трейдеров (TFT; Eternal Trove) и&nbsp;крупных
              стримеров; сабреддиты по&nbsp;игре; группы в&nbsp;Facebook; группы
              маркетплейсов-конкурентов.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
