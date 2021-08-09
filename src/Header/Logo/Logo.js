import React from 'react';
import classes from './Logo.module.css';

export default function Logo() {
    return (
        <div className={classes.Logo}>
            <img src='/image/icon.png' alt='icon'/>
            <h1 className={classes.text}>Дневник</h1>
        </div>
    )
}
