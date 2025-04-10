import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { inputSizes } from '../../../../utils/form-builder'
import { useAddFieldContext } from '../add-field-form';

export const Size: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;

  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Size</label>
      <Field as='select' id={name} name={name} className='input' placeholder='Input Size'>
        {inputSizes.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
      </Field>
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}