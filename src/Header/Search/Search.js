import React, { useContext } from 'react';
import classes from './Search.module.css';

import Input from '../../UI/Input/Input';
import MoodSelect from '../../UI/MoodSelect/MoodSelect';

import { currentSearchMood, currentSearch } from '../../App';


export default function Search() {
    const searchMood = useContext(currentSearchMood);
    const search = useContext(currentSearch);

    return (
        <div className={classes.Search}>
            <Input className={classes.ipt} placeholder={'Поиск'} onChange={search}/>
            <MoodSelect className={classes.moodList} onChange={searchMood}/>
        </div>
    )
}
