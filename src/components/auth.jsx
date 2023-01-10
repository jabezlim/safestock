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

export function ProtectedRoute ({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export function fakeAuth() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);

  const handleLogin = async (user) => {
    const token = await fakeAuth();
    console.log(user);
    setToken(token);
    const origin = location.state?.from?.pathname || '/home';
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
