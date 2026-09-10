export default function PatternTop({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 978 978"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <linearGradient
        id="pattern-top-fill"
        x1="50%"
        y1="0.779%"
        x2="50%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#0989B4" stopOpacity="0" />
        <stop offset="99.94%" stopColor="#53FFEE" />
      </linearGradient>
      <ellipse
        cx="489"
        cy="489"
        rx="489"
        ry="488"
        fill="url(#pattern-top-fill)"
        opacity="0.5"
        transform="rotate(-135 489 489)"
      />
    </svg>
  );
}
