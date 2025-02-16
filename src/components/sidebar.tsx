import * as React from 'react';
import classNames from 'classnames';

export type SidebarItem = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}
export type SidebarProps = {
  title?: string | React.ReactNode;
  beforeTitle?: React.ReactNode | string;
  afterTitle?: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  items: SidebarItem[];
}


export const Sidebar = ({
  title,
  items,
  beforeTitle, afterTitle,
  className, style,
}: SidebarProps) => {

  return (
    <div className={classNames('salic-settings-item sidebar', className)} style={style}>
      <div className='header'>
        <div>
          {beforeTitle}
          <h2>{title || "Settings"}</h2>
        </div>
        {afterTitle}
      </div>
      <ul className='items'>
        {
          items.map((item: SidebarItem) => {
            return (
              <li className={classNames('item', { 'active': item.selected })} onClick={item?.onClick}>
                {item.label}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};