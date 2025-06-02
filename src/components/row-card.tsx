import * as React from 'react';
import classNames from 'classnames';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useSettingsConfig } from '../ConfigProvider';

type RowCardProps = React.PropsWithChildren<{
  icon?: React.ReactNode;
  iconBgColor?: string;
  title: string;
  description?: string | React.ReactNode;
  extra?: React.ReactNode;
  collapsable?: boolean;
  collapsedDefaultValue?: boolean;
  alwaysOpen?: boolean; 
  className?: string;
  style?: React.CSSProperties;
}>

export const RowCard = ({
  icon, iconBgColor,
  title, description,
  extra,
  collapsable,
  collapsedDefaultValue,
  alwaysOpen = false, 
  className, style,
  children
}: RowCardProps) => {
  const [open, setOpen] = React.useState<boolean>(!!collapsedDefaultValue);
  const { theme } = useSettingsConfig();

  const doCollapse = () => {
    if (collapsable && !alwaysOpen) {
      setOpen(!open);
    }
  };

  const isOpen = alwaysOpen || open; 

  return (
    <div className={classNames('salic-settings-item row-card', className, { 'dark': theme === 'dark' })} style={style}>
      <div className='main-content'>
        <div className='row'>
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
            <div className='desktop-extra'>{extra}</div>
            {collapsable && <span className='collapse-icon' style={{ cursor: 'pointer' }} onClick={doCollapse}>
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </span>}
          </div>
        </div>
        <div className='mobile-extra'>{extra}</div>
      </div>
      {(collapsable && isOpen) && <div className='expand-content'>
        {children}
      </div>}
    </div>
  );
};
