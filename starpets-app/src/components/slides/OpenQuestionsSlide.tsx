import { Slide } from '../ui/Slide';
import './OpenQuestionsSlide.css';

export function OpenQuestionsSlide() {
  return (
    <Slide number={15} total={15}>
      <div className="section-header">
        <h2 className="section-title">Открытые вопросы и риски</h2>
      </div>
      <div className="questions-grid">
        <div className="question-card">
          <div className="q-icon">?</div>
          <p>
            <strong>Можно ли конвертировать принципиальных противников</strong> вроде Кори без
            официального партнёрства с GGG?
          </p>
        </div>
        <div className="question-card">
          <div className="q-icon">?</div>
          <p>
            <strong>Каков реальный LTV</strong> покупателя и продавца? Требуются когортные данные.
          </p>
        </div>
        <div className="question-card">
          <div className="q-icon">?</div>
          <p>
            <strong>Как массово переманить продавцов с G2G и FunPay?</strong> Гипотеза: перенос
            репутации + нулевая комиссия.
          </p>
        </div>
        <div className="question-card">
          <div className="q-icon">?</div>
          <p>
            <strong>Готовы ли топ-стримеры</strong> открыто рекламировать RMT-сервис? Нужен пилот.
          </p>
        </div>
      </div>
    </Slide>
  );
}