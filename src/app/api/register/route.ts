import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'public', 'data', 'users.json');

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

  const userExists = users.some((user: any) => user.email === email);
  if (userExists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const newUser = { email, password };
  users.push(newUser);

  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: 'Registration successful', user: newUser });
};
