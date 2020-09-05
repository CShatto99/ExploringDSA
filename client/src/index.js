import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import '../node_modules/prismjs/themes/prism-okaidia.css'
import App from './App';


import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
