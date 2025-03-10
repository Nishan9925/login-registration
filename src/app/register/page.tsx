import Button from "@/components/Button";
import { registerUser } from "../actions";

async function RegistrationPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form action={registerUser}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <Button
            type="submit"
            label="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
