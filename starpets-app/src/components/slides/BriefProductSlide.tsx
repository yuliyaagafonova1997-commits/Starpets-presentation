import { Slide } from '../ui/Slide'
import './BriefProductSlide.css'

const tasks = [
  {
    title: 'Прототип витрины валюты',
    text: 'в формате валюта + курс — через неделю',
    time: '1 неделя',
  },
  {
    title: 'Развёрнутая схема Escrow',
    text: 'в FAQ — через две недели',
    time: '2 недели',
  },
  {
    title: 'Перенос репутации',
    text: 'с G2G/FunPay',
    time: '2 недели',
  },
  {
    title: 'User story для онбординга',
    text: 'новичков — через месяц',
    time: '1 месяц',
  },
]

export function BriefProductSlide() {
  return (
    <Slide number={13} total={16}>
      <div className="section-header">
        <h2 className="section-title">Брифинг команд: продукт</h2>
        <p className="section-subtitle">
          Четыре ключевых артефакта на&nbsp;горизонте месяца: витрина валюты,
          схема Escrow, перенос репутации с&nbsp;G2G/FunPay и&nbsp;онбординг для
          новичков
        </p>
      </div>
      <figure className="brief-screenshot">
        <img src="/orbs.png" alt="Прототип витрины валюты: валюта + курс" />
      </figure>
      <div className="brief-block">
        <ul className="brief-tasks">
          {tasks.map((t, i) => (
            <li key={i} className="brief-task">
              <div className="brief-task-text">
                <strong>{t.title}</strong> {t.text}
              </div>
              <span className="brief-task-time">{t.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  )
}
