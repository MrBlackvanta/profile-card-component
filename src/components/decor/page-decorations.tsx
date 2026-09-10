import PatternBottom from "./pattern-bottom";
import PatternTop from "./pattern-top";

export default function PageDecorations() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-clip"
    >
      <PatternTop className="motion-safe:animate-drift-in absolute top-1/2 left-1/2 -mt-95 -ml-72 size-155.5 -translate-1/2 opacity-25 md:-ml-129 md:size-244.5 md:opacity-50" />
      <PatternBottom className="motion-safe:animate-drift-out absolute top-1/2 left-1/2 mt-84 ml-72 size-155.5 -translate-1/2 opacity-25 md:mt-126 md:ml-115 md:size-244.5" />
    </div>
  );
}
