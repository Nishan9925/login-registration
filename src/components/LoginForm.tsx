'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import Button from './Button';
import Input from './Input';

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

    const onChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value); 
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={handleloginSubmit} className="space-y-4">
            <Input 
                type="email"
                name="email"
                value={email}
                onChange={onChangeMail}
                placeholder="Email"
                required={true}
            />
            <Input 
                type="password"
                name="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Password"
                required={true}
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
