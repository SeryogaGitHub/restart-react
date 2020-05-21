import React from "react";
import {Field} from "redux-form";

export const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.error && meta.touched;
  const error = hasError && " error";

  return(
    <div className={"form-control" + error}>
      {props.children}
      {hasError && <div className={"error"}>{meta.error}</div>}
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createField = (name, component, props, placeholder, validate, text = "") => {
  return(
    <div className={'default'}>
      {text && <label htmlFor="lastName">Запамятати</label>}
      <Field name={name} component={component} placeholder={placeholder} validate={validate} {...props}/>
    </div>
  )
};
