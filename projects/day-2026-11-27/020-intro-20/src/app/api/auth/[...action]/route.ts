import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword, verifyPassword, signToken } from '@/lib/auth';

export async function POST(req: Request, { params }: { params: Promise<{ action: string[] }> }) {
  const { action } = await params;
  const body = await req.json().catch(() => ({}));
  const route = action?.[0];

  if (route === 'register') {
    if (!body.email || !body.password) return NextResponse.json({ error: 'email and password required' }, { status: 400 });
    const exists = await prisma.user.findUnique({ where: { email: body.email } });
    if (exists) return NextResponse.json({ error: 'already registered' }, { status: 409 });
    const user = await prisma.user.create({
      data: { email: body.email, password: await hashPassword(body.password), name: body.name || '사용자' },
    });
    return NextResponse.json({ id: user.id, email: user.email, name: user.name }, { status: 201 });
  }
  if (route === 'login') {
    const user = await prisma.user.findUnique({ where: { email: body.email || '' } });
    if (!user || !(await verifyPassword(body.password || '', user.password))) {
      return NextResponse.json({ error: 'invalid credentials' }, { status: 401 });
    }
    const token = await signToken({ id: user.id, email: user.email });
    return NextResponse.json({ token, name: user.name, email: user.email });
  }
  return NextResponse.json({ error: 'unknown action' }, { status: 404 });
}
