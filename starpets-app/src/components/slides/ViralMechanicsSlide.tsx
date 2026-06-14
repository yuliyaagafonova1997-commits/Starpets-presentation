import { Slide } from '../ui/Slide';
import './ViralMechanicsSlide.css';

export function ViralMechanicsSlide() {
  return (
    <Slide number={12} total={15}>
      <div className="section-header">
        <h2 className="section-title">Виральная механика без Dev-ресурса</h2>
      </div>
      <div className="viral-diagram">
        <div className="viral-hub">
          <div className="viral-hub-box">Starpets — Рост без привлечения Dev</div>
        </div>
        <div className="viral-branches">
          <div className="viral-branch">
            <div className="v-icon">👥</div>
            <h4>Присоединение к коммьюнити</h4>
            <p>Discord, Twitch, Reddit</p>
          </div>
          <div className="viral-branch">
            <div className="v-icon">🎮</div>
            <h4>Участие в активности</h4>
            <p>Ивент — 1000 points</p>
          </div>
          <div className="viral-branch">
            <div className="v-icon">✍️</div>
            <h4>UGC вовне</h4>
            <p>Гайды и обзоры</p>
          </div>
          <div className="viral-branch">
            <div className="v-icon">👁️</div>
            <h4>Привлечение внимания</h4>
            <p>Инфлюенсеры, KOL</p>
          </div>
        </div>
        <div className="viral-note">
          <strong>Для Антона:</strong> Заменить пузырь «совет слота» на «участие в ивенте» — 1000
          points; заменить Ebaka на Starpets
        </div>
      </div>
    </Slide>
  );
}