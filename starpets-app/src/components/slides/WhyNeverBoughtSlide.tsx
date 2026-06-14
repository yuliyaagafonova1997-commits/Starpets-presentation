import { Slide } from '../ui/Slide';
import { PieChart } from '../charts/PieChart';
import { chartColors } from '../charts/chartColors';
import './WhyNeverBoughtSlide.css';

// PDF page 6 — single biggest reason you haven't bought from a third-party site.
// 29 ответов. Видимые значения с PDF: 17.2% (5), 27.6% (8), 10.3% (3), 27.6% (8).
// Оставшиеся 5 ответов распределены по 4 малым категориям — взяты пропорционально
// видимым размерам сегментов.
const neverBoughtData = [
  { label: 'Fear of getting game account banned', value: 8, color: chartColors.red },
  { label: 'I prefer to earn everything in-game', value: 8, color: chartColors.teal },
  { label: 'Risk of scams or losing money', value: 5, color: chartColors.blue },
  { label: 'Prices are too high / not worth it', value: 3, color: chartColors.green },
  { label: 'Process seems too complicated', value: 2, color: chartColors.purple },
  { label: "I didn't know it was an option", value: 2, color: chartColors.yellow },
  { label: "I don't know a reliable marketplace", value: 1, color: chartColors.gray },
];

export function WhyNeverBoughtSlide() {
  return (
    <Slide number={7} total={16}>
      <div className="section-header">
        <h2 className="section-title">Почему не покупают на маркетплейсах</h2>
        <p className="section-subtitle">
          Главный страх — бан аккаунта. На&nbsp;втором месте — желание заработать валюту
          самому. Это два главных барьера, которые должен снять продукт
        </p>
      </div>
      <div className="never-bought-layout">
        <div className="never-bought-chart">
          <PieChart
            data={neverBoughtData}
            size={280}
            thickness={42}
            centerLabel="29"
            centerSubLabel="не покупали"
            countUnit={29}
          />
        </div>
        <div className="never-bought-takeaways">
          <div className="takeaway takeaway-primary">
            <div className="takeaway-num">27.6%</div>
            <div className="takeaway-text">
              <strong>Боятся бана аккаунта</strong> — это и есть «fear of losing the
              account», главный инсайт аудитории
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">27.6%</div>
            <div className="takeaway-text">
              <strong>Предпочитают фармить сами</strong> — продукт не для них, но и не
              мешают остальным
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">17.2%</div>
            <div className="takeaway-text">
              <strong>Страх скама</strong> — решается escrow и прозрачной историей
              сделок
            </div>
          </div>
          <div className="takeaway takeaway-product">
            <div className="takeaway-label">Вывод для продукта</div>
            <div className="takeaway-text">
              Escrow, страховка от&nbsp;бана и&nbsp;импорт репутации — три фичи, которые
              конвертируют эту аудиторию
            </div>
          </div>
        </div>
      </div>
      <span className="data-source">N&nbsp;=&nbsp;29 · Опрос PoE-аудитории, 2025</span>
    </Slide>
  );
}
