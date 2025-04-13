import { ErrorMessage, Form, Formik, FormikProps } from 'formik'
import React, { useEffect } from 'react'
import { doFormikValidation, initialValues, inputsTypes, inputType } from '../../../utils/form-builder'
import { FormField } from '../../../types'
import { useDrawerContext } from '.'
import  * as Fields from './fields';
import InputType from './inputs/input-type'

const fieldsMapping = (isList?: boolean): { [K in inputType]: { master: React.ReactNode; extra?: React.ReactNode; } } => {  
  return {
    text: {
      master: <Fields.Text list={isList} />,
    },
    textarea: {
      master: <Fields.Textarea list={isList} />
    },
    email: {
      master: <Fields.Text list={isList} />
    }, // same as text, just set type = email in rules
    password: {
      master: <Fields.Password list={isList} />
    },
    number: {
      master: <Fields.Number list={isList} />
    },
    select: {
      master: <Fields.Select list={isList} />,
      extra: <Fields.Select.Extra list={isList} />
    },
    multiSelect: {
      master: <Fields.MultiSelect list={isList} />,
      extra: <Fields.MultiSelect.Extra list={isList} />,
    },
    lookupSelect: {
      master: <Fields.LookupSelect list={isList} />
    },
    radio: {
      master: <Fields.Radio list={isList} />,
      extra: <Fields.Radio.Extra list={isList} />
    },
    radiobuttons: {
      master: <Fields.RadioButtons list={isList} />,
      extra: <Fields.RadioButtons.Extra list={isList} />
    },
    checkbox: {
      master: <Fields.Checkbox list={isList} />
    },
    switch: {
      master: <Fields.Switch list={isList} />
    },
    date: {
      master: <Fields.Date list={isList} />
    },
    time: {
      master: <Fields.Time list={isList} />
    },
    datetime: {
      master: <Fields.DateTime list={isList} />
    },
    daterange: {
      master: <Fields.DateRange list={isList} />
    },
    timerange: {
      master: <Fields.TimeRange list={isList} />
    },
    daterangetime: {
      master: <Fields.DateTimeRange list={isList} />
    },
    uploadManually: {
      master: <Fields.Attachments list={isList} />
    },
    list: {
      master: <Fields.List />
    }
    // ...
  }
};

type activeChildType = { index: number; data: any; } | null;

type ContextType = {  
  form: FormikProps<FormField>;
  setForm: (f: FormikProps<FormField>) => void;
  open2: boolean; setOpen2: (o: boolean) => void;
  type: inputType; setType: (t: inputType) => void;
  activeChild: activeChildType; setActiveChild: (v: activeChildType) => void;
  haveExtra: boolean;
  haveChildExtra: boolean;
};  

const Context = React.createContext<ContextType>({} as ContextType);  


type Props = {
  width?: number | string;
  secondDrawerWidth?: number | string;
  initValues?: FormField;
  onSubmit?: (values: any) => void;
  submitButtonText: string
}

const AddFieldForm: React.FC<Props> = ({
   width, secondDrawerWidth, onSubmit, initValues, submitButtonText
}) => {
  const { setOpen } = useDrawerContext();
  const [form, setForm] = React.useState<FormikProps<FormField>>(null as any);  
  const [open2, setOpen2] = React.useState<boolean>(false);  
  const [type, setType] = React.useState<inputType>(initValues?.type as inputType || 'time');
  const [activeChild, setActiveChild] = React.useState<activeChildType>(null);
  const activeChildType: inputType = form?.values.children?.[activeChild?.index as number]?.type as inputType;

  const close = () => {
    setOpen(false)
  }

  const close2 = () => {
    setOpen2(false)
  }

  const close3 = () => {
    setOpen2(false)
    setActiveChild(null)
  }
  
  const haveExtra: boolean = !!fieldsMapping()[type]?.extra;
  const haveChildExtra: boolean = !!fieldsMapping(true)[activeChildType]?.extra;

  /* close extra drawer whenever change field type */
  useEffect(() => {
    close2();
  }, [type])

  /* close extra drawer whenever change child field type */
  useEffect(() => {
    if(!haveChildExtra && open2) setOpen2(false)
  }, [activeChildType])
  
  return (
    <Context.Provider value={{ form, setForm, open2, setOpen2, type, setType, activeChild, setActiveChild, haveChildExtra, haveExtra }}>
      <Formik
        enableReinitialize
        initialValues={!!initValues ? initValues : (initialValues[type] || {}) as any}
        validate={doFormikValidation}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit?.(values);
          setSubmitting(false);
        }}
      >
        {(form) => {
          
          React.useEffect(() => {  
            setForm(form as any);
          }, [form.values]);

          return (
            <Form className='wrappers'>
              <div className='wrapper' style={{ width: width }}>
                <div className='header'>
                  <h1>Select Input Type</h1>
                  <button type='button' className='btn secondary-btn icon-btn' onClick={close}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/></svg>
                  </button>
                </div>
                <InputType 
                  value={type} 
                  onChange={(value) => setType(value as any)} 
                  disabled={open2 || !!activeChild}
                />
              </div>
              {/* main drawer */}
              <div className='wrapper' style={{ width: width }}>
                <div className='header'>
                  <h1>Input Settings</h1>
                </div>
                <div className='form-item'>
                  <div hidden={!haveExtra}>
                    <button type='button' onClick={() => setOpen2(true)} className='anchor-btn' style={{ fontSize: 'var(--text-sm)', marginTop: 4, float: 'right' }}>
                      <span>Configure Dropdown Menu Items</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    <ErrorMessage name='options' component='p' className='error-msg' />
                  </div>
                </div>
                {fieldsMapping()[type]?.master}
                <br /><br />
                <button type='submit' disabled={form.isSubmitting} className='btn primary-btn'>
                  {submitButtonText}
                </button>
              </div>

              {/* drawer for customize list children */}
              {!!activeChild && <div className='wrapper' style={{ width: width }}>
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
                    name={`children.${activeChild?.index}.type`} required 
                    className='input' 
                    value={form.values.children[activeChild?.index as number].type}
                    onChange={(e) => {
                      close2()
                      form.setFieldValue(`children.${activeChild?.index}.type`, e.target.value)
                      form.setFieldValue(`children.${activeChild?.index}`, initialValues?.[e.target.value as keyof typeof initialValues])
                    }}
                  >
                    {
                      inputsTypes
                      .filter(opt => opt.key !== 'list')
                      .map(opt => <option value={opt.key}>{opt.name}</option>)
                    }
                  </select>
                  <ErrorMessage name='type' component='p' className='error-msg' />
                  <div hidden={!haveChildExtra}>
                    <button type='button' onClick={() => setOpen2(true)} className='anchor-btn' style={{ fontSize: 'var(--text-sm)', marginTop: 4, float: 'right' }}>
                      <span>Configure Dropdown Menu Items</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    <ErrorMessage name='options' component='p' className='error-msg' />
                  </div>
                </div>
                {fieldsMapping(true)[activeChildType]?.master}
              </div>}


              {/* extra details drawer */}
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
                  !!activeChild 
                  ? fieldsMapping(true)[activeChildType]?.extra
                  : fieldsMapping()[type]?.extra
                }
              </div>}
            </Form>
          )
        }}
      </Formik>
    </Context.Provider>
  )
}

export default AddFieldForm

export const useAddFieldContext = () => React.useContext(Context);
