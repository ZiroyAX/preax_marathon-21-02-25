import React from 'react';
import classes from './Input.module.css';

export default function Input({className, placeholder, onChange}) {

    let func = () => false;
    if (onChange instanceof Function) {
        func = onChange
    }

    return (
        <input className={className} placeholder={placeholder} onChange={(e) => func(e.target.value)}>

        </input>
    )
}
