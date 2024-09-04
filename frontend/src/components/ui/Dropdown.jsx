import { memo } from 'react';

const Dropdown = ({
  placeholder = 'Select ...',
  value = '',
  className = '',
  disabled = false,
  readonly = false,
  options = [],
  onChange = () => console.log('...Value changed'),
}) => {
  return (
    <select
      className={`select select-bordered w-full ${className}`}
      value={value ?? ''}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="" selected disabled={readonly}>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option?.value} value={option?.value} disabled={readonly}>
          {option?.label ?? ''}
        </option>
      ))}
    </select>
  );
};

export default memo(Dropdown);
