import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import history from './history';

import Nav from './Nav/Nav';
import Pictures from './Pictures/Pictures'
import PicturesPage from './PicturesPage/PicturesPage';
import AboutPage from './about/AboutPage';
import VideoPage from './videos/VideoPage';

let Routes = () =>(
  <Router history={history} >
    <div className="app">

      <Route path="/" render={props =><Nav {...props}/>} />
      <div className="everythingelse">
      <Route exact path="/" render={ props => <App {...props} />} />
      <Route exact path="/pictures" render={props => <Pictures {...props} />} />
      <Route exact path="/pictures/:name" render={props=><PicturesPage {...props}/>}/>
      <Route exact path="/about" render={props=><AboutPage {...props}/>}/>
      <Route exact path="/video" render={props=><VideoPage {...props}/>}/>
      </div>
    </div>
  </Router>
)

export default Routes;
