import { useAuth } from '../../components/auth'

export function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <h2>Dashboard (Protected)</h2>
      <div>Authenticated as {user.token}</div>
    </>
  );
};