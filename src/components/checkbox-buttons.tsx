import * as React from 'react';
import classNames from 'classnames';
import { useSettingsConfig } from '../ConfigProvider';

export type CheckboxButtonsProps = {
  items: { key: string|number; label: React.ReactNode|string; style?: React.CSSProperties }[];
  activeKey: string|number|undefined|null;
  onChange: (key: string|number|undefined|null) => void;
  size?: 'sm' | 'default' | 'lg';
  readOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const CheckboxButtons = ({
  items, activeKey, onChange,
  size = 'default',
  readOnly = false,
  className, style,
  onClick
}: CheckboxButtonsProps) => {
  const { theme } = useSettingsConfig()

  return (
    <div className={classNames('salic-settings-item checkbox-buttons', size, className, { 'dark': theme === 'dark' })} style={style} onClick={onClick}>
      {
        items.map((item) => {
          return (
            <div 
              key={item.key}
              className={classNames('item', { 'active': item.key === activeKey })}
              style={item.style}
              onClick={() => {
                if (!readOnly) {
                  onChange(item.key);
                }
              }}
            >
              {item.label}
            </div>
          )
        })
      }
    </div>
  );
};