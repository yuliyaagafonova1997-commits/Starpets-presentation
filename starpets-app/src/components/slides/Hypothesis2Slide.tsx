import { Slide } from '../ui/Slide';
import { chartColors } from '../charts/chartColors';
import './VerdictSlide.css';

export function Hypothesis2Slide() {
  return (
    <Slide number={22} total={34} dark>
      <div className="hypo-slide">
        <div className="hypo-left">
          <div className="hypo-num">Гипотеза №2</div>
          <h2 className="hypo-headline">Безопасность&nbsp;— ключ к&nbsp;конверсии не-покупателей</h2>
          <p className="hypo-body">
            27.6% не&nbsp;покупают из-за страха бана. Исходная гипотеза звучала шире; на&nbsp;деле
            именно escrow и&nbsp;страховка закрывают конкретный страх
          </p>
          <span className="hypo-verdict hypo-verdict-reformulated">Переформулирована</span>
        </div>
        <div className="hypo-right">
          <div className="hypo-evidence">
            <h4>Что показало исследование</h4>
            <ul>
              <li>
                <strong>27.6%</strong> — fear of account ban (главный барьер)
              </li>
              <li>
                <strong>17.2%</strong> — risk of scams (escrow решает)
              </li>
              <li>
                <strong>44.4%</strong> рейтинга важности — &laquo;account safety&raquo;
              </li>
              <li>
                <strong>55.6%</strong> — &laquo;payment security&raquo; в&nbsp;топ-4
              </li>
            </ul>
          </div>
          <div className="hypo-evidence" style={{ background: 'rgba(254, 153, 32, 0.1)' }}>
            <h4 style={{ color: chartColors.orange }}>Новая формулировка</h4>
            <ul>
              <li>
                Безопасность&nbsp;— это не&nbsp;абстрактный &laquo;trust&raquo;, а&nbsp;три конкретные
                фичи: <strong>escrow</strong>, <strong>страховка от&nbsp;бана</strong>, <strong>история сделок</strong>
              </li>
            </ul>
          </div>
          <div className="hypo-link">→ см. слайды 6, 7, 9, 19</div>
        </div>
      </div>
    </Slide>
  );
}
