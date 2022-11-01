import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [showCompleted, setShowCompleted] = useState(false);
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
    <SettingsProvider value={values} >
      {children}
    </SettingsProvider>

  )
}

export default SettingsProvider;

