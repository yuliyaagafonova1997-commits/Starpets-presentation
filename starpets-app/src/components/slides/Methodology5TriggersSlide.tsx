import { Slide } from '../ui/Slide';
import { LineChart } from '../charts/LineChart';
import { chartColors } from '../charts/chartColors';
import { TriggerIcon } from '../icons';
import './ThesisSlide.css';

// League cycle — derived from CycleSlide data: 27.8% want power level,
// peak on day 2-3, decline through week 1-2.
const series = [
  {
    label: 'Спрос на маркетплейсе',
    color: chartColors.orange,
    data: [
      { x: 'До лиги', y: 5 },
      { x: 'День 1', y: 95 },
      { x: 'День 2–3', y: 100 },
      { x: 'День 5', y: 60 },
      { x: 'День 10', y: 35 },
      { x: 'День 20', y: 20 },
      { x: 'Межсезонье', y: 8 },
    ],
  },
];

export function Methodology5TriggersSlide() {
  return (
    <Slide number={8} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 5 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">Старт лиги&nbsp;=<br />пик спроса</h2>
          <p className="thesis-subhead">
            27.8% идут на&nbsp;маркетплейс ради быстрого power level. Спрос жёстко
            привязан к&nbsp;старту лиги&nbsp;— пик в&nbsp;день 1–3, спад после недели
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>27.8%</strong> — to&nbsp;achieve power level faster
            </li>
            <li>
              <strong>19.4%</strong> — try different builds and playstyles
            </li>
            <li>
              <strong>11.1%</strong> — keep up with top-players
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 8 }}>
              Цикл спроса по&nbsp;лиге
            </div>
            <LineChart series={series} yLabel="Индекс спроса" baseline={20} compact />
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <TriggerIcon size={14} color="var(--accent)" />
              Триггер
            </div>
            <div>
              Маркетинг вне пика лиги&nbsp;— неэффективен. Запускать активности за&nbsp;3&nbsp;дня
              до&nbsp;старта
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
