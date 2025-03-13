import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const IsRequired: React.FC = () => {
  return (
    <div className='form-item'>
      <Field type='checkbox' id='isRequired' name='rules[0].required' />
      <label htmlFor='isRequired' className='label'>Is Required</label>
      <ErrorMessage name='isRequired' component='p' className='error-msg' />
    </div>
  )
}