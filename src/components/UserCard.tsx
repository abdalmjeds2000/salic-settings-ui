import * as React from 'react';
import { PropsWithChildren } from 'react';

type UserCardProps = PropsWithChildren<{
  name: string;
  jobTitle: string;
  imageUrl: string;
  role?: string;
}>;

export const UserCard = ({
  name,
  jobTitle,
  imageUrl,
  role
}: UserCardProps) => {

  return (
    <div className='bg-white rounded-lg border hover:border-secondary-700 flex items-center gap-4 p-4'>
      <div className='rounded-full w-16 h-16 overflow-hidden'>
        <img src={imageUrl} alt={name} className='object-fill' />
      </div>
      <div>
        <h3 className='text-sm font-semibold text-primary-700'>{name}</h3>
        <p className='text-xs text-grayscale-500'>{jobTitle}</p>
        {!!role && <p className='text-xs text-secondary-700'>{role}</p>}
      </div>
    </div>
  );
};