export interface BaseField {
  name: string;
  label: string;
  type: string;
}

export interface InputField extends BaseField {
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'url';
  required?: boolean;
}

export interface SelectField extends BaseField {
  type: 'select';
  options: string[];
}

export interface GroupField extends BaseField {
  type: 'group';
  fields: Field[];
}

export type Field = InputField | SelectField | GroupField;