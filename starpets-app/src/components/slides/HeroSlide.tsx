import { Slide } from '../ui/Slide'
import './HeroSlide.css'

export function HeroSlide() {
  return (
    <Slide number={1} total={16} dark center logoSrc="/logo-white.svg">
      <div className="hero-content">
        <img className="hero-logo" src="/logo-white.svg" alt="Starpets" />
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Path of Exile · Стратегия
        </div>
        {/*<h1 className="hero-title">Starpets</h1>*/}
        <p className="hero-subtitle">Стратегия запуска маркетплейса валюты</p>
        <p className="hero-desc">Исследование · Бренд · Продукт · Маркетинг</p>
      </div>
    </Slide>
  )
}
