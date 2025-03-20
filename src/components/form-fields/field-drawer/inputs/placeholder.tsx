import { Field } from 'formik'
import React from 'react'
import { useDrawerContext } from '..';

type Props = {
  isRange?: boolean;
  isList?: boolean;
}

export const Placeholder: React.FC<Props> = ({ isRange, isList }) => {
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}props.placeholder`;

  return (
    <div className='form-item'>
      <label htmlFor={name} className='label'>Placeholder</label>
      {
        isRange
        ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Field type='text' id={name} name={name} className='input' placeholder='From Placeholder' />
            <Field type='text' id={name} name={name} className='input' placeholder='To Placeholder' />
          </div>
        )
        : <Field type='text' id={name} name={name} className='input' placeholder='Placeholder' />
      }
    </div>
  )
}