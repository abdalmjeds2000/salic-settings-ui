import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import { useDrawerContext } from '..';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

export const SelectOptions: React.FC<{ isList?: boolean }> = ({ isList }) => {
  const { form: { values, setFieldValue } } = useDrawerContext();
  const { childActive } = useDrawerContext()
  const name = `${isList?`children.${childActive?.index}.`:''}options`;
  const value = (isList ? values.children?.[childActive?.index]?.options : values?.options) || [];

  return (
    <div className='form-item'>
      <label className='label'>Options</label>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <div className='select-options'>
            <div className='options'>
              {
                value.map((option, index) => (
                  <div key={option.id} className='option'>
                    <Field
                      name={`${name}.${index}.value`}
                      className='input'
                      placeholder={`Option ${index+1}`}
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = e.target.value;
                        setFieldValue(`${name}.${index}.value`, newValue);
                        setFieldValue(`${name}.${index}.label`, newValue);
                      }}
                    />
                    {value.length > 1 && <button
                      type="button"
                      className='btn danger-btn icon-btn'
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"/>
                      </svg>
                    </button>}
                  </div>
                ))
              }
            </div>
            <button
              type="button"
              className='btn secondary-btn'
              onClick={() => arrayHelpers.push({ id: uuidv4(), value: '', label: '' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7v14"/></svg>
              <span>Add an option</span>
            </button>
          </div>
        )}
      />
      <ErrorMessage name='options' component='p' className='error-msg' />
    </div>
  );
};
