import React from 'react';
import classes from './OneImage.module.css';

export default function OneImage({urlImg = '/Image/previewFeed.jpeg', onClick}) {
    return (
        <div tabIndex='-1' className={classes.oneImg} onClick={onClick}>
            <div className={classes.currentImg}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.41409 15.5858L5.41421 11.5857L4 12.9999L9.41409 18.4142L20.4141 7.41423L18.9998 6.00001L9.41409 15.5858Z" fill="white"/>
                </svg>
            </div>
            {/* <img className={classes.imgSmall} src='/Image/previewFeed.jpeg' alt='imgForDiary'/> */}
            <img className={classes.imgSmall} src={urlImg} alt='imgForDiary'/>
        </div>
    )
}
