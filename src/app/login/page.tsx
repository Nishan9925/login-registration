"use client"

import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import LoginForm from "@/components/LoginForm";

function LoginPage() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
