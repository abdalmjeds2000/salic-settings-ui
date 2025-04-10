import { Field } from 'formik'
import React from 'react'
import { useAddFieldContext } from '../add-field-form';

export const DisabledBeforeToday: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.disabledBeforeToday`;

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