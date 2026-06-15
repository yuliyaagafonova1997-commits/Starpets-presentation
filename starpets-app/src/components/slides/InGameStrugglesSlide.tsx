import { BarChart } from '../charts/BarChart'
import { chartColors } from '../charts/chartColors'
import { Slide } from '../ui/Slide'
import './WhyNeverBoughtSlide.css'

// Игровые сложности из опроса (PDF, 36 ответов, мультивыбор).
// Вопрос: «Are any of the following in-game struggles applicable to you?»
const strugglesData = [
  { label: 'Ранняя игра слишком скучная', value: 58.3, count: 21, highlight: true },
  { label: 'Игра не приносит фан', value: 44.4, count: 16, highlight: true },
  { label: 'Приходится выбирать между фармом и трейдом', value: 41.7, count: 15, highlight: true },
  { label: 'Упираюсь в стену прогресса', value: 30.6, count: 11, color: chartColors.black },
  { label: 'Нет доступа к интересным билдам', value: 27.8, count: 10, color: chartColors.black },
  { label: 'Скамили при сделке', value: 27.8, count: 10, color: chartColors.black },
  { label: 'Трейд/крафт занимает много времени', value: 25, count: 9, color: chartColors.black },
  { label: 'Ничего из вышеперечисленного', value: 5.6, count: 2, color: chartColors.gray },
]

export function InGameStrugglesSlide() {
  return (
    <Slide number={7} total={17}>
      <div className="section-header">
        <h2 className="section-title">Сложности в игре: основные</h2>
        <p className="section-subtitle">
          Три топ-сложности описывают рутину ранней игры и&nbsp;выгорание — продукт
          должен снимать именно эти барьеры, чтобы игрок не&nbsp;уходил до&nbsp;сделки
        </p>
      </div>
      <div className="never-bought-chart" style={{ alignSelf: 'flex-start' }}>
        <BarChart
          data={strugglesData}
          compact
          caption="Что мешает в игре"
        />
      </div>
    </Slide>
  )
}
