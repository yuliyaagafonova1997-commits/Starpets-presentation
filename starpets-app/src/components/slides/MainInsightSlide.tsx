import {
  CycleIcon,
  GamepadHardcoreIcon,
  MoneyIcon,
  PersonIcon,
  StarIcon,
  WarningIcon,
} from '../icons'
import { Slide } from '../ui/Slide'
import './MainInsightSlide.css'

const insights = [
  { icon: GamepadHardcoreIcon, label: 'Хардкор' },
  { icon: PersonIcon, label: 'Взрослый' },
  { icon: CycleIcon, label: 'Цикличный спрос' },
  { icon: WarningIcon, label: 'Страх бана' },
  { icon: MoneyIcon, label: 'Валюта важнее' },
  { icon: StarIcon, label: 'Доверяет KOL' },
]

export function MainInsightSlide() {
  return (
    <Slide number={2} total={17}>
      <img src="/face.jpg" alt="" className="insight-face-bg" />
      <div className="section-header">
        <h2 className="section-title">Главный инсайт</h2>
        <p className="section-subtitle">
          Шесть характеристик целевого игрока — все они сходятся в&nbsp;одну
          фигуру взрослого hardcore-покупателя, который боится потерять аккаунт
        </p>
      </div>
      <div className="insight-diagram">
        <div className="insight-center">
          <div className="insight-ring insight-ring-1" />
          <div className="insight-ring insight-ring-2" />
          <div className="insight-ring insight-ring-3" />
          <div className="insight-blocks">
            {insights.map((it, i) => {
              const Icon = it.icon
              return (
                <div key={i} className={`insight-block insight-block-${i + 1}`}>
                  <span className="insight-block-icon">
                    <Icon size={16} color="var(--text-primary)" />
                  </span>
                  {it.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Slide>
  )
}
