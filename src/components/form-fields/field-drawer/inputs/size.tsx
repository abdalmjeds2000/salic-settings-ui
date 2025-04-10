import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { inputSizes } from '../../../../utils/form-builder'
import { useAddFieldContext } from '../add-field-form';
import classNames from 'classnames';
import { CheckboxButtons } from '../../../checkbox-buttons';
import inputsIcons from '../../../../utils/fields-icons'

export const Size: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;

  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Size</label>
      <Field as='select' id={name} name={name} className='input' placeholder='Input Size'>
        {inputSizes.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
      </Field>
      <ErrorMessage name={name} component='p' className='error-msg' />
    </div>
  )
}

export const TextareaSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form: { values, setFieldValue }, activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='textarea-size form-item'>
      <label className='label'>Field Size</label>
      {
        inputSizes.map(s => (
          <div key={s.value} className='item' onClick={() => setFieldValue(name, s.value)}>
            <p>{s.label}</p>
            <div className={classNames(s.value, { 'active': value === s.value })}>
              <div className='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const RadioSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form: { values, setFieldValue }, activeChild } = useAddFieldContext()
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];

  const icon = ({ w = 20, h = 20 }) => <svg width={w} height={h} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="11" r="5" fill="currentcolor"/></svg>;
  return (
    <div className='form-item'>
      <label className='label'>Field Size</label>
      <CheckboxButtons
        items={inputSizes.map(s => {
          const icon_size = s.value == 'large' ? { w: 18, h: 24 } : s.value == 'middle' ? { w: 15, h: 24 } : { w: 12, h: 24 }
          return { 
            key: s.value, 
            label: <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {icon(icon_size)}
              <span>{s.label}</span>
            </div>,
            style: { flex: '1' }
          }}
      )}
        activeKey={value} 
        onChange={(v) => setFieldValue(name, v)} 
      />
    </div>
  )
}