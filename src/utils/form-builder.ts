
export type inputType = 
  | 'text'
  | 'number'
  | 'radio'
  | 'radiobuttons'
  | 'checkbox'
  | 'switch'
  | 'email'
  | 'password'
  | 'select'
  | 'multiSelect'
  | 'lookupSelect'
  | 'textarea'
  | 'date'
  | 'daterange'
  | 'time'
  | 'timerange'
  | 'datetime'
  | 'daterangetime'
  | 'uploadManually';

export type fieldType = {
  key: inputType;
  name: string;
}
/* properties?: 
    (
      | 'label' | 'dependency' | 'isRequired' | 'size' | 'placeholder' 
      | 'selectOptions'
    )[]; */

export type inputSize = 'large' | 'middle' | 'small';

export const inputsTypes: fieldType[] = [
  { key: 'text', name: 'Text' },
  { key: 'number', name: 'Number' },
  { key: 'radio', name: 'Radio' },
  { key: 'radiobuttons', name: 'Radio Buttons' },
  { key: 'checkbox', name: 'Checkbox' },
  { key: 'switch', name: 'Switch' },
  { key: 'email', name: 'Email' },
  { key: 'password', name: 'Password' },
  { key: 'select', name: 'Select' },
  { key: 'multiSelect', name: 'Multi Select' },
  { key: 'lookupSelect', name: 'Lookup Select' },
  { key: 'textarea', name: 'Textarea' },
  { key: 'date', name: 'Date' },
  { key: 'daterange', name: 'Date Range' },
  { key: 'time', name: 'Time' },
  { key: 'timerange', name: 'Time Range' },
  { key: 'datetime', name: 'Date Time' },
  { key: 'daterangetime', name: 'Date Time Range' },
  { key: 'uploadManually', name: 'Attachments' },
]


export const initialValues = {
  text: {
    order: 0,
    category: 'input',
    type: 'text' as inputType,
    name: '', // cammel case from label
    label: '',
    dataType: 'string',
    viewType: 'string',
    dependency: null,
    rules: [
      { 
        required: false, 
        message: ''
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '' 
    }
  },
  number: {
    order: 0,
    category: 'input',
    type: 'number' as inputType,
    name: '',
    label: '',
    dataType: 'number',
    viewType: 'number',
    rules: [
      { 
        required: false, 
        message: ''
      }
    ],
    props: {
      size: 'middle',
      placeholder: ''
    }
  },
  select: {
    order: 0,
    category: 'input',
    type: 'select' as inputType,
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'string',
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '',
      allowCustomValue: false,
      url: null, // to add external options
      valueFlag: null,
      labelFlag: null
    },
    options: [ // in case there is external options, then this will be ignored
      { value: 'Option 1', label: 'Option 1' },
      { value: 'Option 2', label: 'Option 2' },
      { value: 'Option 3', label: 'Option 3' }
    ]
  },
  // ....
}

export const inputSizes: { value: inputSize; label: string; }[] = [
  { value: 'large', label: 'Large' },
  { value: 'middle', label: 'Default' },
  { value: 'small', label: 'Small' }
];