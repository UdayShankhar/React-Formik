import React from 'react';
import { ErrorMessage,useField } from 'formik';
import './Textfield.css';

export const Textfield = ({label,...props}) => {
    const [field,meta] = useField(props);
  return (
    <div>
    <label htmlFor={field.name}>{label}</label>
          <input className='form-control shadow-none'
           autoComplete='off'
    {...field} {...props}
    />
    <ErrorMessage component='div' name={field.name} className="error"/>
    </div>
  )
}
