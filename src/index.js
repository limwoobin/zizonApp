import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import {MuiThemeProvider , createMuiTheme} from '@material-ui/core/styles';
// const theme = createMuiTheme({
//     typography: {
//         fontFamily: '"Noto Sans KR" , serif',
//     },
// });
// ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider> ,document.getElementById('root'));

const title = 'Drogba_Blog';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


