import {
  useState,
  createContext,
  useContext,
} from 'react'
import {
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';

export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
};

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export async function fakeAuth(user) {
  return new Promise((resolve) => {
   setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  const handleLogin = async (data) => {    
    if (data.token) {
      setUser(data);
      const origin = location.state?.from?.pathname || '/home';
      navigate(origin);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
