import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './Home';
import './index.css';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route path="/home" component={Home} />
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
