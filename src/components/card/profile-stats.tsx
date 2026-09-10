const stats = [
  { label: "Followers", value: 80, unit: "K" },
  { label: "Likes", value: 803, unit: "K" },
  { label: "Photos", value: 1.4, unit: "K" },
];

export default function ProfileStats() {
  return (
    <dl className="mt-6 grid grid-cols-3 px-6.75 pb-6.75">
      {stats.map(({ label, value, unit }) => (
        <div
          key={label}
          className="flex flex-col-reverse items-center gap-2.25"
        >
          <dt className="text-label text-ink-muted">{label}</dt>
          <dd className="text-body text-ink font-bold">
            <span className="sr-only">{value}</span>
            <span
              aria-hidden="true"
              className={`${Number.isInteger(value) ? "v-count" : "v-count-decimal"} motion-safe:animate-count`}
              style={
                { "--tenths": Math.round(value * 10) } as React.CSSProperties
              }
            />
            {unit}
          </dd>
        </div>
      ))}
    </dl>
  );
}
