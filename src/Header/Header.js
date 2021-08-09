import React from 'react';
import classes from './Header.module.css';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import Button from '../UI/Button/Button';

export default function Header( { setIsFeed, setIsAddPage, isAddPage }) {
    return (
        <header className={classes.Header}>
            <Logo />
            {isAddPage ? null : <Search />}
            <div className={classes.buttonDiv}>
                <Button className={classes.buttonFeed}
                        onClick={() => {
                            setIsFeed(true);
                            setIsAddPage(false);
                        }}                
                >
                    <img src='/Image/buttonFeed.png' alt='iconButtonFeed'/>
                    {'Список'}
                </Button>
                <Button className={classes.buttonAdd} 
                        onClick={() => {
                            setIsFeed(false);
                            setIsAddPage(true);
                        }}
                >
                <img src='/Image/buttonAdd.png' alt='iconButtonAdd'/>
                    {'Запись'}   
                </Button>
            </div>
        </header>
    )
}
