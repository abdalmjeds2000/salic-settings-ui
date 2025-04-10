import React from 'react'
import inputsIcons from '../../../../utils/fields-icons'
import classNames from 'classnames';
import { inputType } from '../../../../utils/form-builder';

type Props = {
  value: inputType;
  onChange?: (value: inputType) => void;
  disabled?: boolean;
}

type BlockType = {
  title: string,
  items: { key: inputType, name: string, icon: React.ReactNode }[]
}
const InputType = (props: Props) => {
  
  const info: BlockType[] = [
    {
      title: 'Text Elements',
      items: [
        { key: 'text', name: 'Text', icon: inputsIcons['text'] },
        { key: 'textarea', name: 'Text Area', icon: inputsIcons['textarea'] },
        { key: 'email', name: 'Email', icon: inputsIcons['email'] },
        { key: 'password', name: 'Password', icon: inputsIcons['password'] },
        { key: 'number', name: 'Number', icon: inputsIcons['number'] },
      ]
    },
    {
      title: 'Select Elements',
      items: [
        { key: 'checkbox', name: 'Checkbox', icon: inputsIcons['checkbox'] },
        { key: 'switch', name: 'Switch', icon: inputsIcons['switch'] },
        { key: 'radio', name: 'Radio Buttons', icon: inputsIcons['radio'] },
        { key: 'radiobuttons', name: 'Buttons', icon: inputsIcons['radiobuttons'] },
        { key: 'select', name: 'Select', icon: inputsIcons['select'] },
        { key: 'list', name: 'List', icon: inputsIcons['list'] },
      ]
    },
    {
      title: 'Date & Time',
      items: [
        { key: 'date', name: 'Date', icon: inputsIcons['date'] },
        { key: 'daterange', name: 'Date Range', icon: inputsIcons['daterange'] },
        { key: 'time', name: 'Time', icon: inputsIcons['time'] },
        { key: 'timerange', name: 'Time Range', icon: inputsIcons['timerange'] },
        { key: 'datetime', name: 'Date Time', icon: inputsIcons['datetime'] },
        { key: 'daterangetime', name: 'Date Time Range', icon: inputsIcons['daterangetime'] },
      ]
    },
    {
      title: 'Attachments',
      items: [
        { key: 'uploadManually', name: 'Attachments', icon: inputsIcons['uploadManually'] }
      ]
    }
  ]

  return (
    <div className='input-type-field'>
      {info.map(b => (
        <div key={b.title} className='block'>
          <p className='title'>{b.title}</p>
          <div className='block-list'>
            {
              b.items.map(itm => (
                <div key={itm.key} className={classNames('item', { 'disabled': props.disabled }, { 'active': props.value === itm.key })} onClick={() => props.disabled ? {} : props?.onChange?.(itm.key)}>
                  <span className='icon'>{itm.icon}</span>
                  <p className='name'>{itm.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default InputType
