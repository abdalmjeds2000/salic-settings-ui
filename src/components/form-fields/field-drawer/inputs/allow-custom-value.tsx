import { Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..';

export const AllowCustomValue: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}props.allowCustomValue`;

  return (
    <div className='checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id={name} name={name} />
        <label htmlFor={name} className='checkbox-label' />
      </div>
      <label htmlFor={name} className='label'>Allow Add Options</label>
    </div>
  )
}