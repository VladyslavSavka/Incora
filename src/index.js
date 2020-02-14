import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import FakeService from './services/fake-service';
import {FakeServiceProvider} from './components/fake-service-context';

import store from './store/store';

const fakeService = new FakeService();

ReactDOM.render(
    <Provider store={store}>
            <FakeServiceProvider value={fakeService}>
                <Router>
                    <App/>
                </Router>
            </FakeServiceProvider>
    </Provider>,
    document.getElementById('root')
);
