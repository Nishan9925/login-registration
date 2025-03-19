import { registerUser } from "../actions";

export default async function RegistrationPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const errors = searchParams.errors ? JSON.parse(decodeURIComponent(searchParams.errors)) : null;
  const successMessage = searchParams.message || null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        {errors?.email && <p style={{ color: "red" }}>{errors.email[0]}</p>}
        {errors?.password && <p style={{ color: "red" }}>{errors.password[0]}</p>}

        <form action={registerUser} method="POST" className="flex flex-col items-center justify-center">
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
