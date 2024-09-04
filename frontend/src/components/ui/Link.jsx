import React, { memo } from 'react';

const Link = ({ text = '', to = '#', className = '', disabled = false }) => {
  return (
    <a className="link link-hover" href={!disabled && to}>
      {text ?? ''}
    </a>
  );
};

export default memo(Link);
