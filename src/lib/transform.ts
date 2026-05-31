import { type Event } from '@/db/schema';
import { type ArtEvent, type EventType } from '@/types';

export function toArtEvent(row: Event): ArtEvent {
  return {
    id: row.id,
    title: row.title,
    type: row.type as EventType,
    date: row.startDate,
    endDate: row.endDate ?? undefined,
    startTime: row.startTime ?? undefined,
    endTime: row.endTime ?? undefined,
    venue: row.venue ?? '',
    city: row.city ?? '',
    country: row.country ?? '',
    address: row.address ?? '',
    description: row.description ?? '',
    image: row.imageUrl ?? undefined,
    ticketsUrl: row.ticketsUrl ?? undefined,
    price: row.price ?? undefined,
    tags: row.tags ?? undefined,
  };
}
