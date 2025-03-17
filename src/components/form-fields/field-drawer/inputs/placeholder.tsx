import { Field } from 'formik'
import React from 'react'

export const Placeholder: React.FC<{ isRange?: boolean }> = ({
  isRange
}) => {
  return (
    <div className='form-item'>
      <label htmlFor='from-placeholder' className='label'>Placeholder</label>
      {
        isRange
        ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Field type='text' id='from-placeholder' name='props.placeholder[0]' className='input' placeholder='From Placeholder' />
            <Field type='text' id='to-placeholder' name='props.placeholder[1]' className='input' placeholder='To Placeholder' />
          </div>
        )
        : <Field type='text' id='placeholder' name='props.placeholder' className='input' placeholder='Placeholder' />
      }
    </div>
  )
}