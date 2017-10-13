import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import showResults from './showResults.js'

import './index.css';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SigninForm from './components/SigninForm';



const rootElement = document.getElementById('root')

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <SigninForm onSubmit={showResults}/>
    </MuiThemeProvider>
  </Provider>
);



ReactDOM.render(<App />, 
  rootElement);
