import React from 'react';
import './Slide.css';

interface SlideProps {
  number: number;
  total: number;
  children: React.ReactNode;
  center?: boolean;
}

export function Slide({ number, total, children, center = false }: SlideProps) {
  return (
    <div className="slide">
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
        <span className="logo">Starpets</span>
        <span className="slide-num">
          {number} / {total}
        </span>
      </div>
    </div>
  );
}