import { ThemeProvider, useTheme } from '../context/ThemeContext';
import ThemeNavbar from '../components/theme/ThemeNavbar';
import ThemedCard from '../components/theme/ThemedCard';
import ThemedButton from '../components/theme/ThemedButton';
import ThemedInput from '../components/theme/ThemedInput';

function ThemePageContent() {
  const { colors } = useTheme();
  
  return (
    <div style={{ background: colors.background, color: colors.text, minHeight: '100vh', transition: 'all 0.2s' }}>
      <ThemeNavbar />
      <div style={{ padding: '2rem' }}>
        <ThemedCard title="Card 1">
          <p>Nội dung mẫu 1</p>
          <div style={{ marginBottom: '1rem' }}>
            <ThemedInput placeholder="Nhập văn bản..." />
          </div>
          <ThemedButton>Nút chính</ThemedButton>
        </ThemedCard>
        
        <ThemedCard title="Card 2">
          <p>Nội dung mẫu 2</p>
          <ThemedButton variant="outline">Nút outline</ThemedButton>
        </ThemedCard>
        
        <ThemedCard title="Card 3">
          <p>Nội dung mẫu 3</p>
          <ThemedButton>Hoàn tất</ThemedButton>
        </ThemedCard>
      </div>
    </div>
  );
}

export default function Ex04ThemePage() {
  return (
    <ThemeProvider>
      <ThemePageContent />
    </ThemeProvider>
  );
}
