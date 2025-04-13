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
  | 'uploadManually'
  | 'list';

export type fieldType = {
  key: inputType;
  name: string;
}

export type inputSize = 'large' | 'middle' | 'small' | 'default';

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
  { key: 'list', name: 'List' },
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
    notes: null,
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
    notes: null,
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
  password: {
    order: 0,
    category: 'input',
    type: 'password' as inputType,
    name: '', // cammel case from label
    label: '',
    dataType: 'string',
    viewType: 'string',
    dependency: null,
    notes: null,
    rules: [
      { 
        required: true, 
        message: ''
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '**********' 
    }
  },
  checkbox: {
    order: 0,
    category: 'input',
    type: 'checkbox' as inputType,
    name: '',
    label: '',
    dataType: 'boolean',
    viewType: 'yes/no',
    rules: [],
    props: { 
      size: 'middle'
    }
  },
  switch: {
    order: 0,
    category: 'input',
    type: 'switch' as inputType,
    name: '',
    label: '',
    dataType: 'boolean',
    viewType: 'yes/no',
    rules: [],
    props: { 
      size: 'default'
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
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '',
      allowClear: true,
      allowCustomValue: false,
      url: null, // to add external options
      valueFlag: null,
      labelFlag: null
    },
    options: [ // in case there is external options, then this will be ignored
      { value: '', label: '', id: 'fcc544d2-bf6d-4838-bde9-253ac06452cd' },
      { value: '', label: '', id: '1d5ac222-dc46-440b-bd20-d07678a25c57' },
      { value: '', label: '', id: '5281b96e-cdd3-4146-ad03-e6b7bf50cf8f' }
    ]
  },
  multiSelect: {
    order: 0,
    category: 'input',
    type: 'multiSelect' as inputType,
    name: '',
    label: '',
    dataType: 'list',
    viewType: 'list',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '',
      allowClear: true,
      allowCustomValue: false
    },
    options: [ // in case there is external options, then this will be ignored
      { value: '', label: '', id: '720b344e-5820-486e-bae6-8682e4157023' },
      { value: '', label: '', id: 'e39d926b-896a-4223-b61e-cbd51963efb7' },
      { value: '', label: '', id: '0fa815dd-4739-416a-bf7f-17c171dd3a26' }
    ]
  },
  lookupSelect: {
    order: 0,
    category: 'input',
    type: 'lookupSelect' as inputType,
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'user',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '',
      allowClear: true,
      url: 'https://forms.salic.com/Users',
      valueFlag: 'email',
      labelFlag: 'name'
    }
  },
  radio: {
    order: 0,
    category: 'input',
    type: 'radio' as inputType,
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'string',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle'
    },
    options: [
      { value: '', label: '', id: '6ccd41e6-f30a-4c3d-812d-8af089178f35' },
      { value: '', label: '', id: 'd10eb8ad-4e48-427e-a547-770196cafd2a' },
      { value: '', label: '', id: 'bf455400-2348-4c02-8da4-650702c89b11' }
    ]
  },
  radiobuttons: {
    order: 0,
    category: 'input',
    type: 'radiobuttons' as inputType,
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'string',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle'
    },
    options: [
      {
        id: '4cab4c32-0a59-4555-a13b-94b60312fbc1',
        text: '',
        optionProps: {
          value: ''
        }
      },
      {
        id: 'a9b45d20-8f2b-42b4-acd6-80223a6b29b5',
        text: '',
        optionProps: {
          value: ''
        }
      },
      {
        id: '9ebad633-0836-4bd6-83a5-554f88f43375',
        text: '',
        optionProps: {
          value: ''
        }
      }
    ]
  },
  date: {
    order: 0,
    category: 'input',
    type: 'date',
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'date',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      disabledBeforeToday: false, // editable
      allowClear: true,
      size: 'middle', // editable
      placeholder: '', // editable
      format: 'MM/DD/YYYY' // editable
    }
  },
  time: {
    order: 0,
    category: 'input',
    type: 'time',
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'time',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      allowClear: true,
      size: 'middle', // editable
      placeholder: '', // editable
      format: 'hh:mm A' // editable
    }
  },
  datetime: {
    order: 0,
    category: 'input',
    type: 'datetime',
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'datetime',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      disabledBeforeToday: false,
      allowClear: true,
      size: 'middle',
      placeholder: '',
      format: 'MM/DD/YYYY hh:mm A'
    }
  },
  daterange: {
    order: 0,
    category: 'input',
    type: 'daterange',
    name: '',
    label: '',
    dataType: 'list',
    viewType: 'dateRange',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      disabledBeforeToday: false,
      allowClear: true,
      size: 'middle',
      placeholder: ['', ''],
      format: 'MM/DD/YYYY'
    }
  },
  timerange: {
    order: 0,
    category: 'input',
    type: 'timerange',
    name: '',
    label: '',
    dataType: 'list',
    viewType: 'timeRange',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      allowClear: true,
      size: 'middle',
      placeholder: ['', ''],
      format: 'MM/DD/YYYY'
    }
  },
  daterangetime: {
    order: 0,
    category: 'input',
    type: 'daterangetime',
    name: '',
    label: '',
    dataType: 'list',
    viewType: 'dateTimeRange',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: {
      disabledBeforeToday: false,
      allowClear: true,
      size: 'middle',
      placeholder: ['', ''],
      format: 'MM/DD/YYYY hh:mm A'
    }
  },
  textarea: {
    order: 0,
    category: 'input',
    type: 'textarea',
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'longString',
    notes: null,
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '', 
      rows: 3 
    }
  },
  email: {
    order: 0,
    category: 'input',
    type: 'text' as inputType,
    name: '', // cammel case from label
    label: '',
    dataType: 'string',
    viewType: 'email',
    dependency: null,
    notes: null,
    rules: [
      { 
        required: false, 
        message: ''
      }, 
      { 
        type: 'email', 
        message: 'Wrong Email Format' 
      }
    ],
    props: { 
      size: 'middle', 
      placeholder: '' 
    }
  },
  uploadManually: {
    order: 0,
    category: 'input',
    type: 'uploadManually' as inputType,
    name: '', // cammel case from label
    label: '',
    dataType: 'list',
    viewType: 'files',
    dependency: null,
    notes: null,
    rules: [
      { 
        required: false, 
        message: ''
      }
    ]
  },
  list: {
    order: 0,
    category: 'input',
    type: 'list',
    name: '',
    label: '',
    dataType: 'list',
    viewType: 'list',
    rules: [
      { 
        required: false, 
        message: '' 
      }
    ],
    notes: null,
    props: {},
    initialValue: [],
    childrenContainerCssStyle: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      backgroundColor: '#00000005',
      padding: '1rem',
      borderRadius: '4px',
      borderWidth: '1px',
      borderColor: '#D1D5DB',
      marginBottom: '1rem'
    },
    deleteChildrenBtnText: 'Delete',
    deleteChildrenBtnStyle: {
      position: 'absolute',
      top: '-10px',
      right: '22px',
      color: '#f65858',
      backgroundColor: '#f7dede',
      padding: '0px 4px',
      borderRadius: '4px'
    },
    children: [
      {
        order: 0,
        category: 'input',
        type: 'text' as inputType,
        name: '', // cammel case from label
        label: '',
        dataType: 'string',
        viewType: 'string',
        dependency: null,
        notes: null,
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
      }
    ]
  },
  // ....
}

