'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import Button from './Button';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleloginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            dispatch(login({ email: data.user.email }));
            router.push('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        };
    };

    return (
        <form onSubmit={handleloginSubmit} className="space-y-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300
                    rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 
                    rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Password"
                    required
                />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex justify-center gap-4">
                <Button 
                    type="submit"
                    label="Login"
                />
            </div>
        </form>
    );
};

export default LoginForm;
