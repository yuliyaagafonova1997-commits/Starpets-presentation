import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './WhyNeverBoughtSlide.css';

// PDF page 6 — главная причина, по которой не покупали на сторонних площадках.
// 29 ответов. Видимые значения с PDF: 17.2% (5), 27.6% (8), 10.3% (3), 27.6% (8).
// Оставшиеся 5 ответов распределены по 4 малым категориям — взяты пропорционально
// видимым размерам сегментов.
const neverBoughtData = [
  { label: 'Страх бана аккаунта', value: 8, color: chartColors.gray1000 },
  { label: 'Хочу заработать валюту сам', value: 8, color: chartColors.gray500 },
  { label: 'Риск скама и потери денег', value: 5, color: chartColors.gray600 },
  { label: 'Цены слишком высокие', value: 3, color: chartColors.orange500 },
  { label: 'Процесс кажется сложным', value: 2, color: chartColors.orange700 },
  { label: 'Не знал, что так можно', value: 2, color: chartColors.orange300 },
  { label: 'Нет надёжной площадки', value: 1, color: chartColors.gray },
];

export function WhyNeverBoughtSlide() {
  return (
    <Slide number={7} total={16}>
      <div className="section-header">
        <h2 className="section-title">Почему не покупают на маркетплейсах</h2>
        <p className="section-subtitle">
          Главный страх — бан аккаунта. Два этих барьера должен снять продукт
        </p>
      </div>
      <div className="never-bought-layout">
        <div className="never-bought-chart">
          <PieChart
            data={neverBoughtData}
            size={200}
            thickness={32}
            centerLabel="29"
            centerSubLabel="не покупали"
            countUnit={29}
            legendPosition="bottom"
          />
        </div>
        <div className="never-bought-takeaways">
          <div className="takeaway takeaway-primary">
            <div className="takeaway-num">27.6%</div>
            <div className="takeaway-text">
              <strong>Боятся бана аккаунта</strong> — главный страх аудитории
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">27.6%</div>
            <div className="takeaway-text">
              <strong>Хотят заработать валюту сами</strong> — не мешают остальным
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">17.2%</div>
            <div className="takeaway-text">
              <strong>Страх скама</strong> — решается escrow
            </div>
          </div>
          <div className="takeaway takeaway-product">
            <div className="takeaway-label">Вывод для продукта</div>
            <div className="takeaway-text">
              Escrow, страховка от&nbsp;бана и&nbsp;импорт репутации конвертируют эту
              аудиторию
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
