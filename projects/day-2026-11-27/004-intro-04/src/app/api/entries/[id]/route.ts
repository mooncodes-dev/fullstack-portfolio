import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const item = await prisma.entry.update({
    where: { id },
    data: { views: { increment: 1 } },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const body = await req.json().catch(() => ({}));
  const item = await prisma.entry.update({
    where: { id },
    data: { title: body.title, content: body.content },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  await prisma.entry.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
