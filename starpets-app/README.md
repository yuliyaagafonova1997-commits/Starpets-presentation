# Starpets Presentation

A4 landscape слайд-дека под PDF-экспорт. 16 слайдов в Apple-стиле, повторяющие нарратив
исследования продукта Starpets (PoE-маркетплейс валюты).

## Запуск

```bash
cd starpets-app
npm install
npm run dev      # http://localhost:5173
npm run build    # production-сборка в dist/
```

## Экспорт в PDF

1. `npm run build` → `starpets-app/dist/index.html`
2. Открыть в Chrome / Edge
3. **Печать → Сохранить как PDF**
4. В настройках: A4 landscape, поля по умолчанию, фон = вкл.

Каждый слайд — отдельная страница A4 (см. `@page` в `Slide.css`).

## Структура слайдов

| # | Слайд | Источник (PDF) |
|---|-------|----------------|
| 1 | Hero | — |
| 2 | Главный инсайт | — |
| 3 | Полевая разведка | p. 4 |
| 4 | Инсайты для ресерчера | p. 4–5 |
| 5 | Кто наша аудитория | p. 5 |
| 6 | Главные боли и барьеры | p. 5 + p. 7 |
| 7 | Почему не покупают | p. 6 |
| 8 | Что важно при выборе | p. 7 |
| 9 | Гипотезы и вердикты | — |
| 10 | Цикличность и сценарии | p. 9 |
| 11 | Валюта — король | p. 10 |
| 12 | Виральная механика | p. 11 |
| 13 | Брифинг: продукт | p. 12 |
| 14 | Брифинг: маркетинг и Paid | p. 13 |
| 15 | Брифинг: Influence и CRM | p. 14 |
| 16 | Открытые вопросы и риски | p. 15 |

## Архитектура

```
starpets-app/src/
├── components/
│   ├── charts/         # PieChart, BarChart, chartColors
│   ├── icons/          # SVG-иконки (замена эмодзи)
│   ├── slides/         # 16 слайдов + index.ts
│   └── ui/             # Slide, Badge
├── App.tsx
├── App.css             # design tokens (single source of truth)
└── index.css           # reset
```

### Дизайн-токены

Все цвета, радиусы и тени — в `App.css` через CSS-переменные.
`theme.ts` удалён: вся типографика идёт через `var(--*)` + Tailwind-style clamp.

### Иконки

`components/icons/index.tsx` — собственный набор line-иконок (Divine, Chaos, Ban,
Scared, Clock, Link, Money, Group, Gamepad, Pen, Eye, Target, Chart, Question и т.д.).
Размер 24×24 по умолчанию, поддерживают `color` и `strokeWidth`.

### Графики

Свои `PieChart` и `BarChart` (SVG). Никаких recharts / d3 / chart.js — проще
и&nbsp;контролируемее. Цвета — из `charts/chartColors.ts`.

### Печать / PDF

`@media print` в `Slide.css`:
- `@page { size: A4 landscape; margin: 0 }`
- `transition: none !important` на всех элементах
- `print-color-adjust: exact` для тёмных слайдов
- каждый `.slide` = `page-break-after: always`

### Стек

React 19 + TypeScript + Vite. Без роутинга, без состояния, без анимаций — это
статичная презентация.
