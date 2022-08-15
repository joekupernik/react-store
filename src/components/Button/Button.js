import React from "react";
import Spinner from 'react-bootstrap/Spinner';



function Button (props) {

  const { children, isLoading,  } = props;

  return (
      <Button {...rest}>
        {!isLoading && children}
        {isLoading && <Spinner/>}
      </Button>

);
}

export default Button;
