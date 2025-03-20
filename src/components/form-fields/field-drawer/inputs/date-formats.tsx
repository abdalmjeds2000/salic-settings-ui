import { Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..';

export const DateFormats: React.FC<{ options: { value: string; label: string }[], isList?: boolean }> = ({ 
  options, isList
 }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}props.format`;
  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Format</label>
      <Field as='select' id={name} name={name} className='input' required placeholder='Date Format'>
        {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
      </Field>
    </div>
  )
}