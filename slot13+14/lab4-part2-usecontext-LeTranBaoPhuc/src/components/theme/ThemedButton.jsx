import { useTheme } from '../../context/ThemeContext';

export default function ThemedButton({ children, onClick, variant = 'primary' }) {
  const { colors } = useTheme();

  const isPrimary = variant === 'primary';
  const background = isPrimary ? colors.primary : 'transparent';
  const color = isPrimary ? colors.primaryText : colors.primary;
  const border = isPrimary ? 'none' : `1px solid ${colors.primary}`;

  return (
    <button 
      onClick={onClick}
      style={{
        background,
        color,
        border,
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      {children}
    </button>
  );
}
