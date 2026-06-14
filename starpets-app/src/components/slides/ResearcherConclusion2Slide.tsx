import { Slide } from '../ui/Slide';
import { BanIcon, LinkIcon } from '../icons';
import './ThesisSlide.css';

export function ResearcherConclusion2Slide() {
  return (
    <Slide number={14} total={34}>
      <div className="thesis-slide">
        <div className="thesis-left">
          <div className="thesis-step-row">
            <span className="step-dot" />
            <span>Вывод ресерчера</span>
            <span className="step-num">· 2 из&nbsp;4</span>
          </div>
          <h2 className="thesis-headline">Ссылки =<br />красная тряпка</h2>
          <p className="thesis-subhead">
            Любые ссылки в&nbsp;первом сообщении воспринимаются как&nbsp;RMT-спам. Даже полезный
            контент с&nbsp;URL получает мгновенный бан
          </p>
          <ul className="thesis-bullets">
            <li>
              <strong>Discord</strong> — линки авто-банят большинство ботов
            </li>
            <li>
              <strong>Reddit</strong> — короткие ссылки в&nbsp;первом посте улетают в&nbsp;спам
            </li>
            <li>
              <strong>TFT и&nbsp;трейд-серверы</strong> — бан за&nbsp;линк без&nbsp;аппрува
            </li>
          </ul>
        </div>
        <div className="thesis-right">
          <div className="thesis-right-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <BanIcon size={28} color="var(--accent)" />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Никаких ссылок в&nbsp;первом касании</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Только чистый контент и&nbsp;ценность</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <LinkIcon size={28} color="var(--text-secondary)" />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Ссылка&nbsp;— только после&nbsp;доверия</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Когда пользователь сам спросил &laquo;где?&raquo;</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0' }}>
              <BanIcon size={28} color="var(--red, #ff3b30)" />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Прямая реклама RMT&nbsp;— токсично</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Канал теряет доверие навсегда</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
