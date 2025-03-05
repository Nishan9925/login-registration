'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';
import { logout } from '@/store/authSlice';
import Button from '@/components/Button';

function DashboardPage() {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <p>You are not authenticated. Please log in.</p> 
        <div className="flex flex-row items-center justify-center gap-2">
            <Link href="/login">
                <Button
                    type="button"
                    label="Sign In"
                />
            </Link>
            <Link href="/register">
                <Button
                    type="button"
                    label="Sign Up"
                />
            </Link>
        </div>
    </div>
  );
};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}!</p>
      <Button 
        type="button"
        label="Log Out"
        onClick={handleLogout}
      />
    </div>
  );
};

export default DashboardPage;
