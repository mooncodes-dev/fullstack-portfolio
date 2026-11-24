import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const items = await prisma.comment.findMany({ where: { postId: id }, orderBy: { id: 'asc' } });
  return NextResponse.json({ items });
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const body = await req.json().catch(() => ({}));
  if (!body.text) return NextResponse.json({ error: 'text is required' }, { status: 400 });
  const comment = await prisma.comment.create({
    data: { text: String(body.text), author: String(body.author || '익명'), postId: id },
  });
  return NextResponse.json(comment, { status: 201 });
}
