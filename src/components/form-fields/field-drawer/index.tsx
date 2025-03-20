import React, { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikProps } from 'formik';
import { FormField } from '../../../types';
import { doFormikValidation, initialValues, inputsTypes, inputType } from '../../../utils/form-builder';
import * as Fields from './fields';


type ContextType = {  
  form: FormikProps<FormField>;
  setForm: (f: FormikProps<FormField>) => void;
  open: boolean; setOpen: (o: boolean) => void;
  open2: boolean; setOpen2: (o: boolean) => void;
  childActive: any; setChildActive: (o: any) => void;
  type: inputType; 
  setType: (t: inputType) => void;
};  

const Context = React.createContext<ContextType>({} as ContextType);  

export type FieldDrawerProps = {
  open: boolean;
  setOpen: (o: boolean) => void;
  width: number | string;
  secondDrawerWidth: number | string;
}

export const FieldDrawer: React.FC<FieldDrawerProps> = ({
  open, setOpen, width = 400, secondDrawerWidth = 350
}) => {
  const [form, setForm] = React.useState<FormikProps<FormField>>(null as any);  
  const [open2, setOpen2] = React.useState<boolean>(false);  
  const [childActive, setChildActive] = React.useState<any>(null); // in case type = list, and user want to config input settings  
  const [type, setType] = React.useState<inputType>('text');

  const close = () => {
    setOpen(false)
  }

  const close2 = () => {
    setOpen2(false)
  }

  const close3 = () => {
    setChildActive(null)
  }

  const fieldsMapping: { [K in inputType]?: {
    master: React.ReactNode;
    extra?: React.ReactNode;
  } } = {  
    text: {
      master: <Fields.Text />,
    },
    textarea: {
      master: <Fields.Textarea />
    },
    email: {
      master: <Fields.Text />
    }, // same as text, just set type = email in rules
    password: {
      master: <Fields.Password />
    },
    number: {
      master: <Fields.Number />
    },
    select: {
      master: <Fields.Select />,
      extra: <Fields.Select.Extra />
    },
    multiSelect: {
      master: <Fields.MultiSelect />,
      extra: <Fields.MultiSelect.Extra />,
    },
    lookupSelect: {
      master: <Fields.LookupSelect />
    },
    radio: {
      master: <Fields.Radio />,
      extra: <Fields.Radio.Extra />
    },
    radiobuttons: {
      master: <Fields.RadioButtons />,
      extra: <Fields.RadioButtons.Extra />
    },
    checkbox: {
      master: <Fields.Checkbox />
    },
    switch: {
      master: <Fields.Checkbox />
    }, // same as checkbox
    date: {
      master: <Fields.Date />
    },
    time: {
      master: <Fields.Time />
    },
    datetime: {
      master: <Fields.DateTime />
    },
    daterange: {
      master: <Fields.DateRange />
    },
    timerange: {
      master: <Fields.TimeRange />
    },
    daterangetime: {
      master: <Fields.DateTimeRange />
    },
    uploadManually: {
      master: <Fields.Attachments />
    },
    list: {
      master: <Fields.List />
    }
    // ...
  };

  const listFieldsMapping: { [K in inputType]?: {
    master: React.ReactNode;
    extra?: React.ReactNode;
  } } = {  
    text: {
      master: <Fields.Text list />,
    },
    textarea: {
      master: <Fields.Textarea list />
    },
    email: {
      master: <Fields.Text list />
    }, // same as text, just set type = email in rules
    password: {
      master: <Fields.Password list />
    },
    number: {
      master: <Fields.Number list />
    },
    select: {
      master: <Fields.Select list />,
      extra: <Fields.Select.Extra list />
    },
    multiSelect: {
      master: <Fields.MultiSelect list />,
      extra: <Fields.MultiSelect.Extra list />,
    },
    lookupSelect: {
      master: <Fields.LookupSelect list />
    },
    radio: {
      master: <Fields.Radio list />,
      extra: <Fields.Radio.Extra list />
    },
    radiobuttons: {
      master: <Fields.RadioButtons list />,
      extra: <Fields.RadioButtons.Extra list />
    },
    checkbox: {
      master: <Fields.Checkbox list />
    },
    switch: {
      master: <Fields.Checkbox list />
    }, // same as checkbox
    date: {
      master: <Fields.Date list />
    },
    time: {
      master: <Fields.Time list />
    },
    datetime: {
      master: <Fields.DateTime list />
    },
    daterange: {
      master: <Fields.DateRange list />
    },
    timerange: {
      master: <Fields.TimeRange list />
    },
    daterangetime: {
      master: <Fields.DateTimeRange list />
    },
    uploadManually: {
      master: <Fields.Attachments list />
    },
    list: {
      master: <Fields.List list />
    }
    // ...
  };

  const haveExtra: boolean = !!fieldsMapping[type]?.extra;
  const childHaveExtra: boolean = !!listFieldsMapping[form?.values?.children?.[childActive?.index]?.type as keyof typeof listFieldsMapping]?.extra;

  useEffect(() => {
    if(open2) {
      const shouldClose = haveExtra;
      setOpen2(shouldClose);
    }
  }, [type])
  if(!open) return null
  return (
    <Context.Provider value={{ form, setForm, open, setOpen, open2, setOpen2, type, setType, childActive, setChildActive }}>
      <Formik
        enableReinitialize
        initialValues={(initialValues[type] || {}) as any}
        validate={doFormikValidation}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false);
        }}
      >
        {(form) => {
          React.useEffect(() => {  
            setForm(form as any);
            console.log(form.values);
            
          }, [form.values]);
          return (
            <Form name='master'>
              <div className='salic-settings-item field-drawer'>
                {/* Mask for blur */}
                <div className='mask' />

                {/* Main Wrapper */}
                <div className='wrapper' style={{ width: width }}>
                  <div className='header'>
                    <h1>Input Settings</h1>
                    <button type='button' className='btn secondary-btn icon-btn' onClick={close}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/></svg>
                    </button>
                  </div>
                  <div className='form-item'>
                    <label htmlFor='type' className='label'>Field Type</label>
                    <select id='type' className='input' value={type} onChange={(e) => setType(e.target.value as any)}>
                      {inputsTypes.map(opt => <option value={opt.key}>{opt.name}</option>)}
                    </select>
                    <div hidden={!haveExtra}>
                      <button type='button' onClick={() => setOpen2(true)} className='anchor-btn' style={{ fontSize: 'var(--text-sm)', marginTop: 4, float: 'right' }}>
                        <span>Configure Dropdown Menu Items</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                      <ErrorMessage name='options' component='p' className='error-msg' />
                    </div>
                  </div>
                  {fieldsMapping[type]?.master}
                  <br /><br />
                  <button type='submit' disabled={form.isSubmitting} className='btn primary-btn'>
                    Add Field
                  </button>
                </div>

                {/* Wrapper to add list field children */}
                {childActive && <div className='wrapper' style={{ width: secondDrawerWidth }}>
                  <div className='header'>
                    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                      <button type='button' onClick={close3} className='btn icon-btn' style={{ color: 'var(--primary-700) '}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 12H3m8 6 6-6-6-6m10-1v14"/></svg>
                      </button>
                      <h1>Child Input Settings</h1>
                    </div>
                  </div>
                  <div className='form-item'>
                    <label htmlFor='child-type' className='label'>Type</label>
                    <select 
                      id='child-type' 
                      name={`children.${childActive?.index}.type`} required 
                      className='input' 
                      value={form.values.children[childActive?.index].type}
                      onChange={(e) => {
                        form.setFieldValue(`children.${childActive?.index}.type`, e.target.value)
                        form.setFieldValue(`children.${childActive?.index}`, initialValues?.[e.target.value as keyof typeof initialValues])
                      }}
                    >
                      {inputsTypes.map(opt => <option value={opt.key}>{opt.name}</option>)}
                    </select>
                    <ErrorMessage name='type' component='p' className='error-msg' />
                  </div>
                  <div hidden={!childHaveExtra}>
                    <button type='button' onClick={() => setOpen2(true)} className='anchor-btn' style={{ fontSize: 'var(--text-sm)', marginTop: 4, float: 'right' }}>
                      <span>Configure Dropdown Menu Items</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    <ErrorMessage name='options' component='p' className='error-msg' />
                  </div>
                  {listFieldsMapping[(form.values?.children||[])?.[childActive.index]?.type as keyof typeof fieldsMapping]?.master}
                </div>}

                {/* Wrapper for extra details like options for select field */}
                {open2 && <div className='wrapper' style={{ width: secondDrawerWidth }}>
                  <div className='header'>
                    <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                      <button type='button' onClick={close2} className='btn icon-btn' style={{ color: 'var(--primary-700) '}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 12H3m8 6 6-6-6-6m10-1v14"/></svg>
                      </button>
                      <h1>Dropdown Menu Items</h1>
                    </div>
                  </div>
                  {
                    !!childActive 
                    ? listFieldsMapping[(form.values?.children||[]).find((field: any)=>field.id == childActive.data.id)?.type as keyof typeof fieldsMapping]?.extra
                    : fieldsMapping[type]?.extra
                  }
                </div>}
              </div>
            </Form>
          )
        }}
      </Formik>
    </Context.Provider>
  )
}

export const useDrawerContext = () => React.useContext(Context);