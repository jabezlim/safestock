import {
  Routes,
  Route,
} from 'react-router-dom';
import {
  ProtectedRoute,
  AuthProvider
} from './components/auth';
import { Navigation } from './components/navigation';
import { Home } from './pages/home'
import { Dashboard } from './pages/dashboard/index'
import { Admin } from './pages/admin'
import { NoMatch } from './pages/nomatch';
import { HomeLayout } from './layout/homelayout';
import { Enterprise, Feature, Support } from './pages/public/feature';
import Login from './pages/account/login';
import SignUp from './pages/account/signup';
import { Layout as DashLayout } from './layout/dashboard';
import UserProfile from './pages/account/userprofile';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="feature" element={<Feature />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashLayout />}>
          <Route index element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}


export default App
