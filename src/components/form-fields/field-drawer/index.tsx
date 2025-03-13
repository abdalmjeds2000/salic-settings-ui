import React from 'react'
import FieldSettingsForm from './field-settings-form';
import { FormikProps } from 'formik';
import { FormField } from '../../../types';

type ContextType = {  
  form: FormikProps<FormField>;
  setForm: (f: FormikProps<FormField>) => void;
  open: boolean;
  setOpen: (o: boolean) => void;
};  

const Context = React.createContext<ContextType>({} as ContextType);  

export type FieldDrawerProps = {
  open: boolean;
  setOpen: (o: boolean) => void;
}

export const FieldDrawer: React.FC<FieldDrawerProps> = ({
  open, setOpen
}) => {
  const [form, setForm] = React.useState<FormikProps<FormField>>(null as any);  

  const close = () => {
    setOpen(false)
  }

  if(!open) return null
  return (
    <Context.Provider value={{ form, setForm, open, setOpen }}>
      <div className='salic-settings-item field-drawer'>
        <div className='mask' onClick={close}></div>
        <div className='wrapper'>
          <div className='header'>
            <h1>Input Settings</h1>
            <button type='button' onClick={close}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/></svg>
            </button>
          </div>
          <FieldSettingsForm />
        </div>
      </div>
    </Context.Provider>
  )
}

export const useDrawerContext = () => React.useContext(Context);