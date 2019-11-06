import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Bpp from './Bpp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Route} from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route  path="/Jsdemob" component={Bpp} />
        </div>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
