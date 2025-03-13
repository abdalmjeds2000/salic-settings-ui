import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const AllowCustomValue: React.FC = () => {
  return (
    <div className='form-item'>
      <Field type='checkbox' id='allowCustomValue' name='props.allowCustomValue' />
      <label htmlFor='allowCustomValue' className='label'>Allow Add Options</label>
      <ErrorMessage name='allowCustomValue' component='p' className='error-msg' />
    </div>
  )
}