import { Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..';

export const IsRequired: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}rules.0.required`;

  return (
    <div className='checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id={name} name={name} />
        <label htmlFor={name} className='checkbox-label' />
      </div>
      <label htmlFor={name} className='label'>Is Required</label>
    </div>
  )
}