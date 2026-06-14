interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
});

/** Divine Orb — radiant gem */
export function DivineIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Chaos Orb — flame */
export function ChaosIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3 C13 6 16 7 16 11 C16 14 14 16 12 16 C10 16 8 14 8 11 C8 8 11 7 12 3 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M12 8 C12.5 9.5 14 10 14 12 C14 13.5 13 14.5 12 14.5 C11 14.5 10 13.5 10 12 C10 10.5 11.5 10 12 8 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Ban / block circle */
export function BanIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path d="M5.5 5.5 L18.5 18.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Scared face / stress */
export function ScaredIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="9" cy="10" r="0.8" fill={color} />
      <circle cx="15" cy="10" r="0.8" fill={color} />
      <path d="M8 15 C9 14 15 14 16 15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Clock / long withdrawal */
export function ClockIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path d="M12 7 L12 12 L15 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Link / chain */
export function LinkIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M10 14 a4 4 0 0 1 0-5.6 L12.5 5.9 a4 4 0 1 1 5.6 5.6 L16 13.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 10 a4 4 0 0 1 0 5.6 L11.5 18.1 a4 4 0 1 1 -5.6 -5.6 L8 10.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Money / commission */
export function MoneyIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M15 9 C15 8 13.5 7 12 7 C10.5 7 9 8 9 9 C9 10 10.5 10.5 12 11 C13.5 11.5 15 12 15 13 C15 14 13.5 15 12 15 C10.5 15 9 14 9 13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Angry / support */
export function AngryIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path d="M8 14 C9 13 15 13 16 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M9 9 L10.5 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M15 9 L13.5 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Group of people / community */
export function GroupIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="9" cy="9" r="3" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="17" cy="10" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <path d="M3 19 C3 16 5.5 14 9 14 C12.5 14 15 16 15 19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M15 19 C15 17 17 15.5 19 15.5 C20.5 15.5 21.5 16.5 21.5 18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Game controller */
export function GamepadIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M6 8 H18 A4 4 0 0 1 22 12 V14 A3 3 0 0 1 19 17 L17 17 L16 15 H8 L7 17 H5 A3 3 0 0 1 2 14 V12 A4 4 0 0 1 6 8 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M8 11 L8 13 M7 12 L9 12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="16" cy="12" r="0.7" fill={color} />
      <circle cx="18" cy="12" r="0.7" fill={color} />
    </svg>
  );
}

/** Pen / UGC */
export function PenIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M16 4 L20 8 L8 20 L4 20 L4 16 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M14 6 L18 10" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Eye / attention */
export function EyeIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M2 12 C4 7 8 5 12 5 C16 5 20 7 22 12 C20 17 16 19 12 19 C8 19 4 17 2 12 Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Target / marketing */
export function TargetIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  );
}

/** Bar chart / CRM */
export function ChartIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M3 21 H21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <rect x="6" y="13" width="3" height="6" stroke={color} strokeWidth={strokeWidth} />
      <rect x="11" y="9" width="3" height="10" stroke={color} strokeWidth={strokeWidth} />
      <rect x="16" y="5" width="3" height="14" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Gamepad 2 / hardcore */
export function GamepadHardcoreIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M5 9 H19 A4 4 0 0 1 23 13 V15 A3 3 0 0 1 20 18 L18 18 L17 16 H7 L6 18 H4 A3 3 0 0 1 1 15 V13 A4 4 0 0 1 5 9 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M7 12 L7 14 M6 13 L8 13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="17" cy="13" r="0.7" fill={color} />
    </svg>
  );
}

/** Person / adult */
export function PersonIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="7" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path d="M4 21 C4 16 7 14 12 14 C17 14 20 16 20 21" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Cyclical arrows */
export function CycleIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M3 12 a9 9 0 0 1 15.5 -6.3 L21 8 M21 4 L21 8 L17 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12 a9 9 0 0 1 -15.5 6.3 L3 16 M3 20 L3 16 L7 16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Warning triangle */
export function WarningIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3 L22 20 L2 20 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M12 10 L12 14" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.7" fill={color} />
    </svg>
  );
}

/** Star / KOL trust */
export function StarIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3 L14.5 9 L21 9.5 L16 14 L17.5 20.5 L12 17 L6.5 20.5 L8 14 L3 9.5 L9.5 9 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Package / product */
export function PackageIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3 L21 7 V17 L12 21 L3 17 V7 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M3 7 L12 12 L21 7" stroke={color} strokeWidth={strokeWidth} />
      <path d="M12 12 V21" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Question mark */
export function QuestionIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M9 9 a3 3 0 0 1 6 0 c0 2 -3 2.5 -3 4.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="0.7" fill={color} />
    </svg>
  );
}

/** Check / confirmed */
export function CheckIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M8 12.5 L10.8 15.2 L16 9.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Trigger / lightning bolt */
export function TriggerIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M13 3 L5 13.5 L11 13.5 L9.5 21 L19 10.5 L13 10.5 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Shield with check — escrow / protection */
export function ShieldCheckIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M12 3 L20 6 V12 C20 16.5 16.5 19.5 12 21 C7.5 19.5 4 16.5 4 12 V6 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.5 L11 15 L15.5 10.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hourglass — timeline / waiting */
export function HourglassIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M6 3 H18 M6 21 H18 M7 3 V8 L12 12 L17 8 V3 M7 21 V16 L12 12 L17 16 V21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Flask — experiment / pilot */
export function FlaskIcon({ size = 24, color = 'currentColor', strokeWidth = 1.6, className }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path
        d="M10 3 V8.5 L5.5 18.5 C5 19.6 5.8 21 7 21 H17 C18.2 21 19 19.6 18.5 18.5 L14 8.5 V3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M9 3 H15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 14 H17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
