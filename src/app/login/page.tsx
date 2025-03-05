"use client"

import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import LoginForm from "@/components/LoginForm";

function LoginPage() {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
