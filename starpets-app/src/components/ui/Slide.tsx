import React from 'react';
import './Slide.css';

interface SlideProps {
  number: number;
  total: number;
  children: React.ReactNode;
  center?: boolean;
  /** Dark variant: solid dark background, inverse text. */
  dark?: boolean;
  /** Footer logo source. Defaults to the dark-text logo. */
  logoSrc?: string;
}

export function Slide({ number, total, children, center = false, dark = false, logoSrc = '/logo.svg' }: SlideProps) {
  return (
    <div className={`slide ${dark ? 'slide-dark' : ''}`}>
      <div
        className="slide-inner"
        style={center ? { justifyContent: 'center', alignItems: 'center' } : undefined}
      >
        <div
          className="slide-content"
          style={center ? { justifyContent: 'center', alignItems: 'center' } : undefined}
        >
          {children}
        </div>
      </div>
      <div className="slide-footer">
        <img className="logo" src={logoSrc} alt="Starpets" />
        <span className="slide-num">
          {number} / {total}
        </span>
      </div>
    </div>
  );
}
