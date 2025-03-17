import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const Label: React.FC = () => {
  return (
    <div className='form-item'>
      <label htmlFor='label' className='label'>Name</label>
      <Field type='text' id='label' name='label' required className='input' placeholder='Name' />
      <ErrorMessage name='label' component='p' className='error-msg' />
    </div>
  )
}