import * as React from 'react';
import classNames from 'classnames';
import { useSettingsConfig } from '../ConfigProvider';

type ColorCheckboxProps = {
  color: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  size?: "lg" | "default" | "sm";
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const ColorCheckbox = ({
  color,
  checked, onChange,
  size = 'default',
  disabled = false,
  className, style = {}
}: ColorCheckboxProps) => {
  const { theme } = useSettingsConfig()

  const sizeMap = {
    lg: {
      width: 28,
      height: 28,
    },
    default: {
      width: 24,
      height: 24,
    },
    sm: {
      width: 20,
      height: 20,
    }
  }
  return (
    <div 
      className={classNames('salic-settings-item color-checkbox', className, { 'dark': theme === 'dark' })} 
      style={{ 
        backgroundColor: color, 
        width: sizeMap[size].width,
        height: sizeMap[size].height,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      onClick={!disabled ? () => onChange?.(!checked) : () => {}}
    >
      {checked && <div className='checkbox-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </div>}
    </div>
  );
};
