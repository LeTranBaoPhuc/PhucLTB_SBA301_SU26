import { useCounter } from '../../context/CounterContext';

/**
 * CounterControls.jsx – Các nút điều khiển bộ đếm (Bài 1)
 */
export default function CounterControls() {
  const { increment, decrement, reset } = useCounter();

  return (
    <div className="mt-3 mb-3">
      <button className="btn btn-primary me-2" onClick={increment}>Tăng (+)</button>
      <button className="btn btn-danger me-2" onClick={decrement}>Giảm (−)</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>
    </div>
  );
}
