import * as React from 'react';
import classNames from 'classnames';
import { useSettingsConfig } from '../ConfigProvider';

export type GroupCardProps = {
  name: string;
  description?: string | React.ReactNode;
  theme?: { primary: string; secondary: string; };
  direction?: 'vertical' | 'horizontal'
  extra?: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const GroupCard = ({
  name,
  description,
  theme = { primary: '#999', secondary: '#eee' },
  direction = 'vertical',
  className,
  style,
  extra,
  onClick
}: GroupCardProps) => {
  const nameSlices = name.toUpperCase().split(' ').filter(Boolean);
  const shortName = nameSlices.length === 1 ? name.slice(0, 2) : nameSlices[0][0] + nameSlices[1][0];
  const config = useSettingsConfig()
  
  return (
    <div className={classNames('salic-settings-item group-card', direction, { 'clickable': !!onClick }, className, { 'dark': config.theme === 'dark' })} style={style} onClick={onClick}>
      <div className='avatar' style={{ color: theme.primary, backgroundColor: theme.secondary }}>
        <span>{shortName}</span>
      </div>
      <div className='info'>
        <h3>{name}</h3>
        {!!description && <p>{description}</p>}
      </div>
      {extra}
    </div>
  );
};