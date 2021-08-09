import React from 'react';
import classes from './Feed.module.css';
import DefaultPreviewNote from './DefaultPreviewNote/DefaultPreviewNote';

export default function Feed({dataBase, setCurrentPage, setIsOpenModal}) {
    return (
        <div className={classes.Feed}>

            {dataBase.map((item, index) => {
                return <DefaultPreviewNote 
                        key={index}
                        date={item.date}
                        title={item.title}
                        text={item.text}
                        mood={item.mood}
                        img={item.img.src.original}
                        setCurrentPage={setCurrentPage}
                        setIsOpenModal={setIsOpenModal}
                        />
            })}
        </div>
    )
}