export const inputSizes: { value: inputSize; label: string; }[] = [
  { value: 'small', label: 'Small' },
  { value: 'middle', label: 'Default' },
  { value: 'large', label: 'Large' }
];
export const switchSizes: { value: inputSize; label: string; }[] = [
  { value: 'small', label: 'Small' },
  { value: 'default', label: 'Default' } 
];

export const dateFormatsOptions: { value: string; label: string; }[] = [
  { value: 'MM/DD/YYYY', label: 'as 10/05/2023' },
  { value: 'DD/MM/YYYY', label: 'as 05/10/2023' },
  { value: 'DD MMMM YYYY', label: 'as 05 October 2023' },
  { value: 'MMMM D, YYYY', label: 'as October 05, 2023' },
  { value: 'MMM D, YYYY', label: 'as Oct 05, 2023' }
];

export const timeFormatsOptions: { value: string; label: string; }[] = [
  { value: 'hh:mm A', label: '12-hour as 03:30 PM' },
  { value: 'HH:mm:ss', label: '24-hour as 15:30:00' },
  { value: 'HH:mm', label: 'Short as 15:30' }
];

export const dateTimeFormatsOptions: { value: string; label: string; }[] = [
  { value: 'MM/DD/YYYY hh:mm A', label: 'as 10/05/2023 03:30 PM' },
  { value: 'MMMM D, YYYY hh:mm A', label: 'as October 05, 2023 03:30 PM' },
  { value: 'MMM D, YYYY hh:mm A', label: 'as Oct 05, 2023 03:30 PM' },
  { value: 'DD/MM/YYYY HH:mm', label: 'as 05/10/2023 15:30' },
];



export const validations = {
  checkSelect: (options: { value: string; label: string }[]): boolean => {  
    if (!options) return false;  
    return options.every(option =>   
      'value' in option &&   
      'label' in option &&  
      typeof option.value === 'string' &&  
      typeof option.label === 'string' &&
      option.value.trim().length > 1 &&  
      option.label.trim().length > 1   
    );  
  },
  checkRadioButtons: (options: { text: string; optionProps: { value: string } }[]): boolean => {  
    if (!options) return false; 
    return options.every(option =>   
      'value' in option.optionProps &&   
      'text' in option &&  
      typeof option.optionProps.value === 'string' &&  
      typeof option.text === 'string' &&
      option.optionProps.value.trim().length > 1 &&  
      option.text.trim().length > 1   
    );  
  }  
}

export const doFormikValidation = (values: any) => {
  const errors: any = {};
  if(['select', 'multiSelect', 'radio'].includes(values.type) && !validations.checkSelect((values as any).options)) {
    errors.options = 'Complete Options';
  } else if(values.type == 'radiobuttons' && !validations.checkRadioButtons((values as any).options)) {
    errors.options = 'Complete Options';
  } else if(values.type == 'list') {
    values.children.map((field: any) => {
      if(!field.label.trim()) {
        errors.children = 'Complete Children'
      } else if(['select', 'multiSelect', 'radio'].includes(field.type) && !validations.checkSelect((field as any).options)) {
        errors.children = 'Complete Children'
      } else if(field.type == 'radiobuttons' && !validations.checkRadioButtons((field as any).options)) {
        errors.children = 'Complete Children'
      } else if(field.type == 'textarea' && !field.props.rows) {
        errors.children = 'Complete Children'
      }
    })
  }
  return errors;
}

export function getFieldTitle(key: inputType): string {
  if(!key) return 'Unknown Field';
  return inputsTypes.find(f => f.key == key)?.name || 'Unknown Field';
}