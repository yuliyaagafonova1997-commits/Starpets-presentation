import { Slide } from '../ui/Slide';
import './AudienceSlide.css';

export function AudienceSlide() {
  return (
    <Slide number={5} total={15}>
      <div className="section-header">
        <h2 className="section-title">Кто наша аудитория</h2>
      </div>
      <div className="audience-grid">
        <div className="audience-card">
          <div className="audience-num">23–32</div>
          <h3>Возраст</h3>
          <p>Возраст — 23-32 года</p>
        </div>
        <div className="audience-card">
          <div className="audience-num">HC</div>
          <h3>Hardcore / Semi-hardcore</h3>
          <p>Hardcore/semi-hardcore игроки с сотнями часов в игре</p>
        </div>
        <div className="audience-card">
          <div className="audience-num">PoE1+2</div>
          <h3>Ветераны</h3>
          <p>Ветераны играют и в PoE1 и в PoE2. Новички пропускают первую часть</p>
        </div>
        <div className="audience-card">
          <div className="audience-num">🧠</div>
          <h3>Взрослый вайб</h3>
          <p>Взрослый вайб сообщества, более осознанные решения</p>
        </div>
      </div>
    </Slide>
  );
}