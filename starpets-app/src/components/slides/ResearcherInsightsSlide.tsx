import { Slide } from '../ui/Slide';
import './ResearcherInsightsSlide.css';

export function ResearcherInsightsSlide() {
  return (
    <Slide number={4} total={17}>
      <div className="section-header">
        <h2 className="section-title">Инсайты для ресерчера</h2>
      </div>
      <div className="insight-row">
        <div className="insight-num">1</div>
        <div className="insight-text">Запрос на размещение — бан, игнор или негатив</div>
      </div>
      <div className="insight-row">
        <div className="insight-num">2</div>
        <div className="insight-text">Пост без запроса — больше конверсия, но также больше банов</div>
      </div>
      <div className="conclusions-box">
        <h4>Выводы</h4>
        <ol>
          <li>Обещание награды за прохождение не всегда мотивирует, а иногда и наоборот</li>
          <li>Размещение ссылок — красная тряпка</li>
          <li>
              Нужно закладывать больший срок на исследование: получение аппрува →
              валидация → пост → результаты → выход на интервью
            </li>
          <li>
            Если продукт под NDA — нужно потестить маскировку. Если называем продукт — конверсия
            в аппрув будет выше
          </li>
        </ol>
      </div>
    </Slide>
  );
}