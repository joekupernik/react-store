import React from 'react';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';



const Incrementer = (props) => {

    const { value, onDecrement, onIncrement } = props;

    return (
        <div>
            <Button aria-label="remove from shopping cart" onClick={onDecrement}> -
            </Button>
            <Figure variant="outlined" value={value}>number
            </Figure> 
            <Button aria-label="add to shopping cart" onClick={onIncrement}> +
            </Button>
        </div>
    );
}

export default Incrementer;