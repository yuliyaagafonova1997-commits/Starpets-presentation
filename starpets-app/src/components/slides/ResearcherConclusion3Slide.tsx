import { Slide } from '../ui/Slide';
import { ProcessStep } from '../charts/ProcessStep';
import { chartColors } from '../charts/chartColors';
import { HourglassIcon } from '../icons';
import './ThesisSlide.css';

const stages = [
  { num: 1, title: 'Аппрув', desc: 'согласие канала', color: chartColors.orange },
  { num: 2, title: 'Валидация', desc: 'проверка формата', color: chartColors.orange },
  { num: 3, title: 'Пост', desc: 'публикация контента', color: chartColors.orange },
  { num: 4, title: 'Результаты', desc: 'сбор ответов', color: chartColors.gray },
  { num: 5, title: 'Интервью', desc: 'глубинные звонки', color: chartColors.gray },
];

export function ResearcherConclusion3Slide() {
  return (
    <Slide number={15} total={34} dark>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Вывод ресерчера</span>
            <span className="step-num">· 3 из&nbsp;4</span>
          </div>
          <h2 className="thesis-headline">Закладывать<br />больший срок</h2>
          <p className="thesis-subhead">
            От&nbsp;аппрува канала до&nbsp;интервью&nbsp;— пять обязательных этапов. Реалистичный
            таймлайн: 4–6 недель на&nbsp;полный цикл, не&nbsp;2
          </p>
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <HourglassIcon size={14} color="var(--accent)" />
              Таймлайн
            </div>
            <div>
              Неделя 1: аппрув каналов. Неделя 2: валидация. Неделя 3: пост и&nbsp;сбор. Неделя 4–5: интервью
            </div>
          </div>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>
              Полный цикл
            </div>
            <ProcessStep steps={stages} orientation="vertical" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
