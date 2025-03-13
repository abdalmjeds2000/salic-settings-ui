import React from 'react'
import { Form, Formik } from 'formik';
import { inputsTypes, initialValues, inputType } from '../../../utils/form-builder';
import * as Properties from './fields';
import { useDrawerContext } from '.';


const FieldSettingsForm: React.FC = () => {
  const [type, setType] = React.useState<inputType>('text');
  const { setForm } = useDrawerContext(); 

  const propertiesMapping: { [K in inputType]?: React.ReactNode } = {  
    text: <Properties.Text />,
    number: <Properties.Number />,
    select: <Properties.Select />,
    // ...
  };

  return (
    <div>
      <div className='form-item'>
        <label htmlFor='type' className='label'>Field Type</label>
        <select id='type' className='input' value={type} onChange={(e) => setType(e.target.value as any)}>
          {inputsTypes.map(opt => <option value={opt.key}>{opt.name}</option>)}
        </select>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues[type as keyof typeof initialValues] || {}}
        // validate={values => {
        //   const errors: any = {};
        //   if (!values.type) {
        //     errors.type = 'Required';
        //   } else if (!values.label) {
        //     errors.label = 'Required';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            console.log(values)
          }, 400);
        }}
      >
        {(form) => {
           React.useEffect(() => {  
            setForm(form as any);  
          }, [form.values]);
          return (
            <Form>
              {propertiesMapping[type]}
              <button type='submit' disabled={form.isSubmitting} className='btn primary-btn'>
                Add Field
              </button>
            </Form>
        )}}
      </Formik>
    </div>
  )
}

export default FieldSettingsForm