'use client';

import { Plus } from 'lucide-react';
import { CalendarFilters } from '@/types';
import FilterBar from '@/components/filters/FilterBar';
import { FilterSelect } from '@/components/ui/FilterSelect';

interface Props {
  year: number;
  onYearChange: (y: number) => void;
  filters: CalendarFilters;
  onFiltersChange: (f: CalendarFilters) => void;
  cities: string[];
  onMenuOpen: () => void;
}

const YEARS = [2024, 2025, 2026, 2027, 2028];

export default function AppHeader({ year, onYearChange, filters, onFiltersChange, cities, onMenuOpen }: Props) {
  return (
    <div className="flex-none">
      {/* Title row */}
      <div className="flex items-start justify-between px-6 pt-[2vh] pb-[1vh]">
        <div className="mt-1 w-[54px]" /> {/* spacer to balance the + button */}

        <h1
          className="text-center text-zinc-900 lowercase"
          style={{
            fontFamily: 'var(--font-host-grotesk)',
            fontWeight: 800,
            fontSize: 'clamp(42px, 6.5vh, 82px)',
            lineHeight: 'clamp(38px, 6vh, 76px)',
            letterSpacing: '-2px',
          }}
        >
          the big<br />art calendar.
        </h1>

        <button
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="flex items-center justify-center size-[54px] text-black hover:opacity-60 transition-opacity -mt-1 -mr-2"
        >
          <Plus className="size-7" strokeWidth={2} />
        </button>
      </div>

      {/* Year + filters row */}
      <div className="flex items-center justify-between px-6 pb-[1.5vh]">
        <FilterSelect
          value={String(year)}
          onChange={(v) => onYearChange(Number(v ?? year))}
          options={YEARS.map((y) => ({ value: String(y), label: String(y) }))}
        />

        <FilterBar filters={filters} onChange={onFiltersChange} cities={cities} />
      </div>
    </div>
  );
}
