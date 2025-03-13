import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { inputSizes } from '../../../../utils/form-builder'

export const Size: React.FC = () => {
  return (
    <div className='form-item'>
      <label htmlFor='size' className='label'>Size</label>
      <Field as='select' id='size' name='props.size' className='input' placeholder='Input Size'>
        {inputSizes.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
      </Field>
      <ErrorMessage name='size' component='p' className='error-msg' />
    </div>
  )
}