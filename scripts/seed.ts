import { createHash } from 'crypto';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { events, type NewEvent } from '../src/db/schema';
import { sql } from 'drizzle-orm';

process.loadEnvFile('.env.local');

const client = neon(process.env.DATABASE_URL!);
const db = drizzle(client);

// Utility: generate a stable deduplication ID from source URL + title + start date
function makeId(sourceUrl: string, title: string, startDate: string): string {
  return createHash('sha256')
    .update(`${sourceUrl}::${title}::${startDate}`)
    .digest('hex')
    .slice(0, 32);
}

// ---------------------------------------------------------------------------
// Seeded from: macba.cat, pinkdolphinlisbon.com — 2026-05-31
// ---------------------------------------------------------------------------
const seedEvents: NewEvent[] = [

  // ── MACBA · Exhibitions ─────────────────────────────────────────────────

  {
    id: makeId('https://www.macba.cat/en/exhibitions/like-a-dance-of-starlings-macba-collection-thirty-years-and-infinite-ways-of-being/', 'Like a Dance of Starlings: MACBA Collection — Thirty Years and Infinite Ways of Being', '2025-11-28'),
    title: 'Like a Dance of Starlings: MACBA Collection — Thirty Years and Infinite Ways of Being',
    type: 'gallery',
    startDate: '2025-11-28',
    endDate: '2026-09-27',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Collection exhibition celebrating the museum\'s thirty-year anniversary, presenting infinite ways of engaging with contemporary art.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/exhibitions/like-a-dance-of-starlings-macba-collection-thirty-years-and-infinite-ways-of-being/',
    sourceName: 'MACBA',
    tags: ['exhibition', 'collection', 'contemporary', 'barcelona', 'anniversary'],
  },

  {
    id: makeId('https://www.macba.cat/en/exhibitions/spiral-of-time-placa-dels-angels-macba/', 'Spiral of Time – Plaça dels Àngels – MACBA', '2025-07-10'),
    title: 'Spiral of Time – Plaça dels Àngels – MACBA',
    type: 'gallery',
    startDate: '2025-07-10',
    endDate: '2027-01-11',
    venue: 'MACBA — Plaça dels Àngels',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'A large-scale public space installation in the square surrounding MACBA.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/exhibitions/spiral-of-time-placa-dels-angels-macba/',
    sourceName: 'MACBA',
    tags: ['installation', 'public art', 'outdoor', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/exhibitions/anna-moreno-the-third-twist/', 'Anna Moreno. The Third Twist', '2026-02-05'),
    title: 'Anna Moreno. The Third Twist',
    type: 'gallery',
    startDate: '2026-02-05',
    endDate: '2026-09-28',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Solo exhibition featuring documentary work by Anna Moreno.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/exhibitions/anna-moreno-the-third-twist/',
    sourceName: 'MACBA',
    tags: ['exhibition', 'solo show', 'documentary', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/exhibitions/basel-abbas-and-ruanne-abou-rahme/', 'Basel Abbas and Ruanne Abou-Rahme: Prisoners of Love: Until the Sun of Freedom', '2026-02-14'),
    title: 'Basel Abbas and Ruanne Abou-Rahme: Prisoners of Love: Until the Sun of Freedom',
    type: 'gallery',
    startDate: '2026-02-14',
    endDate: '2026-09-28',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Collaborative exhibition by Basel Abbas and Ruanne Abou-Rahme exploring themes of resistance and solidarity.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/exhibitions/basel-abbas-and-ruanne-abou-rahme/',
    sourceName: 'MACBA',
    tags: ['exhibition', 'collaborative', 'political', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/exhibitions/aurelia-munozs-birds-kites/', 'Aurèlia Muñoz\'s Birds-Kites', '2026-04-13'),
    title: 'Aurèlia Muñoz\'s Birds-Kites',
    type: 'gallery',
    startDate: '2026-04-13',
    endDate: '2027-03-21',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Textile sculpture installation by Aurèlia Muñoz, first milestone in the Aurèlia Muñoz Centenary.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/exhibitions/aurelia-munozs-birds-kites/',
    sourceName: 'MACBA',
    tags: ['installation', 'textile', 'sculpture', 'barcelona'],
  },

  // ── MACBA · Activities ──────────────────────────────────────────────────

  {
    id: makeId('https://www.macba.cat/en/activities/guided-visits-to-birds-kites-by-aurelia-munoz/', 'Guided Visits to "Birds-Kites" by Aurèlia Muñoz', '2026-05-17'),
    title: 'Guided Visits to "Birds-Kites" by Aurèlia Muñoz',
    type: 'gallery',
    startDate: '2026-05-17',
    endDate: '2026-07-12',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Guided visits every Sunday to the Aurèlia Muñoz textile installation, led by Albert Gironès and Eva Paià.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/guided-visits-to-birds-kites-by-aurelia-munoz/',
    sourceName: 'MACBA',
    tags: ['guided tour', 'textile', 'sunday', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/guided-visits-to-prisoners-of-love-by-basel-abbas-and-ruanne-abou-rahme-and-to-the-third-twist-by-anna-moreno/', 'Guided Visits to "Prisoners of Love" and "The Third Twist"', '2026-06-07'),
    title: 'Guided Visits to "Prisoners of Love" and "The Third Twist"',
    type: 'gallery',
    startDate: '2026-06-07',
    endDate: '2026-09-27',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Guided visits every Sunday through the exhibitions by Basel Abbas & Ruanne Abou-Rahme and Anna Moreno, led by Agnes Essonti, Albert Gironès, and Eva Paià.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/guided-visits-to-prisoners-of-love-by-basel-abbas-and-ruanne-abou-rahme-and-to-the-third-twist-by-anna-moreno/',
    sourceName: 'MACBA',
    tags: ['guided tour', 'sunday', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/guided-visits-to-like-a-dance-of-starlings-macba-collection-thirty-years-and-infinite-ways-of-being/', 'Guided Visits to "Like a Dance of Starlings"', '2026-06-06'),
    title: 'Guided Visits to "Like a Dance of Starlings"',
    type: 'gallery',
    startDate: '2026-06-06',
    endDate: '2026-09-26',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Guided visits every Saturday to the MACBA Collection exhibition, led by Avalancha.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/guided-visits-to-like-a-dance-of-starlings-macba-collection-thirty-years-and-infinite-ways-of-being/',
    sourceName: 'MACBA',
    tags: ['guided tour', 'collection', 'saturday', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/presentacio-i-visita-del-culte-a-la-bellesa-al-cccb/', 'Presentation & Visit to "The Cult of Beauty" at CCCB', '2026-06-09'),
    title: 'Presentation & Visit to "The Cult of Beauty" at CCCB',
    type: 'gallery',
    startDate: '2026-06-09',
    venue: 'CCCB — Centre de Cultura Contemporània de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Carrer de Montalegre, 5, 08001 Barcelona',
    description: 'Exclusive activity for MACBA and Collection Friends — presentation and visit to The Cult of Beauty exhibition at CCCB.',
    sourceUrl: 'https://www.macba.cat/en/activities/presentacio-i-visita-del-culte-a-la-bellesa-al-cccb/',
    sourceName: 'MACBA',
    tags: ['guided tour', 'exclusive', 'barcelona', 'cccb'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/murmurs-viii-roc-jimenez-de-cisneros-thin-zones/', 'MURMURS VIII: Roc Jiménez de Cisneros, "Thin Zones"', '2026-06-11'),
    title: 'MURMURS VIII: Roc Jiménez de Cisneros, "Thin Zones"',
    type: 'performance',
    startDate: '2026-06-11',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'A performance that shifts between clues and coincidences linking unexpected territories.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/murmurs-viii-roc-jimenez-de-cisneros-thin-zones/',
    sourceName: 'MACBA',
    tags: ['performance', 'sound', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/the-kitchen-school-with-cesar-redrado-and-silvia-zayas/', 'The Kitchen School with César Redrado & Silvia Zayas', '2026-06-12'),
    title: 'The Kitchen School with César Redrado & Silvia Zayas',
    type: 'workshop',
    startDate: '2026-06-12',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Guerrilla Memes to Combat the Food Industry — part of the ongoing Kitchen School programme.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/the-kitchen-school-with-cesar-redrado-and-silvia-zayas/',
    sourceName: 'MACBA',
    tags: ['workshop', 'food', 'lecture', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/the-architecture-of-macba-guided-tour-of-the-museum-buildings/', 'The Architecture of MACBA: Guided Tour', '2026-06-16'),
    title: 'The Architecture of MACBA: Guided Tour',
    type: 'gallery',
    startDate: '2026-06-16',
    endDate: '2026-11-03',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Guided tour of the museum buildings on selected dates: June 16, July 7, September 22, October 6, November 3.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/the-architecture-of-macba-guided-tour-of-the-museum-buildings/',
    sourceName: 'MACBA',
    tags: ['guided tour', 'architecture', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/la-construccio-democions-cinema-i-arquitectures-que-interpellen-la-condicio-humana/', 'Building Emotions: Cinema & Architectures', '2026-07-09'),
    title: 'Building Emotions: Cinema & Architectures',
    type: 'performance',
    startDate: '2026-07-09',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Activity by BARQ Festival exploring the intersection of cinema and architecture.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/la-construccio-democions-cinema-i-arquitectures-que-interpellen-la-condicio-humana/',
    sourceName: 'MACBA',
    tags: ['cinema', 'architecture', 'festival', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/murmurs-ix-asia-heavy-metal/', 'MURMURS IX: ASIA, "Heavy-Metal"', '2026-07-16'),
    title: 'MURMURS IX: ASIA, "Heavy-Metal"',
    type: 'performance',
    startDate: '2026-07-16',
    endDate: '2026-07-17',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'A homage to the enigmatic musical action by Carles Santos and Pere Portabella.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/murmurs-ix-asia-heavy-metal/',
    sourceName: 'MACBA',
    tags: ['performance', 'music', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/total-democracy/', 'Total Democracy', '2026-07-22'),
    title: 'Total Democracy',
    type: 'performance',
    startDate: '2026-07-22',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Featuring Los Voluble, Juan Luis Matilla, Laura Morales, Teresa Garzón, and Paula Quintana.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/total-democracy/',
    sourceName: 'MACBA',
    tags: ['performance', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/murmurs-x-marc-vives-sssss/', 'MURMURS X: Marc Vives, "SSSSS"', '2026-09-19'),
    title: 'MURMURS X: Marc Vives, "SSSSS"',
    type: 'performance',
    startDate: '2026-09-19',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Vocal exercises based on the experience of singing for the landscape from the sea.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/murmurs-x-marc-vives-sssss/',
    sourceName: 'MACBA',
    tags: ['performance', 'sound', 'vocal', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/underground-matters-invisible-architectures/', 'UNDERGROUND MATTERS: Invisible Architectures', '2026-09-19'),
    title: 'UNDERGROUND MATTERS: Invisible Architectures',
    type: 'workshop',
    startDate: '2026-09-19',
    endDate: '2026-11-14',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Activity by UPC and Archikubik. Three sessions: September 19, October 17, November 14.',
    ticketsUrl: 'https://entrades.macba.cat/',
    sourceUrl: 'https://www.macba.cat/en/activities/underground-matters-invisible-architectures/',
    sourceName: 'MACBA',
    tags: ['workshop', 'architecture', 'seminar', 'barcelona'],
  },

  {
    id: makeId('https://www.macba.cat/en/activities/la-merce-at-macba-year-thirty-2026/', 'La Mercè at MACBA Year Thirty', '2026-09-24'),
    title: 'La Mercè at MACBA Year Thirty',
    type: 'gallery',
    startDate: '2026-09-24',
    venue: 'MACBA — Museu d\'Art Contemporani de Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    address: 'Plaça dels Àngels, 1, 08001 Barcelona',
    description: 'Open doors and various activities celebrating La Mercè festival and MACBA\'s thirtieth year.',
    sourceUrl: 'https://www.macba.cat/en/activities/la-merce-at-macba-year-thirty-2026/',
    sourceName: 'MACBA',
    tags: ['open day', 'festival', 'barcelona', 'free'],
  },

  // ── Pink Dolphin Lisbon · Workshops & Events ────────────────────────────

  {
    id: makeId('https://pinkdolphinlisbon.com/products/sardine-scenes-collage-workshop', 'Sardine Scenes Collage Workshop', '2025-05-23'),
    title: 'Sardine Scenes Collage Workshop',
    type: 'workshop',
    startDate: '2025-05-23',
    startTime: '14:00',
    endTime: '16:00',
    venue: 'Pink Dolphin',
    city: 'Lisbon',
    country: 'Portugal',
    address: 'Rua Poço dos Negros 37, Lisbon',
    description: 'Hands-on creative collage session inspired by Lisbon\'s sardine culture.',
    price: '€40',
    sourceUrl: 'https://pinkdolphinlisbon.com/products/sardine-scenes-collage-workshop',
    sourceName: 'Pink Dolphin Lisbon',
    tags: ['workshop', 'collage', 'lisbon'],
  },

  {
    id: makeId('https://pinkdolphinlisbon.com/products/creative-chaos-painting-workshop', 'Creative Chaos Painting Workshop', '2025-04-16'),
    title: 'Creative Chaos Painting Workshop',
    type: 'workshop',
    startDate: '2025-04-16',
    startTime: '19:00',
    endTime: '21:00',
    venue: 'Pink Dolphin',
    city: 'Lisbon',
    country: 'Portugal',
    address: 'Rua Poço dos Negros 37, Lisbon',
    description: 'An expressive painting workshop embracing spontaneity and creative freedom.',
    price: '€40',
    sourceUrl: 'https://pinkdolphinlisbon.com/products/creative-chaos-painting-workshop',
    sourceName: 'Pink Dolphin Lisbon',
    tags: ['workshop', 'painting', 'lisbon'],
  },

  {
    id: makeId('https://pinkdolphinlisbon.com/products/macrame-planter-propagation-workshop-march-19-21', 'Macrame Planter & Propagation Workshop', '2025-03-21'),
    title: 'Macrame Planter & Propagation Workshop',
    type: 'workshop',
    startDate: '2025-03-21',
    startTime: '14:00',
    endTime: '16:00',
    venue: 'Pink Dolphin',
    city: 'Lisbon',
    country: 'Portugal',
    address: 'Rua Poço dos Negros 37, Lisbon',
    description: 'Plant-focused crafting workshop combining macrame planter-making with plant propagation.',
    price: '€40',
    sourceUrl: 'https://pinkdolphinlisbon.com/products/macrame-planter-propagation-workshop-march-19-21',
    sourceName: 'Pink Dolphin Lisbon',
    tags: ['workshop', 'craft', 'macrame', 'lisbon'],
  },

  {
    id: makeId('https://pinkdolphinlisbon.com/pages/eventsandcreativeworkshops#witchy-night', 'Witchy Night – Halloween Celebration', '2025-10-30'),
    title: 'Witchy Night – Halloween Celebration',
    type: 'gallery',
    startDate: '2025-10-30',
    startTime: '19:00',
    endTime: '21:30',
    venue: 'Pink Dolphin',
    city: 'Lisbon',
    country: 'Portugal',
    address: 'Rua Poço dos Negros 37, Lisbon',
    description: 'Natural wines, a free Victorian Tarot Cards workshop, and a flash tattoo artist for Halloween.',
    price: 'Free',
    sourceUrl: 'https://pinkdolphinlisbon.com/pages/eventsandcreativeworkshops',
    sourceName: 'Pink Dolphin Lisbon',
    tags: ['event', 'halloween', 'free', 'lisbon'],
  },

  {
    id: makeId('https://pinkdolphinlisbon.com/pages/eventsandcreativeworkshops#pratos-picantes', 'Pratos Picantes – Ceramic Art Exhibition', '2025-09-18'),
    title: 'Pratos Picantes – Ceramic Art Exhibition',
    type: 'gallery',
    startDate: '2025-09-18',
    startTime: '19:00',
    endTime: '21:30',
    venue: 'Pink Dolphin',
    city: 'Lisbon',
    country: 'Portugal',
    address: 'Rua Poço dos Negros 37, Lisbon',
    description: 'Opening of Raquel Terenas\' provocative ceramic collection — a playfully subversive exploration of intimacy and pleasure.',
    price: 'Free',
    sourceUrl: 'https://pinkdolphinlisbon.com/pages/eventsandcreativeworkshops',
    sourceName: 'Pink Dolphin Lisbon',
    tags: ['exhibition', 'ceramics', 'opening', 'free', 'lisbon'],
  },

];

async function seed() {
  if (seedEvents.length === 0) {
    console.log('No events to seed — add entries to seedEvents and re-run.');
    process.exit(0);
  }

  console.log(`Seeding ${seedEvents.length} event(s)...`);

  await db
    .insert(events)
    .values(seedEvents)
    .onConflictDoUpdate({
      target: events.id,
      set: {
        title: sql`excluded.title`,
        type: sql`excluded.type`,
        startDate: sql`excluded.start_date`,
        endDate: sql`excluded.end_date`,
        startTime: sql`excluded.start_time`,
        endTime: sql`excluded.end_time`,
        venue: sql`excluded.venue`,
        city: sql`excluded.city`,
        country: sql`excluded.country`,
        address: sql`excluded.address`,
        description: sql`excluded.description`,
        imageUrl: sql`excluded.image_url`,
        ticketsUrl: sql`excluded.tickets_url`,
        price: sql`excluded.price`,
        tags: sql`excluded.tags`,
        sourceUrl: sql`excluded.source_url`,
        sourceName: sql`excluded.source_name`,
        externalId: sql`excluded.external_id`,
        scrapedAt: sql`now()`,
      },
    });

  console.log('Done.');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
