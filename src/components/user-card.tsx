import * as React from 'react';
import classNames from 'classnames';
import { Employee } from '../types';
import { useSettingsConfig } from '../ConfigProvider';

export type UserCardProps = {
  user: Employee;
  customDescription?: React.ReactNode | string;
  extra?: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const UserCard = ({
  user,
  customDescription,
  className,
  style,
  extra,
  onClick
}: UserCardProps) => {
  const { theme } = useSettingsConfig()

  const onFailedImageLoad = (e: any) => {
    e.target.src = "https://salicapi.com/File/avatar.png";
  }

  return (
    <div className={classNames('salic-settings-item user-card', { 'clickable': !!onClick }, className, { 'dark': theme === 'dark' })} style={style} onClick={onClick}>
      <div className='photo-container'>
        <img src={`https://salicapi.com/api/user/photo?id=${user.email}`} alt={user.name} onError={onFailedImageLoad} />
      </div>
      <div className='info'>
        <h3>{user.name}</h3>
        <p className='job-title'>{!!customDescription ? customDescription : user.title}</p>
      </div>
      {extra}
    </div>
  );
};