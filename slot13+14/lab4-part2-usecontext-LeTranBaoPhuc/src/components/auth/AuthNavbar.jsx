import { useAuth } from '../../context/AuthContext';

export default function AuthNavbar() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <span>{user.name}</span>
          <button onClick={logout}>Đăng xuất</button>
        </>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
    </div>
  );
}

