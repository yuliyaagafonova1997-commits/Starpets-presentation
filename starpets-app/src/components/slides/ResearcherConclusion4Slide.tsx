import { Slide } from '../ui/Slide';
import { ComparisonCard } from '../charts/ComparisonCard';
import { chartColors } from '../charts/chartColors';
import { FlaskIcon } from '../icons';
import './ThesisSlide.css';

export function ResearcherConclusion4Slide() {
  return (
    <Slide number={16} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Вывод ресерчера</span>
            <span className="step-num">· 4 из&nbsp;4</span>
          </div>
          <h2 className="thesis-headline">NDA: маскировка<br />vs&nbsp;название</h2>
          <p className="thesis-subhead">
            Если продукт под&nbsp;NDA&nbsp;— нужно тестировать маскировку. Если называем
            продукт открыто&nbsp;— конверсия в&nbsp;аппрув выше
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>Маскировка</strong> даёт доступ к&nbsp;каналам, но&nbsp;снижает аппрув
            </li>
            <li>
              <strong>Открытое имя</strong> ускоряет аппрув, но&nbsp;закрывает некоторые каналы
            </li>
            <li>
              Нужен <strong>пилот</strong> с&nbsp;двумя гипотезами параллельно
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <ComparisonCard
            left={{
              title: 'Маскировка (NDA)',
              items: [
                { label: 'Аппрув', value: '~30%', color: chartColors.orange },
                { label: 'Доступ к каналам', value: '~85%', color: chartColors.orange500 },
                { label: 'Риск разоблачения', value: 'Средний', color: chartColors.orange },
              ],
              caption: 'Требует осторожной подачи и тестирования',
            }}
            right={{
              title: 'Открытое имя',
              items: [
                { label: 'Аппрув', value: '~65%', color: chartColors.orange500 },
                { label: 'Доступ к каналам', value: '~50%', color: chartColors.gray1000 },
                { label: 'Риск разоблачения', value: 'Нулевой', color: chartColors.orange500 },
              ],
              caption: 'Быстрее и проще, но не везде пустят',
            }}
            divider="vs"
          />
          <div className="thesis-takeaway">
            <div className="thesis-takeaway-label">
              <FlaskIcon size={14} color="var(--accent)" />
              Пилот
            </div>
            <div>
              В&nbsp;следующей волне&nbsp;— запустить оба подхода параллельно на&nbsp;2–3 каналах,
              сравнить конверсию
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
