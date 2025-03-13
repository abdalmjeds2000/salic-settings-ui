import { ErrorMessage, Field, FieldArray } from 'formik'
import React from 'react'
import { useDrawerContext } from '..'

export const SelectOptions: React.FC = () => {
  const { form: { values } } = useDrawerContext()

  return (
    <div className='form-item'>
      <label className='label'>Options</label>
      <FieldArray
        name='options'
        render={arrayHelpers => (
          <div>
            {
              (values?.options || []).map(({ value, label }, index) => (
                <Field key={index} name={`options.${index}.value`} className='input' />
              ))
            }
            <button type="button" className='anchor-btn' onClick={() => arrayHelpers.push('')}>
              Add an option
            </button>
          </div>
        )}
      />
      <ErrorMessage name='label' component='p' className='error-msg' />
    </div>
  )
}