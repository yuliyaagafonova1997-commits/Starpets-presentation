import { Slide } from '../ui/Slide';
import { BarChart } from '../charts/BarChart';
import { chartColors } from '../charts/chartColors';
import { BanIcon } from '../icons';
import './ThesisSlide.css';

// From WhyNeverBought survey — top reasons.
const rmtData = [
  { label: 'Страх бана аккаунта', value: 27.6, count: 8, color: chartColors.gray1000, highlight: true },
  { label: 'Хочу заработать сам', value: 27.6, count: 8, color: chartColors.orange },
  { label: 'Риск скама', value: 17.2, count: 5, color: chartColors.gray600 },
  { label: 'Цены слишком высокие', value: 10.3, count: 3, color: chartColors.gray },
];

export function Methodology3RmtAttitudeSlide() {
  return (
    <Slide number={6} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Шаг 3 из&nbsp;6</span>
            <span className="step-num">· Методология</span>
          </div>
          <h2 className="thesis-headline">Бан =<br />главный страх</h2>
          <p className="thesis-subhead">
            27.6% не&nbsp;покупают из-за страха бана. Ещё 27.6% фармят сами, 17.2% боятся
            обмана. Готовность есть&nbsp;— не&nbsp;хватает доверия
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>27.6%</strong> — fear of account ban. Этот страх должен снять продукт
            </li>
            <li>
              <strong>27.6%</strong> — prefer to earn. Не&nbsp;наш сегмент, не&nbsp;мешают остальным
            </li>
            <li>
              <strong>17.2%</strong> — risk of scams. Решается escrow
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 12 }}>
              Почему не&nbsp;покупают
            </div>
            <BarChart data={rmtData} maxValue={35} compact />
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <BanIcon size={14} color={chartColors.gray1000} />
              Барьер
            </div>
            <div>
              Escrow + страховка от&nbsp;бана&nbsp;— два фичи, которые конвертируют эту аудиторию
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
