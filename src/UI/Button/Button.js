import React from 'react';
import classes from './Button.module.css';

export default function Button({className, onClick, disabled = '', children}) {
    let func = () => false;
    if (onClick instanceof Function) {
        func = onClick
    }
    return <button disabled={disabled} className={className} onClick={() => func()}>{children}</button>
}
