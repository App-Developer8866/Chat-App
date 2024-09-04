import React, { memo } from 'react';

const Label = ({ label = '', className = '' }) => {
  return (
    <div className="label p-2">
      <span className={`text-base label-text ${className}`}>{label ?? ''}</span>
    </div>
  );
};

export default memo(Label);
