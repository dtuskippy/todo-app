import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({children}) => {
  const [title, setTitle] = useState('Some Site');
  const [email, setEmail] = useState('someone@somesite.com')
  
  const values = {
    title,
    email,
  }

  return (
    <SettingsProvider value={values} >
      {children}
    </SettingsProvider>


  )
}

export default SettingsProvider;

