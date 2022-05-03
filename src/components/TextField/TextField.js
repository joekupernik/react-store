import React from 'react'
import { useField } from 'formik';
import Form from 'react-bootstrap/Form';



function TextField (props) {
    const { name, ...rest } = props;
    const [ field, { error } ] = useField({ name, type: name });
    
    return (
        <Form.Control
        {...field}
        {...rest}
        error={!!error}
        helperText={error}
      />
    );
}

export default TextField;