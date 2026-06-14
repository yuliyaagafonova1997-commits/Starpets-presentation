import { Slide } from '../ui/Slide';
import './PainDiagramSlide.css';

export function PainDiagramSlide() {
  return (
    <Slide number={6} total={15}>
      <div className="section-header">
        <h2 className="section-title">Главные боли и барьеры</h2>
      </div>
      <div className="pain-diagram">
        <div className="pain-center">Главный барьер:<br />страх потерять аккаунт</div>
        <div className="pain-spokes">
          <div className="pain-spoke">
            <span className="pain-spoke-icon">🚫</span>
            <div>
              <h4>Lack of trust against the rules</h4>
              <p>leads to a ban</p>
            </div>
          </div>
          <div className="pain-spoke">
            <span className="pain-spoke-icon">😰</span>
            <div>
              <h4>Afraid of getting scammed</h4>
              <p>страх обмана</p>
            </div>
          </div>
          <div className="pain-spoke">
            <span className="pain-spoke-icon">⏳</span>
            <div>
              <h4>A long withdrawal</h4>
              <p>долгий вывод средств</p>
            </div>
          </div>
          <div className="pain-spoke">
            <span className="pain-spoke-icon">🔗</span>
            <div>
              <h4>P2P is fishy</h4>
              <p>P2P воспринимается как подозрительное</p>
            </div>
          </div>
          <div className="pain-spoke">
            <span className="pain-spoke-icon">💸</span>
            <div>
              <h4>High commissions</h4>
              <p>высокие комиссии</p>
            </div>
          </div>
          <div className="pain-spoke">
            <span className="pain-spoke-icon">😤</span>
            <div>
              <h4>Support is cringe</h4>
              <p>rude vendors, хамская поддержка</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}