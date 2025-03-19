"use server"

import path from "path";
import fs from "fs/promises";
import { redirect } from "next/navigation";
import { z } from "zod";

const usersFilePath = path.join(process.cwd(), "public", "data", "users.json");

const schema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

interface User {
  email: string;
  password: string;
}

async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function registerUser(formData: FormData) {
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const validatedFields = schema.safeParse({ email, password });

  if (!validatedFields.success) {
    return redirect(
      `/register?errors=${encodeURIComponent(
        JSON.stringify(validatedFields.error.flatten().fieldErrors)
      )}`
    );
  }

  const users = await getUsers();
  if (users.some((user) => user.email === email)) {
    return redirect(
      `/register?errors=${encodeURIComponent(
        JSON.stringify({ email: ["User already exists"] })
      )}`
    );
  }

  const newUser: User = { email, password };
  users.push(newUser);
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));

  return redirect("/register?message=User has been registered successfully");
}
