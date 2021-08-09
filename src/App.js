import './App.css';
import React, { useState } from 'react';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import Note from './Note/Note';
import AddNote from './AddNote/AddNote';

import useDataBase from './Hooks/useDataBase';

export const currentSearchMood = React.createContext(false);
export const currentSearch = React.createContext(false);

export default function App() {
  const [dataBase, addPage] = useDataBase();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const [isFeed, setIsFeed] = useState(true);
  const [isAddPage, setIsAddPage] = useState(false);

  const [searchMood, setSearchMood] = useState('');
  const [search, setSearch] = useState('');

  
  console.log(dataBase.filter(item => item.title.toLowerCase()));
  return (
    <div className={'App'}>
      <currentSearchMood.Provider value={setSearchMood} >
        <currentSearch.Provider value={setSearch} >
          <Header setIsFeed={setIsFeed}
                  setIsAddPage={setIsAddPage}
                  isAddPage={isAddPage}
          />
        </currentSearch.Provider>
      </currentSearchMood.Provider>
      {
        isFeed
        ? <Feed dataBase={dataBase.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) && item.mood.includes(searchMood))} 
                setCurrentPage={setCurrentPage} 
                setIsOpenModal={setIsOpenModal}
          />
        : null
      }
      
      {
        isOpenModal
        ? <Note currentPage={currentPage} setIsOpenModal={setIsOpenModal}/>
        : null
      }
      {isAddPage ? <AddNote addPage={addPage} setIsFeed={setIsFeed} setIsAddPage={setIsAddPage}/> : null}
      
    </div>
  )
}