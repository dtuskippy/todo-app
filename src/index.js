import React from 'react';
import ReactDOM from 'react-dom/client';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode >
);



// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
