export function validateField(name, value, allValues = {}) {
  switch (name) {
    case 'fullName':
      if (!value) return 'Không được để trống';
      if (value.length < 3) return 'Phải từ 3 ký tự trở lên';
      return '';

    case 'email':
      if (!value) return 'Không được để trống';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Định dạng email không hợp lệ';
      return '';

    case 'password':
      if (!value) return 'Không được để trống';
      if (value.length < 6) return 'Phải từ 6 ký tự trở lên';
      if (!/[A-Z]/.test(value)) return 'Phải có ít nhất 1 chữ hoa';
      if (!/[0-9]/.test(value)) return 'Phải có ít nhất 1 chữ số';
      return '';

    case 'confirmPassword':
      if (!value) return 'Không được để trống';
      if (value !== allValues.password) return 'Mật khẩu không khớp';
      return '';

    default:
      return '';
  }
}

