import Button from "@/components/Button";
import { registerUser } from "../actions";

async function RegistrationPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="flex flex-col items-center justify-center" action={registerUser}>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300
                    rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required 
          />
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300
                    rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    required 
          />
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
