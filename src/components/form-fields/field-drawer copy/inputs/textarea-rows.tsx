import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { useAddFieldContext } from '../add-field-form';

export const TextareaRows: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.rows`;

  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Number Of Lines</label>
      <Field 
        type='number' id={name} name={name} 
        required 
        className='input' 
        placeholder='Enter Number Of Lines'
        min={1} max={10}
      />
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}