import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const createSchema = z.object({
  title: z.string().min(1).max(120),
  content: z.string().max(5000).default(''),
  author: z.string().max(40).optional(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').trim();
  const items = await prisma.report.findMany({
    where: q ? { OR: [{ title: { contains: q } }, { content: { contains: q } }] } : undefined,
    orderBy: { id: 'desc' },
    take: 100,
  });
  return NextResponse.json({ items, total: items.length });
}

export async function POST(req: Request) {
  const parsed = createSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: 'invalid body' }, { status: 400 });
  const item = await prisma.report.create({ data: parsed.data });
  return NextResponse.json(item, { status: 201 });
}
