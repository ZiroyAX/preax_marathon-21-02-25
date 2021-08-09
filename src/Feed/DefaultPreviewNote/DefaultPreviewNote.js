import React from 'react';
import classes from './DefaultPreviewNote.module.css';
import {FormatDatePreview} from '../../utilitys/FormatDate';

export default function DefaultPreviewNote({date, title, text, mood, img, setCurrentPage, setIsOpenModal}) {
    return (
        <div className={`${classes.DefaultPreviewNote}`} 
             style={{backgroundImage: `url(${img})`}}
             onClick={() => {
                setCurrentPage({date, title, text, mood, img});
                setIsOpenModal(true);
            }}
        >
            <div className={classes.mood}><span className={classes.MoodSpan}>{mood}</span></div>
            <div className={classes.info}>
                <h1 className={classes.title}>{title}</h1>
                <h1 className={classes.date}>{FormatDatePreview(date)}</h1>
                <p className={classes.text}>{text.slice(0, 20) + '...'}</p>
            </div>
            
        </div>
    )
}
