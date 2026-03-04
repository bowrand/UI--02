import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client — env vars are set in Vercel & .env.local
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createClient(url, key, { auth: { persistSession: false } });
}

export type Job = {
  id: string | number;
  title: string;
  vehicle: string;
  location: string;
  icon: string;
  before: string;
  after: string;
  images: string[];
};

export type CarouselWork = {
  id: string | number;
  src: string;
  alt: string;
  note: string;
  width: number;
  height: number;
};

export type WebContent = {
  repairs: Job[];
  recentWorks: CarouselWork[];
};

// Default seed data used if the DB tables are empty on first boot
const SEED_JOBS: Omit<Job, 'id'>[] = [
  {
    title: "Brake Pad Replacement",
    vehicle: "Personal Sedan",
    location: "NW Calgary",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    before: "Squeaking brakes",
    after: "Smooth, silent stopping",
    images: ["https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop"],
  },
  {
    title: "Alternator Swap",
    vehicle: "Dually Work Van",
    location: "Downtown Office",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Van wouldn't start",
    after: "Running perfectly in 2 hrs",
    images: ["https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"],
  },
  {
    title: "Pre-Purchase Inspection",
    vehicle: "Heavy Duty Ford F-350",
    location: "SE Calgary",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    before: "Uncertain buyer",
    after: "Full 150-point report provided",
    images: ["https://images.unsplash.com/photo-1503376713356-208390a641d4?q=80&w=600&auto=format&fit=crop"],
  },
  {
    title: "Battery Replacement",
    vehicle: "Compact Car",
    location: "Airdrie",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    before: "Dead battery in winter",
    after: "Instant start, tested charging",
    images: ["https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"],
  },
];

const SEED_WORKS: Omit<CarouselWork, 'id'>[] = [
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop", alt: "Engine Repair Diagnostic in NW Calgary", note: "Complete engine diagnostic and repair in NW Calgary.", width: 400, height: 300 },
  { src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=600&auto=format&fit=crop", alt: "Professional Brake Pad Replacement Calgary", note: "Front and rear brake pad replacement.", width: 300, height: 400 },
  { src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop", alt: "Synthetic Oil Change Mobile Mechanic Calgary", note: "Synthetic oil change done in the driveway.", width: 500, height: 300 },
  { src: "https://images.unsplash.com/photo-1503376713356-208390a641d4?q=80&w=600&auto=format&fit=crop", alt: "Emergency Battery Replacement Downtown Calgary", note: "Emergency battery replacement at a downtown office.", width: 300, height: 300 },
  { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop", alt: "Seasonal Tire Swap and Balancing Calgary", note: "Seasonal tire swap and balancing.", width: 450, height: 350 },
];

// ─── Jobs ────────────────────────────────────────────────────────────────────

export async function getJobs(): Promise<Job[]> {
  const sb = getSupabase();
  const { data, error } = await sb.from('jobs').select('*').order('created_at', { ascending: false });
  if (error) { console.error('getJobs error', error); return SEED_JOBS.map((j, i) => ({ ...j, id: i + 1 })); }
  if (!data || data.length === 0) {
    // Auto-seed on first use
    await sb.from('jobs').insert(SEED_JOBS);
    const { data: seeded } = await sb.from('jobs').select('*').order('created_at', { ascending: false });
    return (seeded || []) as Job[];
  }
  return data as Job[];
}

export async function createJob(job: Omit<Job, 'id'>): Promise<Job> {
  const sb = getSupabase();
  const { data, error } = await sb.from('jobs').insert([job]).select().single();
  if (error) throw new Error(error.message);
  return data as Job;
}

export async function updateJob(id: string, job: Partial<Job>): Promise<Job> {
  const sb = getSupabase();
  const { id: _id, ...rest } = job as any;
  const { data, error } = await sb.from('jobs').update({ ...rest, updated_at: new Date().toISOString() }).eq('id', id).select().single();
  if (error) throw new Error(error.message);
  return data as Job;
}

export async function deleteJob(id: string): Promise<void> {
  const sb = getSupabase();
  const { error } = await sb.from('jobs').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// ─── Carousel Works ──────────────────────────────────────────────────────────

export async function getWorks(): Promise<CarouselWork[]> {
  const sb = getSupabase();
  const { data, error } = await sb.from('carousel_works').select('*').order('created_at', { ascending: false });
  if (error) { console.error('getWorks error', error); return SEED_WORKS.map((w, i) => ({ ...w, id: i + 1 })); }
  if (!data || data.length === 0) {
    await sb.from('carousel_works').insert(SEED_WORKS);
    const { data: seeded } = await sb.from('carousel_works').select('*').order('created_at', { ascending: false });
    return (seeded || []) as CarouselWork[];
  }
  return data as CarouselWork[];
}

export async function createWork(work: Omit<CarouselWork, 'id'>): Promise<CarouselWork> {
  const sb = getSupabase();
  const { data, error } = await sb.from('carousel_works').insert([work]).select().single();
  if (error) throw new Error(error.message);
  return data as CarouselWork;
}

export async function updateWork(id: string, work: Partial<CarouselWork>): Promise<CarouselWork> {
  const sb = getSupabase();
  const { id: _id, ...rest } = work as any;
  const { data, error } = await sb.from('carousel_works').update({ ...rest, updated_at: new Date().toISOString() }).eq('id', id).select().single();
  if (error) throw new Error(error.message);
  return data as CarouselWork;
}

export async function deleteWork(id: string): Promise<void> {
  const sb = getSupabase();
  const { error } = await sb.from('carousel_works').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// ─── Combined (used by homepage SWR fetch) ───────────────────────────────────

export async function getContent(): Promise<WebContent> {
  const [repairs, recentWorks] = await Promise.all([getJobs(), getWorks()]);
  return { repairs, recentWorks };
}

export async function saveContent(content: WebContent): Promise<void> {
  // Full replace: delete all then re-insert (used for bulk admin saves)
  const sb = getSupabase();
  await Promise.all([
    sb.from('jobs').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
    sb.from('carousel_works').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
  ]);
  const jobsToInsert = content.repairs.map(({ id, ...rest }) => rest);
  const worksToInsert = content.recentWorks.map(({ id, ...rest }) => rest);
  await Promise.all([
    jobsToInsert.length ? sb.from('jobs').insert(jobsToInsert) : Promise.resolve(),
    worksToInsert.length ? sb.from('carousel_works').insert(worksToInsert) : Promise.resolve(),
  ]);
}
