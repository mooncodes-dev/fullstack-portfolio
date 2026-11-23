import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  const file = form?.get('file');
  if (!file || typeof file === 'string') return NextResponse.json({ error: 'file is required' }, { status: 400 });
  const bytes = Buffer.from(await file.arrayBuffer());
  const dir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(dir, { recursive: true });
  const name = Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  await writeFile(path.join(dir, name), bytes);
  return NextResponse.json({ url: '/uploads/' + name }, { status: 201 });
}
