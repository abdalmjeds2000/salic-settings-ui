import * as React from 'react';
import classNames from 'classnames';

export type CheckboxButtonsProps = {
  items: { key: string|number; label: React.ReactNode|string; }[];
  activeKey: string|number|undefined|null;
  onChange: (key: string|number|undefined|null) => void;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const CheckboxButtons = ({
  items, activeKey, onChange,
  size = 'default',
  className, style,
  onClick
}: CheckboxButtonsProps) => {
  return (
    <div className={classNames('salic-settings-item checkbox-buttons', size, className)} style={style} onClick={onClick}>
      {
        items.map((item: any) => {
          return (
            <div key={item.key} className={classNames('item', { 'active': item.key === activeKey })} onClick={() => onChange(item.key)}>
              {item.label}
            </div>
          )
        })
      }
    </div>
  );
};