
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
  date: {
    order: 0,
    category: 'input',
    type: 'date',
    name: '',
    label: '',
    dataType: 'string',
    viewType: 'date',
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
    label: 'xsxswseqw',
    dataType: 'list',
    viewType: 'files',
    dependency: null,
    rules: [
      { 
        required: true, 
        message: ''
      }
    ]
  }
  // ....
}

export const inputSizes: { value: inputSize; label: string; }[] = [
  { value: 'large', label: 'Large' },
  { value: 'middle', label: 'Default' },
  { value: 'small', label: 'Small' }
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