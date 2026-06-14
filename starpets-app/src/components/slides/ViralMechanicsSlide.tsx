import { EyeIcon, GamepadIcon, GroupIcon, PenIcon } from '../icons'
import { Slide } from '../ui/Slide'
import './ViralMechanicsSlide.css'

const branches = [
  {
    icon: GroupIcon,
    title: 'Присоединение к коммьюнити',
    sub: 'Discord, Twitch, Reddit',
  },
  {
    icon: GamepadIcon,
    title: 'Участие в активности',
    sub: 'Ивент — 1000 points',
  },
  { icon: PenIcon, title: 'UGC вовне', sub: 'Гайды и обзоры' },
  { icon: EyeIcon, title: 'Привлечение внимания', sub: 'Инфлюенсеры, KOL' },
]

export function ViralMechanicsSlide() {
  return (
    <Slide number={12} total={16}>
      <div className="section-header">
        <h2 className="section-title">Виральная механика без Dev-ресурса</h2>
        <p className="section-subtitle">
          Четыре рычага роста, которые работают без инженерных вложений — только
          за&nbsp;счёт коммьюнити и&nbsp;партнёрств
        </p>
      </div>
      <div className="viral-diagram">
        <div className="viral-hub">
          <div className="viral-hub-box">
            Starpets — рост без привлечения Dev
          </div>
        </div>
        <div className="viral-branches">
          {branches.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} className="viral-branch">
                <div className="v-icon">
                  <Icon size={28} color="var(--accent)" />
                </div>
                <h4>{b.title}</h4>
                <p>{b.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}
