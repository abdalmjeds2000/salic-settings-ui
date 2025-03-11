export type Employee = {
  id: string;
  name: string;
  email: string;
  department?: string | null;
  businessUnit?: string | null;
  title?: string | null;
  grade?: string | null;
}


export type PropsType = {
  //* for select input
  //* for external options
  url?: string;       // for call api
  valueFlag?: string; // for call api
  labelFlag?: string; // for call api
  queryFlag?: string; // for call api
  //* for custom options
  allowCustomValue?: boolean; // for allow user to add custom value

  //* DATES PICKERS VALIDATION OPTIONS
  disabledBeforeToday?: boolean; //* works for "date" "datetime" "daterange" "daterangetime" types
  [key: string]: any; // for input props
}
export type FormField = {
  category: string;
  order: number;
  type: string;
  name: string;
  label?: string;
  dataType: string;
  viewType: string;
  rules?: { required: boolean, message: string }[];
  props?: PropsType;
  options?: { value: string, label: string, text?: string, optionProps?: any }[];
  style?: React.CSSProperties;
  initialValue?: any;
  children?: FormField[];
  deleteChildrenBtnStyle?: any;
  childrenContainerCssStyle?: any;
  deleteChildrenBtnText?: any;
  dependency?: { field: string; value: any; condition: 'show' | 'hide' };
  requiredDependency?: { field: string; value: any };
  notes?: string;
}