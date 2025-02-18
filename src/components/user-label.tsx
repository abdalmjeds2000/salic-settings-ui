import * as React from 'react';
import classNames from 'classnames';
import { Employee } from '../types';

export type UserLabelProps = {
  name: Employee["name"];
  email: Employee["email"];
  title: Employee["title"];
  size?: "lg" | "default" | "sm";
  className?: string;
  style?: React.CSSProperties;
}

export const UserLabel = ({
  name, email, title, size = 'default',
  className, style
}: UserLabelProps) => {

  const onFailedImageLoad = (e: any) => {
    e.target.src = "https://salicapi.com/File/avatar.png";
  }

  return (
    <div className={classNames('salic-settings-item user-label', size, className)} style={style}>
      <div className='photo-container'>
        <img src={`https://salicapi.com/api/user/photo?id=${email}`} alt={name} onError={onFailedImageLoad} />
      </div>
      <div className='info'>
        <h3>{name}</h3>
        <p className='job-title'>{title}</p>
      </div>
    </div>
  );
};