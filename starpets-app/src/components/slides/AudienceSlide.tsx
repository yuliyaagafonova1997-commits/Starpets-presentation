import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './AudienceSlide.css';

const ageData = [
  { label: '23–27', value: 16, color: chartColors.orange },
  { label: '27–32', value: 8, color: chartColors.black },
  { label: '18–23', value: 4, color: chartColors.gray },
  { label: '32–36', value: 4, color: chartColors.gray600 },
  { label: '40+', value: 2, color: chartColors.orange500 },
  { label: 'До 18', value: 1, color: chartColors.orange700 },
  { label: '36–40', value: 1, color: chartColors.gray1000 },
];

const gamerData = [
  { label: 'Средний игрок', value: 16, color: chartColors.orange },
  { label: 'Хардкор-игрок', value: 14, color: chartColors.black },
  { label: 'Казуальный игрок', value: 6, color: chartColors.lightGray },
];

export function AudienceSlide() {
  return (
    <Slide number={5} total={17}>
      <div className="section-header">
        <h2 className="section-title">Кто наша аудитория</h2>
        <p className="section-subtitle">
          Взрослые hardcore/semi-hardcore игроки с&nbsp;сотнями часов в&nbsp;PoE&nbsp;— решения
          осознанные, виральная реклама работает хуже
        </p>
      </div>
      <div className="audience-grid">
        <div className="audience-card">
          <h3>Возраст</h3>
          <PieChart
            data={ageData}
            size={200}
            thickness={32}
            centerLabel="36"
            centerSubLabel="ответов"
            countUnit={36}
          />
        </div>
        <div className="audience-card">
          <h3>Тип игрока</h3>
          <PieChart
            data={gamerData}
            size={200}
            thickness={32}
            centerLabel="36"
            centerSubLabel="ответов"
            countUnit={36}
          />
        </div>
        <div className="audience-card audience-card-wide">
          <h3>Поведение</h3>
          <ul className="audience-bullets">
            <li>
              <span className="dot" style={{ background: chartColors.orange }} />
              <div>
                <strong>Hardcore / semi-hardcore</strong> — сотни часов в игре
              </div>
            </li>
            <li>
              <span className="dot" style={{ background: chartColors.black }} />
              <div>
                <strong>Ветераны</strong> играют и в PoE1, и в PoE2. Новички пропускают
                первую часть
              </div>
            </li>
            <li>
              <span className="dot" style={{ background: chartColors.gray }} />
              <div>
                <strong>Взрослый вайб</strong> сообщества: осознанные решения, меньше
                влияния «виральной» рекламы
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
