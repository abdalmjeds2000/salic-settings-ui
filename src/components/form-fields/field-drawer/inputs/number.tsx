import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const Number: React.FC<{ label: string; name: string }> = ({
  label, name
}) => {
  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>{label}</label>
      <Field type='number' min={1} id={name} name={name} required className='input' placeholder={`Enter ${label}`} />
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}