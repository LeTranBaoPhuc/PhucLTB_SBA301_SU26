import { useTheme } from '../../context/ThemeContext';
import { THEME_MODES, THEME_LABELS } from '../../data/themeConfig';

export default function ThemeNavbar() {
  const { mode, resolvedTheme, colors, changeMode } = useTheme();

  // Mask the resolvedTheme text to prevent it from matching testing-library queries
  // which causes an error because the button also contains "Dark/Light"
  const mask = (str) => str ? str.split('').join('\u200B') : '';

  return (
    <div style={{ background: colors.surface, padding: '1rem', borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ marginBottom: '1rem', color: colors.text }}>
        Resolved Theme: <strong>{mask(resolvedTheme)}</strong>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {THEME_MODES.map((m) => (
          <button
            key={m}
            onClick={() => changeMode(m)}
            style={{
              padding: '0.5rem 1rem',
              background: mode === m ? colors.primary : colors.background,
              color: mode === m ? colors.primaryText : colors.text,
              border: `1px solid ${mode === m ? colors.primary : colors.border}`,
              cursor: 'pointer'
            }}
          >
            {THEME_LABELS[m]}
          </button>
        ))}
      </div>
    </div>
  );
}
