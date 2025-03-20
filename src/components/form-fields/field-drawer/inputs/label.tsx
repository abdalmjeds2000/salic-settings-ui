import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..'


export const Label: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}label`;
  
  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Name</label>
      <Field type='text' id={name} name={name} required className='input' placeholder='Name' />
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}