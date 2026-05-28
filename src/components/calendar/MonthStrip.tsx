'use client';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface Props {
  month: number; // 0-indexed
  onChange: (m: number) => void;
}

export default function MonthStrip({ month, onChange }: Props) {
  return (
    <div className="flex-none flex items-center justify-center gap-6 border-t border-b border-zinc-200 h-[84px]">
      {MONTHS.map((name, i) => {
        const isActive = i === month;
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="transition-colors"
            style={{
              fontFamily: 'var(--font-oxygen)',
              fontWeight: isActive ? 700 : 300,
              fontSize: 24,
              color: isActive ? '#000' : '#a1a1aa',
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
