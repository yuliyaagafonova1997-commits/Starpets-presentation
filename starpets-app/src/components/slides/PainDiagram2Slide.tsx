import { Slide } from '../ui/Slide';
import './PainDiagram2Slide.css';

export function PainDiagram2Slide() {
  return (
    <Slide number={7} total={15}>
      <div className="section-header">
        <h2 className="section-title">Главные боли и барьеры</h2>
      </div>
      <div className="pain-diagram">
        <div className="pain-center" style={{ width: 260, height: 260 }}>
          P2P is fishy — P2P воспринимается как подозрительное
        </div>
        <div className="pain-periphery">
          <div className="pain-periph-item">
            <div className="icon">🚫</div>
            <h4>Lack of trust</h4>
            <p>against the rules, leads to a ban</p>
          </div>
          <div className="pain-periph-item">
            <div className="icon">😰</div>
            <h4>Afraid of scam</h4>
            <p>страх быть обманутым</p>
          </div>
          <div className="pain-periph-item">
            <div className="icon">⏳</div>
            <h4>Long withdrawal</h4>
            <p>долгий вывод средств</p>
          </div>
          <div className="pain-periph-item">
            <div className="icon">💸</div>
            <h4>High commissions</h4>
            <p>высокие комиссии</p>
          </div>
          <div className="pain-periph-item">
            <div className="icon">😤</div>
            <h4>Support is cringe</h4>
            <p>rude vendors</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}