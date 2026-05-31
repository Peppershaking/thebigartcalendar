import { asc } from 'drizzle-orm';
import { db } from './index';
import { events } from './schema';

export async function getAllEvents() {
  return db.select().from(events).orderBy(asc(events.startDate));
}
