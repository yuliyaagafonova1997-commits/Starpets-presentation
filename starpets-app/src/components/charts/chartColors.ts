// Coordinated chart palette: shades of the accent orange + grayscale.
// No rainbow — keeps charts on-brand and visually quiet.
export const chartColors = {
  // Accent (orange) shades
  orange900: '#6B3F00',
  orange800: '#8A5200',
  orange700: '#A86500',
  orange600: '#CC7D05',
  orange500: '#FE9920', // main accent
  orange400: '#FFB759',
  orange300: '#FFC77F',
  orange200: '#FFD9A8',
  orange100: '#FFEACC',
  orange50: '#FFF5E6',

  // Grayscale
  black: '#000000',
  gray1000: '#0A0A0C',
  gray900: '#1D1D1F',
  gray800: '#2C2C2E',
  gray700: '#424245',
  gray600: '#5A5A5F',
  gray500: '#6E6E73',
  gray400: '#86868B',
  gray300: '#A1A1A6',
  gray200: '#C7C7CC',
  gray100: '#E5E5E7',
  gray50: '#F5F5F7',
  white: '#FFFFFF',

  // === Legacy short-key aliases (deprecated) ===
  // Prefer the named tokens above. Kept only for backwards compatibility
  // with pre-refactor call-sites — do not use in new code.
  orange: '#FE9920',     // → orange500
  black: '#0A0A0C',      // → gray1000
  gray: '#86868B',       // → gray400
  lightGray: '#A1A1A6',  // → gray300
} as const;

// === Convenience aliases (semantic roles) ===
export const accent = chartColors.orange500;
export const black = chartColors.gray1000;

// === Cycles (ordered: most → least contrast) ===

// 4-color cycle for stacked bars / small multi-series. Alternates accent and gray.
export const cycleAccentGray: string[] = [
  chartColors.orange500,
  chartColors.gray1000,
  chartColors.gray400,
  chartColors.orange700,
];

// 6-color cycle for richer charts. Strong → soft, no rainbow.
export const cycle6: string[] = [
  chartColors.orange500,
  chartColors.gray1000,
  chartColors.gray600,
  chartColors.orange700,
  chartColors.gray400,
  chartColors.orange300,
];

// 8-color cycle for many categories (pie / dense stacked).
export const cycle8: string[] = [
  chartColors.orange500,
  chartColors.gray1000,
  chartColors.gray600,
  chartColors.orange700,
  chartColors.gray400,
  chartColors.orange300,
  chartColors.gray800,
  chartColors.orange400,
];

// Legacy aliases — kept so existing call-sites continue to work.
// PieChart previously used these named exports.
export const pieCycle: string[] = cycle8;
export const pieTernary: string[] = [
  chartColors.orange500,
  chartColors.gray1000,
  chartColors.gray300,
];
