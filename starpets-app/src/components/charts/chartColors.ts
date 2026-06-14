// Coordinated chart palette. Primary accent + Apple-system colors.
export const chartColors = {
  orange: '#FE9920',
  black: '#1D1D1F',
  gray: '#86868B',
  lightGray: '#C7C7CC',
  blue: '#0071E3',
  green: '#30D158',
  red: '#FF3B30',
  yellow: '#FFD60A',
  purple: '#AF52DE',
  teal: '#64D2FF',
} as const;

// Default 7-color cycle for pie charts with many slices.
export const pieCycle: string[] = [
  chartColors.orange,
  chartColors.black,
  chartColors.gray,
  chartColors.blue,
  chartColors.green,
  chartColors.red,
  chartColors.purple,
];

// 3-color set for ternary pie charts.
export const pieTernary: string[] = [
  chartColors.orange,
  chartColors.black,
  chartColors.lightGray,
];
