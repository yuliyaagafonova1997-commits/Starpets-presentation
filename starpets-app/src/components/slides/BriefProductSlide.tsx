import { Slide } from '../ui/Slide';
import './BriefProductSlide.css';

export function BriefProductSlide() {
  return (
    <Slide number={13} total={15}>
      <div className="section-header">
        <h2 className="section-title">Брифинг команд: продукт</h2>
      </div>
      <div className="brief-block">
        <h3>📦 Продукт</h3>
        <ul className="brief-tasks">
          <li className="brief-task">
            <div className="brief-task-text">
              <strong>Прототип витрины валюты</strong> в формате валюта + курс — через неделю
            </div>
            <span className="brief-task-time">1 неделя</span>
          </li>
          <li className="brief-task">
            <div className="brief-task-text">
              <strong>Развёрнутая схема Escrow</strong> в FAQ — через две недели
            </div>
            <span className="brief-task-time">2 недели</span>
          </li>
          <li className="brief-task">
            <div className="brief-task-text">
              <strong>User story для онбординга</strong> новичков — через месяц
            </div>
            <span className="brief-task-time">1 месяц</span>
          </li>
        </ul>
      </div>
    </Slide>
  );
}