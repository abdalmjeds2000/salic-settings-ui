import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const Placeholder: React.FC = () => {
  return (
    <div className='form-item'>
      <label htmlFor='placeholder' className='label'>Placeholder</label>
      <Field type='text' id='placeholder' name='props.placeholder' className='input' placeholder='Placeholder' />
      <ErrorMessage name='placeholder' component='p' className='error-msg' />
    </div>
  )
}