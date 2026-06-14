import { Slide } from '../ui/Slide';
import { chartColors } from '../charts/chartColors';
import { HourglassIcon } from '../icons';
import './ThesisSlide.css';

export function ResearcherConclusion1Slide() {
  return (
    <Slide number={13} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Вывод ресерчера</span>
            <span className="step-num">· 1 из&nbsp;4</span>
          </div>
          <h2 className="thesis-headline">Обещание награды<br />не&nbsp;мотивирует</h2>
          <p className="thesis-subhead">
            Гипотеза &laquo;дадим бонус за&nbsp;прохождение опроса&raquo;&nbsp;— сработала хуже,
            чем&nbsp;ожидали. Иногда обещание награды даёт обратный эффект
          </p>
          <ul className="thesis-bullets">
            <li>
              Часть аудитории подозревает развод и&nbsp;не&nbsp;проходит опрос
            </li>
            <li>
              Часть соглашается на&nbsp;награду, но&nbsp;не&nbsp;даёт развёрнутых ответов
            </li>
            <li>
              Лучше работает короткое вовлечение + личный интерес к&nbsp;теме
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Completion rate
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.4)' }}>
                  ~30%
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  с&nbsp;обещанием награды
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>
                Completion rate
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', color: chartColors.orange }}>
                  ~55%
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  без&nbsp;награды, через личный интерес
                </div>
              </div>
            </div>
          </div>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <HourglassIcon size={14} color="var(--accent)" />
              Урок
            </div>
            <div>
              В&nbsp;следующих волнах&nbsp;— таргетировать аудиторию, для которой тема лично
              интересна
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
