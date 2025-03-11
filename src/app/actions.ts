"use server"

import path from "path";
import fs from "fs/promises";
import { redirect } from "next/navigation";

const usersFilePath = path.join(process.cwd(), 'public', 'data', 'users.json');

type User = {
    email: string;
    password: string;
};

export async function getUsers(): Promise<User[]> {
    try {
        const data = await fs.readFile(usersFilePath, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    };
};

export async function registerUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const users = await getUsers();

    if (users.some((user) => user.email === email)) {
        return redirect("/register");
    };

    const newUser: User = { email, password };
    users.push(newUser);

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    redirect("/register?message=User has been registered");
};
