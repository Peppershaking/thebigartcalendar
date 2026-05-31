'use client';

import { CalendarFilters, EventType } from '@/types';
import { eventTypeColors } from '@/components/calendar/EventTypeBadge';
import { FilterSelect } from '@/components/ui/FilterSelect';

const EVENT_TYPES: EventType[] = ['gallery', 'performance', 'fair', 'auction', 'workshop'];

const ALL_TYPES: { value: EventType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  ...EVENT_TYPES.map((t) => ({ value: t, label: eventTypeColors[t].label })),
];

interface Props {
  filters: CalendarFilters;
  onChange: (f: CalendarFilters) => void;
  cities: string[];
}

export default function FilterBar({ filters, onChange, cities }: Props) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <FilterSelect
        value={filters.city}
        onChange={(v) => onChange({ ...filters, city: v ?? 'all' })}
        options={[
          { value: 'all', label: 'All Cities' },
          ...cities.map((c) => ({ value: c, label: c })),
        ]}
      />
      <FilterSelect
        value={filters.type}
        onChange={(v) => onChange({ ...filters, type: (v ?? 'all') as EventType | 'all' })}
        options={ALL_TYPES}
      />
    </div>
  );
}
