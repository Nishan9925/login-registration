'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';
import { logout } from '@/store/authSlice';

function DashboardPage() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  if (!isAuthenticated) {
    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <p>You are not authenticated. Please log in.</p> 
        <Link href="/login">Sign In</Link>
        <Link href="/register">Sign Up</Link>
    </div>
  );
};

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default DashboardPage;
