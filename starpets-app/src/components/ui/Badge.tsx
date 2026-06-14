import React from 'react';
import './Badge.css';

interface BadgeProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}