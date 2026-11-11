// The four-ribbon mark, redrawn from assets/brand/logo-vertical.png geometry
// (each ribbon fits a 142-unit box, 16-unit gaps, 300-unit mark).

export const RIBBON = {
  outer: [
    [0, 0],
    [104, 0],
    [142, 40],
    [40, 142],
    [0, 102],
  ],
  dark: [
    [56, 42],
    [142, 42],
    [42, 140],
    [40, 58],
  ],
  notch: [
    [40, 42],
    [56, 42],
    [40, 58],
  ],
} as const;

export const RIBBON_COLORS = [
  { light: "#20b0b8", dark: "#109090" }, // top-left teal
  { light: "#f8b810", dark: "#e89828" }, // top-right gold
  { light: "#888888", dark: "#707070" }, // bottom-left gray
  { light: "#283838", dark: "#182020" }, // bottom-right charcoal
];

const pts = (p: readonly (readonly number[])[]) => p.map(([x, y]) => `${x},${y}`).join(" ");

// sx/sy: mirror per quadrant
const QUADS = [
  { sx: 1, sy: 1, tx: 0, ty: 0 },
  { sx: -1, sy: 1, tx: 300, ty: 0 },
  { sx: 1, sy: -1, tx: 0, ty: 300 },
  { sx: -1, sy: -1, tx: 300, ty: 300 },
];

export function Mark({
  className,
  title = "North Tampa Bay Chamber",
  bg = "var(--linen)",
}: {
  className?: string;
  title?: string;
  bg?: string;
}) {
  return (
    <svg viewBox="-4 -4 308 308" className={className} role="img" aria-label={title}>
      {QUADS.map((q, i) => (
        <g key={i} transform={`translate(${q.tx} ${q.ty}) scale(${q.sx} ${q.sy})`}>
          <polygon points={pts(RIBBON.outer)} fill={RIBBON_COLORS[i].light} />
          <polygon points={pts(RIBBON.dark)} fill={RIBBON_COLORS[i].dark} />
          <polygon points={pts(RIBBON.notch)} fill={bg} />
        </g>
      ))}
    </svg>
  );
}
