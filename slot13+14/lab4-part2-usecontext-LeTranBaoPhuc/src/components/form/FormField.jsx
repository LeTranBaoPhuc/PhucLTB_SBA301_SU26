import { useFormContext } from '../../context/FormContext';

export default function FormField({ name, label, type = 'text', placeholder }) {
  const { state, dispatch } = useFormContext();
  const value = state.values[name];
  const error = state.errors[name];
  const touched = state.touched[name];

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE', payload: { field: name, value: e.target.value } });
  };

  const handleBlur = () => {
    dispatch({ type: 'BLUR', payload: { field: name } });
  };

  const hasError = touched && error;
  const isValid = touched && !error;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          borderColor: hasError ? 'red' : isValid ? 'green' : 'initial',
          display: 'block',
          width: '100%',
          padding: '0.5rem'
        }}
      />
      {hasError && <p style={{ color: 'red', margin: '0.25rem 0' }}>{error}</p>}
    </div>
  );
}
