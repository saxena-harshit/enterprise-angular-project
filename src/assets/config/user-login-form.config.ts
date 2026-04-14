import { FormFields } from "../../app/shared/models/form-fields";

 export const  formFields:FormFields[]=[ {
    type: 'text',
    label: 'username',
    name: 'username',
    required: true,
        placeholder:'Enter username'

  }, {
    type: 'password',
    label: 'Password',
    name: 'password',
    required: true,
        placeholder:'Enter user Password'

  },];
  