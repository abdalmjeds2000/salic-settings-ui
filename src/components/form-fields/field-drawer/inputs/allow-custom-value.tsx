import { Field } from 'formik'
import React from 'react'

export const AllowCustomValue: React.FC = () => {
  return (
    <div className='form-item checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id='allowCustomValue' name='props.allowCustomValue' />
        <label htmlFor='allowCustomValue' className='checkbox-label' />
      </div>
      <label htmlFor='allowCustomValue' className='label'>Allow Add Options</label>
    </div>
  )
}