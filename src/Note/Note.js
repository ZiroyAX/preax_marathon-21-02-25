import React from 'react';
import classes from './Note.module.css';
import {FormatDateModal} from '../utilitys/FormatDate';

export default function Note({currentPage, setIsOpenModal}) {
    return (
        <div className={classes.Note}>
            <div className={classes.Modal}>
                <button className={classes.Close} onClick={()=>setIsOpenModal(false)}><img src='/Image/close.png' alt='CloseIcon.png'/></button>
                <span className={classes.Mood}>{currentPage.mood}</span>
                <h1 className={classes.Title}>{currentPage.title}</h1>
                <p className={classes.Date}>{FormatDateModal(currentPage.date)}</p>
                
                <div className={classes.Image} style={{backgroundImage: `url(${currentPage.img})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center'}}>                                                            
                </div>
                <p className={classes.Text}>{currentPage.text}</p>
            </div>           
        </div>
    )
}
