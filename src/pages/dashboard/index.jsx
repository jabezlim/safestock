import { useAuth } from '../../components/auth'

export function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <h2>Dashboard (Protected)</h2>
      {user && <div>Authenticated as {user.firstname}</div>}
    </>
  );
};