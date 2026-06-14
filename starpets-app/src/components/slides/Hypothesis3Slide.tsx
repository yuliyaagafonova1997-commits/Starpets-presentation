import { Slide } from '../ui/Slide';
import { LineChart } from '../charts/LineChart';
import { chartColors } from '../charts/chartColors';
import { CheckIcon } from '../icons';
import './VerdictSlide.css';

const series = [
  {
    label: 'Объём сделок',
    color: chartColors.orange,
    data: [
      { x: 'До', y: 5 },
      { x: 'День 1', y: 95 },
      { x: 'День 2–3', y: 100 },
      { x: 'День 5', y: 60 },
      { x: 'День 10', y: 35 },
      { x: 'День 20', y: 20 },
    ],
  },
];

export function Hypothesis3Slide() {
  return (
    <Slide number={23} total={34}>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="hypo-num">Гипотеза №3</div>
          <h2 className="hypo-headline">Спрос жёстко привязан к&nbsp;старту лиги</h2>
          <p className="hypo-body">
            Вне пика лиги маркетинг неэффективен. Спрос появляется за&nbsp;3&nbsp;дня до&nbsp;старта,
            пик в&nbsp;день 1–3, спад после недели
          </p>
          <span className="hypo-verdict hypo-verdict-confirmed">
            <CheckIcon size={14} color={chartColors.green} />
            Подтверждена
          </span>
        </div>
        <div className="hypo-right">
          <div className="hypo-evidence">
            <h4>Цикл спроса по&nbsp;лиге</h4>
            <LineChart series={series} yLabel="Индекс" baseline={20} compact />
          </div>
          <div className="hypo-evidence">
            <h4>Вывод для маркетинга</h4>
            <ul>
              <li>
                <strong>За&nbsp;3&nbsp;дня</strong> до&nbsp;старта&nbsp;— пуш &laquo;стартовый капитал&raquo;
              </li>
              <li>
                <strong>День 2–3</strong> — пуш &laquo;цены упали&raquo; для второй волны
              </li>
              <li>
                <strong>День 7+</strong> — пауза, активация только на&nbsp;следующую лигу
              </li>
            </ul>
          </div>
          <div className="hypo-link">→ см. слайды 8, 25, 30</div>
        </div>
      </div>
    </Slide>
  );
}
