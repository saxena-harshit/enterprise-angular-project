export interface FormFields {
    type:string;
    label:string;
    name:string;
    placeholder?:string;
    options?:string[];
    required?:boolean;
}
export interface Fields{
    name:string;
    type:string;
    label?:string;
    required?:boolean
    options?:Options[];
    placeholder?:string;
    fields?:Fields[];
    disables?:boolean;
    Validators?:Validators;
    accept?:string;
    multiple?:boolean;
    displayType?:string;
    allowCustomValue?:boolean;

}
export interface Step{
    fields?:Fields[];
    stepNumber:number;
    stepTitle:string;
    type?:'formArray'|'summery';
    name?:string;
    minItems?:number;
maxItems?:number;
addbuttonText?:string;


}
export interface FormConfig{
    formName:string;
    step:Step[];
}

export interface Options{
    label:string;
    value:string;

}

export interface Validators{
    min?:number;
    max?:number;
    minLengeth?:number;
    maxLength?:number;
    patter?:string;
}