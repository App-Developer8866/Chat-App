import React, { memo } from 'react';

const Button = ({
  name = '',
  type = 'button',
  className = '',
  inProgress = false,
  disabled = false,
  onClick = () => console.log('... Clicked'),
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled || inProgress}
    >
      {inProgress ? (
        <span className="loading loading-spinner"></span>
      ) : (
        name ?? ''
      )}
    </button>
  );
};

export default memo(Button);
