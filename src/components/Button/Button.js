import React from 'react';
import './Button.css';

function Button({ text, handleClick }) {
    return (
        <button className={'rg_button'} onClick={handleClick}>{text}</button>
    );
}

export default Button;