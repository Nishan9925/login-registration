import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'public', 'data', 'users.json');

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

  const user = users.find((user: any) => user.email === email);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login successful', user });
};
