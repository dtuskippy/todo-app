import React, { useState } from 'react';

export const ModeContext = React.createContext();

function ModeProvider({children}) { //could be props here, and then props.children line 10
  const [mode, setMode] = useState('light');

  const values = {  //could have put {mode} inside obj. assigned to values; but anticipating future complexity 
    mode,
  }
  return(
    <ModeContext.Provider value={values}>
      {children}
    </ModeContext.Provider>
  )

}

export default ModeProvider;

