import { Slide } from '../ui/Slide';
import { Badge } from '../ui/Badge';
import './HeroSlide.css';

export function HeroSlide() {
  return (
    <Slide number={1} total={15} center>
      <div className="hero-badges">
        <Badge variant="primary">PATH OF EXILE</Badge>
        <Badge variant="secondary">MARKETPLACE</Badge>
      </div>
      <h1 className="hero-title">Starpets</h1>
      <p className="hero-subtitle">Безопасная площадка для торговли валютой PoE</p>
      <p className="hero-desc">Без бана. Без обмана. Без лишних вопросов.</p>
    </Slide>
  );
}