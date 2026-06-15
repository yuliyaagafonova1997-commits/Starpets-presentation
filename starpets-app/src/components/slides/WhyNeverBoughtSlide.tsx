import { Slide } from '../ui/Slide';
import { BarChart } from '../charts/BarChart';
import { chartColors } from '../charts/chartColors';
import './WhyNeverBoughtSlide.css';

// Что важно покупателю при покупке (PDF, 36 ответов).
// Используем эти данные здесь: разрыв между тем, что важно покупателю,
// и тем, что маркетплейсы реально дают, = и есть барьер.
const barriersData = [
  { label: 'Репутация площадки', value: 75, count: 27, highlight: true },
  { label: 'Цена и выгода', value: 72.2, count: 26, highlight: true },
  { label: 'История сделок продавца', value: 66.7, count: 24, color: chartColors.black },
  { label: 'Безопасность оплаты', value: 55.6, count: 20, color: chartColors.black },
  { label: 'Скорость доставки', value: 52.8, count: 19, color: chartColors.black },
  { label: 'Безопасность аккаунта', value: 44.4, count: 16, color: chartColors.black },
  { label: 'Рекомендация стримера', value: 25, count: 9, color: chartColors.gray },
  { label: 'Видимость маркетплейса', value: 19.4, count: 7, color: chartColors.gray },
  { label: 'Качество поддержки', value: 19.4, count: 7, color: chartColors.gray },
  { label: 'Не знаю', value: 2.8, count: 1, color: chartColors.gray },
  { label: 'Нет', value: 2.8, count: 1, color: chartColors.gray },
  { label: 'Не куплю', value: 2.8, count: 1, color: chartColors.gray },
];

// Free-text жалобы — визуализируем как «облачка» с аватаром и именем,
// разбросанные по разным сторонам чарта.
type CommentPos =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'far-top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom-left'
  | 'left';

interface Comment {
  id: number;
  name: string;
  text: string;
  pos: CommentPos;
  color: string;
}

const comments: Comment[] = [
  { id: 1, name: 'Алексей', text: 'Нет доверия', pos: 'top-left', color: chartColors.orange500 },
  { id: 2, name: 'Михаил', text: 'Против правил, ведёт к бану', pos: 'top', color: chartColors.gray1000 },
  { id: 3, name: 'Дмитрий', text: 'Боюсь скама', pos: 'top-right', color: chartColors.gray600 },
  { id: 4, name: 'Артём', text: 'Долгий вывод средств', pos: 'far-top-right', color: chartColors.orange700 },
  { id: 5, name: 'Сергей', text: 'P2P — мутная схема', pos: 'right', color: chartColors.gray400 },
  { id: 6, name: 'Андрей', text: 'Поддержка — боль', pos: 'bottom-right', color: chartColors.gray300 },
  { id: 7, name: 'Иван', text: 'Грубые продавцы', pos: 'bottom-left', color: chartColors.orange600 },
  { id: 8, name: 'Николай', text: 'Высокие комиссии', pos: 'left', color: chartColors.gray700 },
];

export function WhyNeverBoughtSlide() {
  return (
    <Slide number={7} total={16}>
      <div className="section-header">
        <h2 className="section-title">
          Барьеры: почему не покупают на маркетплейсах
        </h2>
        <p className="section-subtitle">
          Доверие, безопасность и&nbsp;скорость — топ-факторы. Маркетплейсы
          их&nbsp;не&nbsp;дают — это и&nbsp;есть барьер
        </p>
      </div>
      <div className="never-bought-comments">
        {comments.map(c => (
          <div key={c.id} className={`comment-bubble comment-${c.pos}`}>
            <div className="comment-avatar" style={{ background: c.color }}>
              {c.name[0]}
            </div>
            <div className="comment-body">
              <div className="comment-name">{c.name}</div>
              <div className="comment-text">{c.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="never-bought-layout">
        <div className="never-bought-chart">
          <BarChart
            data={barriersData}
            compact
            caption="Что важно при покупке"
          />
        </div>
        <div className="never-bought-takeaways">
          <div className="takeaway takeaway-primary">
            <div className="takeaway-num">75%</div>
            <div className="takeaway-text">
              <strong>Главный барьер — доверие</strong> — репутация площадки
              и&nbsp;история сделок продавца
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">55%</div>
            <div className="takeaway-text">
              <strong>Безопасность оплаты</strong> — escrow закрывает этот страх
            </div>
          </div>
          <div className="takeaway">
            <div className="takeaway-num">44%</div>
            <div className="takeaway-text">
              <strong>Безопасность аккаунта</strong> — страховка от&nbsp;бана
            </div>
          </div>
          <div className="takeaway takeaway-product">
            <div className="takeaway-label">Вывод для продукта</div>
            <div className="takeaway-text">
              Escrow, страховка от&nbsp;бана, импорт репутации — три фичи закрывают
              топ-3 барьера
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
