import { useCounter } from '../../context/CounterContext';

/**
 * CounterDisplay.jsx – Hiển thị giá trị đếm hiện tại (Bài 1)
 */
export default function CounterDisplay() {
  const { count } = useCounter();
  
  return (
    <div>
      Current count: <span>{count}</span>
    </div>
  );
}
