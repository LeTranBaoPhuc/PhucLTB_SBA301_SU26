import { useFormContext } from '../../context/FormContext';
import { validateField } from '../../utils/validators';
import FormField from './FormField';

export default function RegistrationForm() {
  const { state, dispatch } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'VALIDATE_ALL' });

    let hasError = false;
    for (const key in state.values) {
      if (validateField(key, state.values[key], state.values)) {
        hasError = true;
      }
    }
    
    if (hasError) return;

    dispatch({ type: 'SET_STATUS', payload: { status: 'submitting' } });
    setTimeout(() => {
      dispatch({ type: 'SET_STATUS', payload: { status: 'success' } });
    }, 1000);
  };

  if (state.status === 'success') {
    return (
      <div>
        <p>Đăng ký thành công!</p>
        <button onClick={() => dispatch({ type: 'RESET' })}>Đăng ký lại</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {state.status === 'error' && <div style={{ color: 'red', marginBottom: '1rem' }}>Vui lòng kiểm tra lại các trường lỗi</div>}
      
      <FormField name="fullName" label="Họ và tên" placeholder="Nhập họ và tên" />
      <FormField name="email" label="Email" type="email" placeholder="Nhập email" />
      <FormField name="password" label="Mật khẩu" type="password" placeholder="Nhập mật khẩu" />
      <FormField name="confirmPassword" label="Xác nhận mật khẩu" type="password" placeholder="Xác nhận mật khẩu" />
      
      <button type="submit" disabled={state.status === 'submitting'}>
        {state.status === 'submitting' ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>
    </form>
  );
}
