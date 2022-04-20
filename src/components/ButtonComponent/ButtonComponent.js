import React from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';



function ButtonComponent () {

  const { children, isLoading, ...rest } = props;

  return (
      <Button {...rest}>
        {!isLoading && children}
        {isLoading && <Spinner/>}
      </Button>

);
}

export default ButtonComponent;
