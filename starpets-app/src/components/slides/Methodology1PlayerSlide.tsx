import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import { PersonIcon } from '../icons';
import './ThesisSlide.css';

const ageData = [
  { label: '23–27', value: 16, color: chartColors.orange },
  { label: '27–32', value: 8, color: chartColors.black },
  { label: '18–23', value: 4, color: chartColors.gray },
  { label: '32–36', value: 4, color: chartColors.blue },
  { label: '40+', value: 2, color: chartColors.green },
  { label: 'До 18', value: 1, color: chartColors.purple },
  { label: '36–40', value: 1, color: chartColors.red },
];

export function Methodology1PlayerSlide() {
  return (
    <Slide number={4} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 1 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">Взрослый<br />hardcore-игрок</h2>
          <p className="thesis-subhead">
            Медианный возраст&nbsp;— 25&nbsp;лет, 72% респондентов старше 23.
            Это работающие взрослые с&nbsp;осознанным подходом к&nbsp;покупке
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>44%</strong> в&nbsp;возрасте 23–27&nbsp;— основной сегмент
            </li>
            <li>
              <strong>22%</strong> в&nbsp;возрасте 27–32&nbsp;— пик платёжеспособности
            </li>
            <li>
              Только <strong>14%</strong> младше 23&nbsp;— молодёжь минимальна
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card" style={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart
              data={ageData}
              size={240}
              thickness={36}
              centerLabel="36"
              centerSubLabel="ответов"
              countUnit={36}
            />
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <PersonIcon size={14} color="var(--accent)" />
              Аудитория
            </div>
            <div>
              Решения осознанные&nbsp;— виральная реклама работает хуже, чем&nbsp;у&nbsp;casual-сегмента
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
