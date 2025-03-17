import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const DateFormats: React.FC<{ options: { value: string; label: string }[] }> = ({ 
  options
 }) => {
  return (
    <div className='form-item'>
      <label htmlFor='format' className='label'>Format</label>
      <Field as='select' id='format' name='props.format' className='input' placeholder='Date Format'>
        {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
      </Field>
      <ErrorMessage name='format' component='p' className='error-msg' />
    </div>
  )
}