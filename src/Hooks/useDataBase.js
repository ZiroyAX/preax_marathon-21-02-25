import {useState, useEffect} from 'react';
import {DB} from '../utilitys/DataBase';

export default function useDataBase() {
    const [dataBase, setDataBase] = useState(JSON.parse(sessionStorage.getItem('Diary')) || DB);

    const addPage = (obj) => {
        const tempDataBase = dataBase;
        tempDataBase.push(obj);
        setDataBase(tempDataBase);
        return console.log('Done')
    }

    useEffect(() => {
        sessionStorage.setItem('Diary', JSON.stringify(dataBase));
    });

    return [dataBase, addPage]
}
