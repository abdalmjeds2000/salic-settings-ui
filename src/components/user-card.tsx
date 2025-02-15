import * as React from 'react';
import { PropsWithChildren } from 'react';
import classNames from 'classnames';

type UserCardProps = PropsWithChildren<{
  name: string;
  jobTitle: string;
  imageUrl: string;
  role?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}>;

export const UserCard = ({
  name,
  jobTitle,
  imageUrl,
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
        <img src={imageUrl} alt={name} onError={onFailedImageLoad} />
      </div>
      <div>
        <h3>{name}</h3>
        <p className='job-title'>{jobTitle}</p>
        {!!role && <p className='role'>{role}</p>}
      </div>
    </div>
  );
};