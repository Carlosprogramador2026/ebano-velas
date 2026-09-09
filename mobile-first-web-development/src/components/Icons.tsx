import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const LeafCircleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M32 16C23 16 17 21 17 31C24 31 31 27 32 16Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 31C21 27 26 23 31 18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ClockCircleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    <path
      d="M24 14V24L31 24"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LotusIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Geometric floral petal star */}
    <path
      d="M16 4C14.5 9 10 12 5 13C10 14 14.5 17 16 22C17.5 17 22 14 27 13C22 12 17.5 9 16 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M9 25C11 22 14 21 16 21C18 21 21 22 23 25"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Minimalist tilted isometric diamond */}
    <path
      d="M16 4L27 15L16 26L5 15L16 4Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M16 4V26M5 15H27"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeOpacity="0.6"
    />
  </svg>
);

export const GiftIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect x="6" y="14" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="4.5" y="10" width="23" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 10V27" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 10C14.5 7.5 11.5 6 9.5 7.5C7.5 9 9.5 10 16 10Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M16 10C17.5 7.5 20.5 6 22.5 7.5C24.5 9 22.5 10 16 10Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandmadeHeartIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Heart nested above caring hands */}
    <path
      d="M16 12C14.5 9.5 11 9 9.5 11C8 13 8.5 16 16 21C23.5 16 24 13 22.5 11C21 9 17.5 9.5 16 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 21C9 24 12 25 16 25C20 25 23 24 26 21"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const VaseBranchIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M9 10C9 6 15 6 15 10C15 13 18 16 18 20H6C6 16 9 13 9 10Z" />
    <path d="M12 6V2M10 3L14 3" strokeLinecap="round" />
  </svg>
);

export const RingSparkleIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="14" r="6" />
    <path d="M12 8L10 6H14L12 8Z" />
    <path d="M12 3V5M8 4L9 6M16 4L15 6" strokeLinecap="round" />
  </svg>
);

export const KeyObjectIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="8" cy="12" r="4" />
    <path d="M12 12H20M17 12V15M20 12V15" strokeLinecap="round" />
  </svg>
);

export const TrayOrganizerIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <rect x="3" y="8" width="18" height="10" rx="2" />
    <path d="M3 13H21M8 8V18M16 8V18" />
  </svg>
);

export const SucculentIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 4C9 8 7 12 7 16C7 18.7614 9.23858 21 12 21C14.7614 21 17 18.7614 17 16C17 12 15 8 12 4Z" />
    <path d="M12 10C10 13 9 15 9 17C9 18.6569 10.3431 20 12 20C13.6569 20 15 18.6569 15 17C15 15 14 13 12 10Z" />
    <path d="M7 16C4.5 15 4 11 6 9C8 10 9 12 9 14" strokeLinecap="round" />
    <path d="M17 16C19.5 15 20 11 18 9C16 10 15 12 15 14" strokeLinecap="round" />
  </svg>
);
