import * as React from 'react';
import classNames from 'classnames';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const RowCard = ({
  icon, iconBgColor,
  title, description,
  extra,
  collapsable, collapsedDefaultValue,
  className, style,
  children
}: RowCardProps) => {
  const [open, setOpen] = React.useState<boolean>(!!collapsedDefaultValue);

  return (
    <div className={classNames('salic-settings-item row-card', className)} style={style}>
      <div className='main-content' style={{ cursor: collapsable ? 'pointer' : 'default' }} onClick={collapsable ? () => setOpen(!open) : undefined}>
        <div className='icon-container' style={{ backgroundColor: iconBgColor }}>
          {icon}
        </div>
        <div className='info'>
          <h3>{title}</h3>
          <p className='description'>{description}</p>
        </div>
        <div className='extra'>
          {extra}
          <span className='collapse-icon'>
            {(collapsable && open) && <ChevronDown />}
            {(collapsable && !open) && <ChevronRight />}
          </span>
        </div>
      </div>
      {(collapsable && open) && <div className='expand-content'>
        {children}
      </div>}
    </div>
  );
};