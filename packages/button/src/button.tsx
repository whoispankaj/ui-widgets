import * as React from 'react';

interface ButtonProps {
    name: string
}
const Button = (props: ButtonProps) => {
    return (
        <button>{props.name}</button>
    );
}
export default Button;