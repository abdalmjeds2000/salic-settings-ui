import React from 'react';
import AddFieldForm from './add-field-form';


type ContextType = {  
  open: boolean; 
  setOpen: (o: boolean) => void;
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

  if(!open) return null
  return (
    <Context.Provider value={{ open, setOpen }}>
      <div className='salic-settings-item field-drawer'>
        {/* Mask for blur */}
        <div className='mask' />

        <AddFieldForm
          width={width} 
          secondDrawerWidth={secondDrawerWidth}
          onSubmit={values => console.log('values ===>>', values)}
        />
      </div>
    </Context.Provider>
  )
}

export const useDrawerContext = () => React.useContext(Context);