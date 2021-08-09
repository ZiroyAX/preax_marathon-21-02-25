import React from 'react';
import classes from './GallaryMobile.module.css';
import Button from '../../UI/Button/Button';
import OneImage from './OneImage';
import {DEFAULT_OBJ} from '../../utilitys/ApiGallary';

export default function GallaryMobile({resultImage, isRequest, download, reqPexels, setSearch, setCurrentImg, setIsOpenModal}) {
    return (
        <div className={classes.GallaryMobile}>
            <input className={classes.search} 
                   placeholder='Поиск'
                   onChange={(e) => setSearch(e.target.value)}
                   ></input>
            
            <Button className={classes.searchButton}
                    onClick={reqPexels}
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="12" fill="#FFF76A"/>
                    <path d="M25.6654 28.2366L27.1975 26.951L28.4831 28.4831L31.5473 25.9119L32.8328 27.444L28.2366 31.3007L25.6654 28.2366Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2071 22.8934C37.0923 25.7786 37.3131 30.3193 34.8693 33.4578C34.8846 33.4713 34.8996 33.4854 34.9143 33.5L39.1569 37.7427C39.5474 38.1332 39.5474 38.7664 39.1569 39.1569C38.7664 39.5474 38.1332 39.5474 37.7427 39.1569L33.5 34.9143C33.4854 34.8996 33.4713 34.8846 33.4578 34.8693C30.3193 37.3131 25.7786 37.0923 22.8934 34.2071C19.7692 31.083 19.7692 26.0176 22.8934 22.8934C26.0176 19.7692 31.083 19.7692 34.2071 22.8934ZM32.7929 32.7929C35.1361 30.4498 35.1361 26.6508 32.7929 24.3077C30.4498 21.9645 26.6508 21.9645 24.3077 24.3077C21.9645 26.6508 21.9645 30.4498 24.3077 32.7929C26.6508 35.1361 30.4498 35.1361 32.7929 32.7929Z" fill="black"/>
                </svg>
            </Button>
            
            <div className={classes.gallery} onClick={() => setIsOpenModal(false)}>
                {
                    download
                    ? download
                    : isRequest
                    ? resultImage.photos.map((item, index) => {
                        return <OneImage key={index} urlImg={item.src.original} onClick={() => setCurrentImg(item)}/>
                    })
                    : <OneImage onClick={() => setCurrentImg(DEFAULT_OBJ)}/>
                }
            </div>
        </div>
    )
}
