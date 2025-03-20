import { Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..';

export const DisabledBeforeToday: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}props.disabledBeforeToday`;

  return (
    <div className='checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id={name} name={name} />
        <label htmlFor={name} className='checkbox-label' />
      </div>
      <label htmlFor={name} className='label'>Disable Before Today</label>
    </div>
  )
}