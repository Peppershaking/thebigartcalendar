'use client';

import { useRef, useEffect } from 'react';

const DAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface Props {
  eventDates: string[];
  selectedDate: string | null;
  onChange: (date: string) => void;
}

export default function DateStrip({ eventDates, selectedDate, onChange }: Props) {
  const stripRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current && stripRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedDate]);

  if (eventDates.length === 0) {
    return (
      <div
        className="flex-none h-14 flex items-center px-6 border-b border-zinc-200"
        style={{ fontFamily: 'var(--font-oxygen)', fontWeight: 300, fontSize: 18, color: '#a1a1aa' }}
      >
        No events this month
      </div>
    );
  }

  return (
    <div
      ref={stripRef}
      className="flex-none flex items-center gap-8 overflow-x-auto border-b border-zinc-200 px-6 h-14 scrollbar-hide"
    >
      {eventDates.map((dateStr) => {
        const [y, m, d] = dateStr.split('-').map(Number);
        const date = new Date(y, m - 1, d);
        const dayShort = DAY_SHORT[date.getDay()];
        const isActive = dateStr === selectedDate;

        return (
          <button
            key={dateStr}
            ref={isActive ? activeRef : null}
            onClick={() => onChange(dateStr)}
            className="flex-none flex items-baseline gap-1.5 whitespace-nowrap transition-colors"
            style={{
              fontFamily: 'var(--font-oxygen)',
              fontWeight: isActive ? 700 : 300,
              fontSize: 18,
              color: isActive ? '#000' : '#a1a1aa',
            }}
          >
            <span>{d}</span>
            <span>{dayShort}</span>
          </button>
        );
      })}
    </div>
  );
}
