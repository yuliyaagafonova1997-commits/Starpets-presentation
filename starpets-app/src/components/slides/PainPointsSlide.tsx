import { Slide } from '../ui/Slide';
import './PainPointsSlide.css';

export function PainPointsSlide() {
  return (
    <Slide number={8} total={15}>
      <div className="section-header">
        <h2 className="section-title">Главные боли и барьеры</h2>
      </div>
      <div className="pains-horizontal">
        <div className="pain-h-item">
          <div className="label">fear</div>
          <div>
            <h4>lack of trust against the rules, leads to a ban</h4>
            <p>страх нарушить правила и получить бан</p>
          </div>
        </div>
        <div className="pain-h-item">
          <div className="label">fear</div>
          <div>
            <h4>afraid of getting scammed</h4>
            <p>страх быть обманутым</p>
          </div>
        </div>
        <div className="pain-h-item">
          <div className="label">time</div>
          <div>
            <h4>a long withdrawal</h4>
            <p>долгий вывод средств</p>
          </div>
        </div>
        <div className="pain-h-item">
          <div className="label">trust</div>
          <div>
            <h4>p2p is fishy</h4>
            <p>P2P воспринимается как подозрительное</p>
          </div>
        </div>
        <div className="pain-h-item">
          <div className="label">cost</div>
          <div>
            <h4>high commissions</h4>
            <p>высокие комиссии платформы</p>
          </div>
        </div>
        <div className="pain-h-item">
          <div className="label">support</div>
          <div>
            <h4>support is cringe, rude vendors</h4>
            <p>поддержка и вендоры хамят</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}