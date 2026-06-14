import { Slide } from '../ui/Slide';
import './MainInsightSlide.css';

export function MainInsightSlide() {
  return (
    <Slide number={2} total={15}>
      <div className="section-header">
        <h2 className="section-title">Главный инсайт</h2>
      </div>
      <div className="insight-diagram">
        <div className="insight-center">
          <div className="insight-ring insight-ring-1"></div>
          <div className="insight-ring insight-ring-2"></div>
          <div className="insight-ring insight-ring-3"></div>
          <div className="insight-blocks">
            <div className="insight-block insight-block-1">🎮 Hardcore</div>
            <div className="insight-block insight-block-2">👤 Adult</div>
            <div className="insight-block insight-block-3">🔄 Cyclical Pattern</div>
            <div className="insight-block insight-block-4">⚠️ Fear of Losing Account</div>
            <div className="insight-block insight-block-5">💰 Prefers Currency</div>
            <div className="insight-block insight-block-6">🌟 Trusts KOLs</div>
          </div>
          <div className="insight-person">
            <div className="insight-person-head"></div>
            <div className="insight-person-body"></div>
            <div className="insight-poe-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="poeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#c9a227' }} />
                    <stop offset="50%" style={{ stopColor: '#8b6914' }} />
                    <stop offset="100%" style={{ stopColor: '#5c4a0f' }} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="none" stroke="url(#poeGrad2)" strokeWidth="4" />
                <path
                  d="M50 15 L65 35 L85 40 L70 55 L75 80 L50 70 L25 80 L30 55 L15 40 L35 35 Z"
                  fill="url(#poeGrad2)"
                  opacity="0.9"
                />
                <circle cx="50" cy="50" r="12" fill="#ffffff" />
                <circle cx="50" cy="50" r="6" fill="url(#poeGrad2)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}