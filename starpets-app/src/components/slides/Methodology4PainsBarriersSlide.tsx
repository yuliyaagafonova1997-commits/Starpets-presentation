import { Slide } from '../ui/Slide';
import { KpiCard } from '../charts/KpiCard';
import { chartColors } from '../charts/chartColors';
import { BanIcon, ScaredIcon, MoneyIcon } from '../icons';
import './ThesisSlide.css';

export function Methodology4PainsBarriersSlide() {
  return (
    <Slide number={7} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 4 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">72% негатива<br />в&nbsp;трёх барьерах</h2>
          <p className="thesis-subhead">
            Бан аккаунта, привычка фармить самому и&nbsp;страх обмана&nbsp;— три причины,
            которые покрывают почти весь негатив. Длинный хвост&nbsp;— мелочи
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 8 }}>
            <KpiCard
              value="27.6%"
              label="Бан"
              caption="Fear of account ban"
              accent={chartColors.gray1000}
              glyph="P2"
              compact
            />
            <KpiCard
              value="27.6%"
              label="Фарм"
              caption="Prefer to earn"
              accent={chartColors.orange}
              glyph="P2"
              compact
            />
            <KpiCard
              value="17.2%"
              label="Скам"
              caption="Risk of scams"
              accent={chartColors.gray600}
              glyph="P3"
              compact
            />
          </div>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 14 }}>
              Вторичные барьеры
            </div>
            <ul className="thesis-bullets">
              <li>
                <BanIcon size={16} color={chartColors.gray1000} /> P2P кажется подозрительным — 10.3%
              </li>
              <li>
                <ScaredIcon size={16} color={chartColors.orange} /> Долгий вывод средств — 6.9%
              </li>
              <li>
                <MoneyIcon size={16} color={chartColors.gray600} /> Высокие комиссии — 6.9%
              </li>
              <li>
                <MoneyIcon size={16} color={chartColors.gray} /> Качество поддержки — 3.5%
              </li>
            </ul>
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">Фокус</div>
            <div>
              Продукт должен закрыть <strong>P2 + P3</strong>&nbsp;— это конвертирует 72% аудитории
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
