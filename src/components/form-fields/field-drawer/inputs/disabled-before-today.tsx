import { Field } from 'formik'
import React from 'react'

export const DisabledBeforeToday: React.FC = () => {
  return (
    <div className='checkbox-field'>
      <div className='checkbox'>
        <Field type='checkbox' id='disabledBeforeToday' name='props.disabledBeforeToday' />
        <label htmlFor='disabledBeforeToday' className='checkbox-label' />
      </div>
      <label htmlFor='disabledBeforeToday' className='label'>Disable Before Today</label>
    </div>
  )
}