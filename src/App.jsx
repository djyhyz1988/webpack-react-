import React from 'react';
import { Provider } from 'react-redux';

import './style/App.less';
import App from './router/index';
import store from './redux/store/storeConfig';

export default ()=>(
    <Provider store={ store }>
        <App/>
    </Provider>
)