import { ErrorMessage, FieldArray } from 'formik';
import React from 'react';
import { useDrawerContext } from '..';
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import { initialValues } from '../../../../utils/form-builder';

export const ListFieldsRenderer: React.FC = () => {
  const { form: { values }, setChildActive } = useDrawerContext();

  const openSettings = (index: number, child: any) => {
    setChildActive({ index: index, data: child })
  }

  return (
    <div className='form-item'>
      <label className='label'>Children</label>
      <FieldArray
        name='children'
        render={arrayHelpers => (
          <div className=''>
            <div className=''>
              {
                (values?.children || []).map((child, index) => (
                  <div key={index} className='' style={{ background: '#f5f5f5', marginBottom: 6, padding: 6, display: 'flex' }}>
                    <div>
                      Child {index + 1}
                    </div>
                    <button
                      type="button"
                      className='btn secondary-btn icon-btn'
                      onClick={() => openSettings(index, child)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><circle cx="12" cy="12" r="4"/></svg>
                    </button>
                    {(values?.children||[]).length > 1 && <button
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
              type='button' className='btn secondary-btn'
              onClick={() => arrayHelpers.push({ id: uuidv4(), ...initialValues.select })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7v14"/></svg>
              <span>Add a child</span>
            </button>
          </div>
        )}
      />
      <ErrorMessage name='children' component='p' className='error-msg' />
    </div>
  );
};
