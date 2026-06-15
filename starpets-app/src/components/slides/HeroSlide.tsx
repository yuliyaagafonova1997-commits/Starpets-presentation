import { Slide } from '../ui/Slide'
import './HeroSlide.css'

export function HeroSlide() {
  return (
    <Slide number={1} total={17} dark center logoSrc="/logo-white.svg" className="slide-hero-bg">
      <div className="hero-content">
        <div className="hero-logos">
          <img className="hero-logo" src="/logo-white.svg" alt="Starpets" />
          <span className="hero-logos-x" aria-hidden="true">×</span>
          <img className="hero-logo hero-logo--poe" src="/poe-logo.png" alt="Path of Exile" />
        </div>
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
