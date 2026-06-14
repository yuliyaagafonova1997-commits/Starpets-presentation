import { Slide } from '../ui/Slide';
import './HeroSlide.css';

export function HeroSlide() {
  return (
    <Slide number={1} total={16} dark center>
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Path of Exile · Marketplace
        </div>
        <h1 className="hero-title">Starpets</h1>
        <p className="hero-subtitle">Безопасная площадка для торговли валютой PoE</p>
        <p className="hero-desc">Без бана. Без обмана. Без лишних вопросов.</p>
      </div>
    </Slide>
  );
}
