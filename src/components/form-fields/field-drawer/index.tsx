import React from 'react';
import AddFieldForm from './add-field-form';
import { FormField } from '../../../types';


type ContextType = {  
  open: boolean; 
  setOpen: (o: boolean) => void;
};  

const Context = React.createContext<ContextType>({} as ContextType);  

export type FieldDrawerProps = {
  open: boolean;
  setOpen: (o: boolean) => void;
  initValues?: FormField;
  submitButtonText?: string;
  width?: number | string;
  secondDrawerWidth?: number | string;
  onSubmit?: (values: any) => void
}

export const FieldDrawer: React.FC<FieldDrawerProps> = ({
  open, setOpen, width = 400, initValues, submitButtonText = 'Add Field', secondDrawerWidth = 350, onSubmit
}) => {

  if(!open) return null
  return (
    <Context.Provider value={{ open, setOpen }}>
      <div className='salic-settings-item field-drawer'>
        {/* Mask for blur */}
        <div className='mask' />

        <AddFieldForm
          width={width} 
          initValues={initValues}
          secondDrawerWidth={secondDrawerWidth}
          submitButtonText={submitButtonText}
          onSubmit={values => onSubmit?.(values)}
        />
      </div>
    </Context.Provider>
  )
}

export const useDrawerContext = () => React.useContext(Context);