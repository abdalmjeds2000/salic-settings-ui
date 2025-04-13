import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { inputSizes, switchSizes } from '../../../../utils/form-builder'
import { useAddFieldContext } from '../add-field-form';
import classNames from 'classnames';
import { CheckboxButtons } from '../../../checkbox-buttons';

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


export const TextSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='default-size form-item'>
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

export const PasswordSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='default-size password-size form-item'>
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

export const TextareaSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='default-size textarea-size form-item'>
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

export const SelectSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='default-size select-size form-item'>
      <label className='label'>Field Size</label>
      {
        inputSizes.map(s => (
          <div key={s.value} className='item' onClick={() => setFieldValue(name, s.value)}>
            <p>{s.label}</p>
            <div className={classNames(s.value, { 'active': value === s.value })}>
              <div className='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div className='buttons' />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const NumberSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];
  return (
    <div className='default-size number-size form-item'>
      <label className='label'>Field Size</label>
      {
        inputSizes.map(s => (
          <div key={s.value} className='item' onClick={() => setFieldValue(name, s.value)}>
            <p>{s.label}</p>
            <div className={classNames(s.value, { 'active': value === s.value })}>
              <div className='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div className='buttons' />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export const SwitchSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];

  const icon = ({ w = 20, h = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="6" ry="6"/><circle cx="16" cy="12" r="2"/></svg>;
  return (
    <div className='form-item'>
      <label className='label'>Field Size</label>
      <CheckboxButtons
        items={switchSizes.map(s => {
          const icon_size = s.value == 'default' ? { w: 36, h: 28 } : s.value == 'small' ? { w: 24, h: 28 } : { w: 24, h: 28 }
          return { 
            key: s.value, 
            label: <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {icon(icon_size)}
              <span>{s.label}</span>
            </div>,
            style: { paddingLeft: 18, paddingRight: 24 },
          }}
      )}
        activeKey={value} 
        onChange={(v) => setFieldValue(name, v)} 
      />
    </div>
  )
}

export const RadioSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];

  const icon = ({ w = 20, h = 20 }) => <svg width={w} height={h} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="11" r="5" fill="currentcolor"/></svg>;
  return (
    <div className='form-item'>
      <label className='label'>Field Size</label>
      <CheckboxButtons
        items={inputSizes.map(s => {
          const icon_size = s.value == 'large' ? { w: 20, h: 28 } : s.value == 'middle' ? { w: 16, h: 28 } : { w: 12, h: 28 }
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

export const ButtonsSize: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];

  return (
    <div className='form-item'>
      <label className='label'>Field Size</label>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {
          inputSizes.map(s => (
            <div key={s.value}>
              <button 
                type='button' 
                onClick={() => setFieldValue(name, s.value)}
                className={`btn ${value === s.value ? 'primary-btn' : 'secondary-btn'} ${s.value == 'large' ? 'lg-btn' : s.value == 'small' ? 'sm-btn' : ''}`}
              >
                {s.label}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const DateSize: React.FC<{ isList?: boolean; pickerType?: 'date' | 'datetime' | 'time' }> = ({ isList, pickerType = 'date' }) => {
  const { form, activeChild } = useAddFieldContext()
  if(!form) return null
  const { values, setFieldValue } = form;
  const name = `${isList?`children.${activeChild?.index}.`:''}props.size`;
  const value = (isList ? values.children?.[activeChild?.index as number]?.props?.size : values?.props?.size) || [];

  const icon = ({ w = 20, h = 20 }) => 
    pickerType == 'date'
    ? <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H3m18 2.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22H12m4-20v4M8 2v4m6.5 13 2 2 4.5-4.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    : pickerType == 'time' ? <svg width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m14.5 19 2 2 4.5-4.5m.985-3.95Q22 12.276 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.435 4.337 9.858 9.739 9.997M12 6v6l3.738 1.87" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    : <svg width={w} height={h} viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H3m18 2.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22H12m4-20v4M8 2v4m6.5 13 2 2 4.5-4.5" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><g clip-path="url(#a)"><path fill="#fff" d="M9 13h14v14H9z"/><path d="M16 16.5V20l2.334 1.166m3.5-1.166a5.833 5.833 0 1 1-11.667 0 5.833 5.833 0 0 1 11.667 0" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="a"><path fill="#fff" d="M9 13h14v14H9z"/></clipPath></defs></svg>;

  return (
    <div className='default-size date-size form-item'>
      <label className='label'>Field Size</label>
      {
        inputSizes.map(s => (
          <div key={s.value} className='item' onClick={() => setFieldValue(name, s.value)}>
            <p>{s.label}</p>
            <div className={classNames(s.value, { 'active': value === s.value })}>
              <div className='checkbox'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span className='icon'>{icon(s.value == 'large' ? { w: 26, h: 26 } : s.value == 'small' ? { w: 18, h: 18 } : { w: 22, h: 22 })}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}