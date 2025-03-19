import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const Number: React.FC<{ label: string; name: string; props?: any }> = ({
  label, name, props = {}
}) => {
  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>{label}</label>
      <Field 
        type='number' id={name} name={name} 
        required 
        className='input' 
        placeholder={`Enter ${label}`} 
        {...props}
      />
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}