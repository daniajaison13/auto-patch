import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/es/layout/style/index.css';
import 'antd/es/menu/style/index.css';
import 'antd/es/table/style/index.css';
import 'antd/es/tag/style/index.css';
import 'antd/es/space/style/index.css';
import 'antd/es/pagination/style/index.css';
import 'antd/es/select/style/index.css';
import 'antd/es/button/style/index.css';
import 'antd/es/drawer/style/index.css';
import 'antd/es/card/style/index.css';
import 'antd/es/avatar/style/index.css';
import 'antd/es/progress/style/index.css';
import 'antd/es/timeline/style/index.css';
import 'antd/es/modal/style/index.css';
import 'antd/es/list/style/index.css';
import 'antd/es/message/style/index.css';





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
