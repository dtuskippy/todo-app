import React, { useContext } from 'react';
import Main from './components/Main';
import { SettingsContext } from './Context/Settings';


function App() {
  const { title, email } = useContext(SettingsContext);
    return (
      <>
        <h1>{title}</h1>
        <h2>Email us at {email}</h2>
        <Main />
      </>
    );
}

export default App;