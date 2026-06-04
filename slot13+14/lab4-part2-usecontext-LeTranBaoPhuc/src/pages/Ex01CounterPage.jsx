import { CounterProvider } from '../context/CounterContext';
import CounterDisplay from '../components/counter/CounterDisplay';
import CounterControls from '../components/counter/CounterControls';
import StatusMessage from '../components/counter/StatusMessage';

/**
 * Ex01CounterPage.jsx – Trang bài 1: Counter
 */
export default function Ex01CounterPage() {
  return (
    <div className="container mt-4">
      <h2>Bài 1: Counter</h2>
      <CounterProvider>
        <CounterDisplay />
        <CounterControls />
        <StatusMessage />
      </CounterProvider>
    </div>
  );
}
