import { getAllEvents } from '@/db/queries';
import { toArtEvent } from '@/lib/transform';
import CalendarClient from '@/components/calendar/CalendarClient';

export default async function HomePage() {
  const rows = await getAllEvents();
  const events = rows.map(toArtEvent);
  const cities = [...new Set(events.map((e) => e.city).filter(Boolean))].sort();

  return <CalendarClient events={events} cities={cities} />;
}
