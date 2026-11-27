import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const [totalItems, views, likes] = await Promise.all([
    prisma.workout.count(),
    prisma.workout.aggregate({ _sum: { views: true } }),
    prisma.workout.aggregate({ _sum: { likes: true } }),
  ]);
  return NextResponse.json({
    totalItems,
    totalViews: views._sum.views || 0,
    totalLikes: likes._sum.likes || 0,
  });
}
