import { Slide } from '../ui/Slide';
import './ViralMechanicsSlide.css';

type Activity = {
  text: string[];
  points: number;
  cx: number; // center x as % of stage
  cy: number; // center y as % of stage
  r: number; // radius as % of stage width
  tier: 'xl' | 'l' | 'm' | 's' | 'xs';
};

// Layout: one big xl center, four medium circles touching it
// (top, top-right, top-left, bottom-right, bottom-left), and two xs
// circles tucked into the lower corners. Every distance from the
// center is r_center + r_i so neighbours touch without overlapping.
const activities: Activity[] = [
  {
    text: ['Вирусное', 'YouTube видео'],
    points: 1000,
    cx: 50,
    cy: 50,
    r: 18,
    tier: 'xl',
  },
  {
    text: ['Вирусный YouTube', 'shorts/Reels/TikTok', '(10k+ likes)'],
    points: 500,
    cx: 50,
    cy: 17,
    r: 15,
    tier: 'l',
  },
  {
    text: ['YouTube видео'],
    points: 200,
    cx: 76,
    cy: 32,
    r: 12,
    tier: 'm',
  },
  {
    text: ['YouTube shorts', 'Reels / TikTok'],
    points: 150,
    cx: 24,
    cy: 32,
    r: 11,
    tier: 'm',
  },
  {
    text: ['Пост в соц. сетях'],
    points: 50,
    cx: 74,
    cy: 64,
    r: 8,
    tier: 's',
  },
  {
    text: ['Совет другу-стримеру'],
    points: 40,
    cx: 26,
    cy: 64,
    r: 7.5,
    tier: 's',
  },
  {
    text: ['Рейд'],
    points: 15,
    cx: 32,
    cy: 76,
    r: 6,
    tier: 'xs',
  },
  {
    text: ['Комментарий'],
    points: 10,
    cx: 68,
    cy: 76,
    r: 6,
    tier: 'xs',
  },
];

export function ViralMechanicsSlide() {
  return (
    <Slide number={12} total={16}>
      <div className="section-header viral-header">
        <h2 className="section-title">Примеры активностей</h2>
        <p className="section-subtitle">
          Размер круга отражает вес активности в&nbsp;системе поинтов. Чем крупнее&nbsp;— тем
          больше вознаграждение за&nbsp;конкретное действие коммьюнити
        </p>
      </div>
      <div className="viral-stage">
        <div className="viral-circles">
          {activities.map((a, i) => (
            <div
              key={i}
              className={`viral-circle viral-circle--${a.tier}`}
              style={{
                left: `${a.cx}%`,
                top: `${a.cy}%`,
                width: `${a.r * 2}%`,
              }}
            >
              <div className="viral-circle-content">
                <div className="viral-circle-text">
                  {a.text.map((line, j) => (
                    <span key={j} className="viral-circle-line">
                      {line}
                    </span>
                  ))}
                </div>
                <div className="viral-circle-points">
                  {a.points}
                  <span className="viral-circle-points-label">points</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
