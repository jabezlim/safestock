import { useAuth } from './auth'
import { NavLink } from 'react-router-dom';

export function Navigation() {
  const { token, onLogout } = useAuth();
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};