import { Slide } from '../ui/Slide';
import { KpiCard } from '../charts/KpiCard';
import { chartColors } from '../charts/chartColors';
import './ThesisSlide.css';

export function ResearcherInsight1Slide() {
  return (
    <Slide number={11} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Инсайт ресерчера</span>
            <span className="step-num">· 1 из&nbsp;2</span>
          </div>
          <h2 className="thesis-headline">Прямой запрос<br />= бан или игнор</h2>
          <p className="thesis-subhead">
            Когда мы&nbsp;открыто просим размещение в&nbsp;PoE-сообществах, модераторы банят,
            игнорируют или отвечают негативно. Прямая просьба&nbsp;— красная тряпка
          </p>
          <ul className="thesis-bullets">
            <li>
              Прямой запрос&nbsp;— бан/игнор в&nbsp;большинстве каналов
            </li>
            <li>
              В&nbsp;некоторых каналах&nbsp;— токсичная обратная связь
            </li>
            <li>
              Модераторы следят за&nbsp;RMT-промо, репутация канала важнее
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <KpiCard
              value="~70%"
              label="Каналов"
              caption="банят / игнорируют прямой запрос"
              accent={chartColors.gray1000}
              glyph="R1"
              compact
            />
            <KpiCard
              value="~20%"
              label="Каналов"
              caption="токсичный негатив, но не бан"
              accent={chartColors.orange}
              glyph="R1"
              compact
            />
            <KpiCard
              value="~10%"
              label="Каналов"
              caption="принимают запрос"
              accent={chartColors.orange500}
              glyph="R1"
              compact
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
