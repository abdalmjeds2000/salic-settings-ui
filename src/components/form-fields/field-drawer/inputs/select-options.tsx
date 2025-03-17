import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import { useDrawerContext } from '..';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

export const SelectOptions: React.FC = () => {
  const { form: { values, setFieldValue } } = useDrawerContext();

  return (
    <div className='form-item'>
      <label className='label'>Options</label>
      <FieldArray
        name='options'
        render={arrayHelpers => (
          <div className='select-options'>
            <div className='options'>
              {
                (values?.options || []).map((option, index) => (
                  <div key={option.id} className='option'>
                    <Field
                      name={`options.${index}.value`}
                      className='input'
                      placeholder={`Option ${index+1}`}
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newValue = e.target.value;
                        setFieldValue(`options.${index}.value`, newValue);
                        setFieldValue(`options.${index}.label`, newValue);
                      }}
                    />
                    {(values?.options||[]).length > 1 && <button
                      type="button"
                      className='remove-icon-btn'
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
              className='btn default-btn'
              onClick={() => arrayHelpers.push({ id: uuidv4(), value: '', label: '' })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7v14"/></svg>
              <span>Add an option</span>
            </button>
          </div>
        )}
      />
      <ErrorMessage name='label' component='p' className='error-msg' />
    </div>
  );
};
