import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Faq from './Faq';
import Contact from './Contact';
import './index.css';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();
