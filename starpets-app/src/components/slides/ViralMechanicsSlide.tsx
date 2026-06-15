import { Slide } from '../ui/Slide'
import './ViralMechanicsSlide.css'

export function ViralMechanicsSlide() {
  return (
    <Slide number={12} total={16}>
      <div className="section-header viral-header">
        <h2 className="section-title">
          Виральная механика без&nbsp;dev&nbsp;ресурса
        </h2>
        <p className="section-subtitle">
          Четыре стадии цикла, который коммьюнити прокручивает само&nbsp;—
          контент и&nbsp;активности в&nbsp;центре задают вес каждого шага
        </p>
      </div>
      <figure className="viral-scheme">
        <img src="/scheme.png" alt="Схема вирального цикла: четыре стадии и активности коммьюнити с весом в баллах" />
      </figure>
    </Slide>
  )
}
