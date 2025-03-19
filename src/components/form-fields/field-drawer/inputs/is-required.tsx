import { Field } from 'formik'
import React from 'react'

export const IsRequired: React.FC = () => {
  return (
    <div className='checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id='isRequired' name='rules[0].required' />
        <label htmlFor='isRequired' className='checkbox-label' />
      </div>
      <label htmlFor='isRequired' className='label'>Is Required</label>
    </div>
  )
}