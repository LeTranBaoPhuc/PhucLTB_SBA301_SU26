import { useTheme } from '../../context/ThemeContext';

export default function ThemedCard({ title, children }) {
  const { colors } = useTheme();

  return (
    <div style={{ 
      background: colors.surface, 
      border: `1px solid ${colors.border}`,
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1rem'
    }}>
      {title && <h3 style={{ color: colors.text, marginTop: 0, marginBottom: '1rem' }}>{title}</h3>}
      <div style={{ color: colors.text }}>
        {children}
      </div>
    </div>
  );
}
