import * as React from 'react';
import classNames from 'classnames';

export const UserCard = ({
  user,
  role,
  className,
  style,
  onClick
}: UserCardProps) => {

  const onFailedImageLoad = (e: any) => {
    e.target.src = "/images/avatar.png";
  }

  return (
    <div className={classNames('salic-settings-item user-card', { 'clickable': !!onClick }, className)} style={style} onClick={onClick}>
      <div className='photo-container'>
        <img src={`https://salicapi.com/api/user/photo?id=${user.email}`} alt={user.name} onError={onFailedImageLoad} />
      </div>
      <div>
        <h3>{user.name}</h3>
        <p className='job-title'>{user.title}</p>
        {!!role && <p className='role'>{role}</p>}
      </div>
    </div>
  );
};