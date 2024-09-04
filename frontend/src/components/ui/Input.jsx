import React, { memo } from 'react';
import { checkNull } from '../../utils/utils';
import { svg_path } from '../../constants/icons.constant';

const Input = ({
  type = 'text',
  inputType = '',
  startViewBox = '0 0 16 16',
  endViewBox = '0 0 24 24',
  placeholder = 'Enter ...',
  value = '',
  disabled = false,
  readonly = false,
  showStartIcon = true,
  showEndIcon = false,
  startIconOnClick = () => console.log('...Clicked start icon'),
  endIconOnClick = () => console.log('...Clicked end icon'),
  onChange = () => console.log('...Typing'),
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {!checkNull(inputType) && showStartIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={checkNull(startViewBox) ? '0 0 16 16' : startViewBox}
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          onClick={!disabled && !readonly && startIconOnClick}
        >
          <path d={svg_path(inputType)} />
        </svg>
      )}
      <input
        type={type ?? 'text'}
        className="grow"
        placeholder={placeholder ?? ''}
        disabled={disabled}
        readOnly={readonly}
      />
      {!checkNull(inputType) && showEndIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={checkNull(endViewBox) ? '0 0 24 24' : endViewBox}
          fill="currentColor"
          className="h-4 w-4 opacity-70"
          onClick={!disabled && !readonly && endIconOnClick}
        >
          <path
            d={
              inputType?.toLowerCase() === 'password'
                ? svg_path(
                    type?.toLowerCase() === 'password'
                      ? 'invisibleeye'
                      : 'visibleeye'
                  )
                : svg_path(inputType)
            }
          />
        </svg>
      )}
    </label>
  );
};

export default memo(Input);
