import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  const item = await prisma.recipe.update({
    where: { id },
    data: { likes: { increment: 1 } },
  }).catch(() => null);
  if (!item) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ id: item.id, likes: item.likes });
}
