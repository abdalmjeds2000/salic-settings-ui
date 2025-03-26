import * as React from 'react';
import classNames from 'classnames';
import { ChevronDown, ChevronRight } from 'lucide-react';

type RowCardProps = React.PropsWithChildren<{
  icon?: React.ReactNode;
  iconBgColor?: string;
  title: string;
  description?: string | React.ReactNode;
  extra?: React.ReactNode;
  collapsable?: boolean;
  collapsedDefaultValue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>

export const RowCard = ({
  icon, iconBgColor,
  title, description,
  extra,
  collapsable, collapsedDefaultValue,
  className, style,
  children
}: RowCardProps) => {
  const [open, setOpen] = React.useState<boolean>(!!collapsedDefaultValue);

  const doCollapse = () => {
    collapsable ? setOpen(!open) : undefined
  }
  return (
    <div className={classNames('salic-settings-item row-card', className)} style={style}>
      <div className='main-content'>
        {!!icon && <div className='icon-container' style={{ backgroundColor: iconBgColor, cursor: collapsable ? 'pointer' : 'default' }} onClick={doCollapse}>
          {icon}
        </div>}
        <div className='info' style={{ cursor: collapsable ? 'pointer' : 'default' }} onClick={doCollapse}>
          <h3>{title}</h3>
          {
            typeof description === 'string' 
            ? <p className='description'>{description}</p>
            : description
          }
        </div>
        <div className='extra'>
          {extra}
          {collapsable && <span className='collapse-icon' style={{ cursor: collapsable ? 'pointer' : 'default' }} onClick={doCollapse}>
            {open && <ChevronDown size={20} />}
            {!open && <ChevronRight size={20} />}
          </span>}
        </div>
      </div>
      {(collapsable && open) && <div className='expand-content'>
        {children}
      </div>}
    </div>
  );
};