import React, { Component } from 'react';
import MainMenu from './Menu/MainMenu';
import files from './utils/utils';

require('./home.css');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let menu = [
  "pictures",
  "video",
  "about"
]

let keys = Object.keys(files)
let dir_size=keys.length;
let key = keys[getRandomInt(dir_size)];
let dir = files[key];
let files_size=dir.length;
let file = dir[getRandomInt(files_size)];

let series = keys.map(key=>{
  return key.split("-").join(" ")
});

class App extends Component {
  constructor(props){
    super(props);
    this.goTo=this.goTo.bind(this);
  }

  goTo(index){
      let location = menu[index];
      location = location.split(" ").join("-")
      this.props.history.push(`/${location}`)
  }

  render() {
    return (
      <div className="App">

        <div className="left">
        <div className="menucenter">
        <MainMenu goTo={this.goTo} menu={menu}/>
        </div>
        <div className="twins">
          <img className="img" src={require(`./media/${key}/${file}`)} alt="hi" />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
//<img className="Graphic" src={graphic} alt="graphic"/>
