import * as React from 'react';
import classNames from 'classnames';
import { Employee } from '../types';

export type UserCardProps = {
  user: Employee;
  extra?: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const UserCard = ({
  user,
  className,
  style,
  extra,
  onClick
}: UserCardProps) => {

  const onFailedImageLoad = (e: any) => {
    e.target.src = "https://salicapi.com/File/avatar.png";
  }

  return (
    <div className={classNames('salic-settings-item user-card', { 'clickable': !!onClick }, className)} style={style} onClick={onClick}>
      <div className='photo-container'>
        <img src={`https://salicapi.com/api/user/photo?id=${user.email}`} alt={user.name} onError={onFailedImageLoad} />
      </div>
      <div className='info'>
        <h3>{user.name}</h3>
        <p className='job-title'>{user.title}</p>
      </div>
      {extra}
    </div>
  );
};