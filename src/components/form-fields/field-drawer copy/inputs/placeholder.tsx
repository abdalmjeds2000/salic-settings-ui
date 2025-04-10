import { Field } from 'formik'
import React from 'react'
import { useAddFieldContext } from '../add-field-form';

type Props = {
  isList?: boolean;
}

export const Placeholder: React.FC<Props> = ({ isList }) => {
  const { activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.placeholder`;

  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Placeholder</label>
      <Field type='text' id={name} name={name} className='input' placeholder='Placeholder' />
    </div>
  )
}