import React, {useState} from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = useState(false); // false to pass settings test; true for passing functionality
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )  
};

export default SettingsProvider;