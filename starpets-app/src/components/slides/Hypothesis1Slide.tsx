import { Slide } from '../ui/Slide';
import { KpiCard } from '../charts/KpiCard';
import { chartColors } from '../charts/chartColors';
import { CheckIcon } from '../icons';
import './VerdictSlide.css';

export function Hypothesis1Slide() {
  return (
    <Slide number={21} total={34}>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="hypo-num">Гипотеза №1</div>
          <h2 className="hypo-headline">Аудитория взрослая и&nbsp;хардкорная, маркетинг должен это учитывать</h2>
          <p className="hypo-body">
            Если игрок&nbsp;— hardcore/semi-hardcore ветеран с&nbsp;сотнями часов, дженерик-виральная
            реклама не&nbsp;сработает. Нужны точные креативы под&nbsp;осознанную аудиторию
          </p>
          <span className="hypo-verdict hypo-verdict-confirmed">
            <CheckIcon size={14} color={chartColors.green} />
            Подтверждена
          </span>
        </div>
        <div className="hypo-right">
          <div className="hypo-evidence">
            <h4>Доказательная база</h4>
            <ul>
              <li>
                83% респондентов&nbsp;— hardcore или average, медианный возраст 25&nbsp;лет
              </li>
              <li>
                Решения осознанные: 75% смотрят на&nbsp;репутацию, 72% на&nbsp;цену
              </li>
              <li>
                Каналы: TFT, Eternal Trove, r/pathofexile&nbsp;— никаких TikTok-вирусных роликов
              </li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <KpiCard
              value="83%"
              label="Hardcore + Average"
              caption="не&nbsp;casual"
              accent={chartColors.orange}
              compact
            />
            <KpiCard
              value="25 лет"
              label="Медианный возраст"
              caption="работающие взрослые"
              accent={chartColors.black}
              compact
            />
          </div>
          <div className="hypo-link">→ см. слайды 4, 5, 9</div>
        </div>
      </div>
    </Slide>
  );
}
