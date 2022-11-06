import React, {useState} from 'react';
import { useEffect } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = useState(true); // false to pass settings test; true for passing functionality per Lab 31
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');
  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({showCompleted, pageItems, sort}))
  };

  const values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    saveLocally,
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo'));
    if(storage) {
      console.log(storage);
      setShowCompleted(storage.showCompleted);
      setPageItems(storage.setPageItems);
      setSort(storage.setSort);
    }
  }, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )  
};

export default SettingsProvider;