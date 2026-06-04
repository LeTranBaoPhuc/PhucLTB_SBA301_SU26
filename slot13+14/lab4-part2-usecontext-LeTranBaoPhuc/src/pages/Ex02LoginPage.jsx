import { AuthProvider, useAuth } from '../context/AuthContext';
import AuthNavbar from '../components/auth/AuthNavbar';
import LoginForm from '../components/auth/LoginForm';
import Dashboard from '../components/auth/Dashboard';

function PageContent() {
  const { user } = useAuth();
  
  return (
    <>
      <AuthNavbar />
      {user ? <Dashboard /> : <LoginForm />}
    </>
  );
}

export default function Ex02LoginPage() {
  return (
    <AuthProvider>
      <PageContent />
    </AuthProvider>
  );
}
