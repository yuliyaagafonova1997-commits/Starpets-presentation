import { ComparisonCard } from '../charts/ComparisonCard'
import { chartColors } from '../charts/chartColors'
import { CheckIcon } from '../icons'
import { Slide } from '../ui/Slide'
import './VerdictSlide.css'

export function Hypothesis4Slide() {
  return (
    <Slide number={24} total={34} dark>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="hypo-num">Гипотеза №4</div>
          <h2 className="hypo-headline">
            Валюта доминирует над&nbsp;предметами и&nbsp;услугами
          </h2>
          <p className="hypo-body">
            69% покупают валюту, 72% продают. Items и&nbsp;services&nbsp;—
            вторичны. Главный экран маркетплейса&nbsp;— курсы Divine/Chaos
          </p>
          <span className="hypo-verdict hypo-verdict-confirmed">
            <CheckIcon size={14} color={chartColors.orange500} />
            Подтверждена с&nbsp;оговоркой
          </span>
        </div>
        <div className="hypo-right">
          <ComparisonCard
            left={{
              title: 'Покупают',
              items: [
                {
                  label: 'Валюта (Divine/Chaos)',
                  value: '69%',
                  color: chartColors.orange,
                },
                {
                  label: 'Услуги (прокачка)',
                  value: '22%',
                  color: chartColors.gray,
                },
                {
                  label: 'Предметы (Headhunter)',
                  value: '8%',
                  color: chartColors.gray,
                },
              ],
            }}
            right={{
              title: 'Продают',
              items: [
                {
                  label: 'Валюта (Divine/Chaos)',
                  value: '72%',
                  color: chartColors.orange,
                },
                {
                  label: 'Услуги (прокачка)',
                  value: '17%',
                  color: chartColors.gray,
                },
                {
                  label: 'Предметы (Headhunter)',
                  value: '11%',
                  color: chartColors.gray,
                },
              ],
            }}
            divider="↔"
          />
          <div
            className="hypo-evidence"
            style={{ background: 'rgba(254, 153, 32, 0.1)' }}
          >
            <h4 style={{ color: chartColors.orange }}>Оговорка</h4>
            <ul>
              <li>
                Selling currency = supply, buying currency = demand. Аудитория
                пересекается, но&nbsp;не&nbsp;1:1
              </li>
              <li>
                Часть покупателей&nbsp;— исключительно покупатели (нет своего
                фарма)
              </li>
            </ul>
          </div>
          <div className="hypo-link">→ см. слайд 26</div>
        </div>
      </div>
    </Slide>
  )
}
