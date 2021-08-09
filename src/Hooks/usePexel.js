import React, {useState, useEffect} from 'react'
import {requestPexels} from '../utilitys/ApiGallary';

export default function usePexel() {
    const [resultImage, setRequestPhoto] = useState('');
    const [isRequest, setIsRequest] = useState(false);
    const [download, setDownload] = useState('');
    const [search, setSearch] = useState('Car');

    const reqPexels = async () => {
        setDownload('Загрузка...');
        setRequestPhoto(await requestPexels(search));
    }

    useEffect(() => {
        console.log('Без повтора');
        console.log(resultImage);

        if (resultImage && resultImage.photos.length > 0) {
            setIsRequest(true);
            setDownload(false);
        } else if (resultImage && resultImage.photos.length === 0){
            setIsRequest(false);
            setDownload('Ничего не найдено по данному запросу');
        } else setIsRequest(false);

    }, [resultImage])

    return [resultImage, isRequest, download, reqPexels, setSearch]
}
