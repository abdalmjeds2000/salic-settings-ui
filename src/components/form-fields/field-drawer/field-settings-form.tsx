import React from 'react'
import { Form, Formik } from 'formik';
import { inputsTypes, initialValues, inputType } from '../../../utils/form-builder';
import * as Fields from './fields';
import { useDrawerContext } from '.';


const FieldSettingsForm: React.FC = () => {
  const [type, setType] = React.useState<inputType>('text');
  const { setForm } = useDrawerContext(); 

  const fieldsMapping: { [K in inputType]?: React.ReactNode } = {  
    text: <Fields.Text />,
    textarea: <Fields.Textarea />,
    email: <Fields.Text />, // same as text, just set type = email in rules
    password: <Fields.Password />,
    number: <Fields.Number />,
    select: <Fields.Select />,
    multiSelect: <Fields.MultiSelect />,
    lookupSelect: <Fields.LookupSelect />,
    radio: <Fields.Radio />,
    radiobuttons: <Fields.RadioButtons />,
    checkbox: <Fields.Checkbox />,
    switch: <Fields.Checkbox />, // same as checkbox
    date: <Fields.Date />,
    time: <Fields.Time />,
    datetime: <Fields.DateTime />,
    daterange: <Fields.DateRange />,
    timerange: <Fields.TimeRange />,
    daterangetime: <Fields.DateTimeRange />,
    uploadManually: <Fields.Attachments />
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
          console.log(values)
          setSubmitting(false);
        }}
      >
        {(form) => {
           React.useEffect(() => {  
            setForm(form as any);  
          }, [form.values]);
          return (
            <Form>
              {fieldsMapping[type]}
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