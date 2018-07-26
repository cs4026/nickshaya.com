import React, { Component } from 'react';
import PicturesMenu from '../Menu/PicturesMenu';
import files from '../utils/utils';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


let keys = Object.keys(files)
var index = keys.indexOf("Messing-With-Nostalgia");
if (index > -1) {
  keys.splice(index, 1);
}
let dir_size=keys.length;
let key = keys[getRandomInt(dir_size)];
let dir = files[key];
let files_size=dir.length;
let file = dir[getRandomInt(files_size)];

let series = keys.map(key=>{
  return key.split("-").join(" ")
});

class Pictures extends Component {
  constructor(props){
    super(props);
    this.goTo=this.goTo.bind(this);
    this.state={
      width: window.innerWidth
    }
  }

  goTo(index){
      let location = series[index];
      location = location.split(" ").join("-")
      this.props.history.push(`/pictures/${location}`)
  }

  render() {
    return (
      <div className="App">

        <div className="left">
        <div className="menucenter">
        <PicturesMenu goTo={this.goTo} series={series}/>
        </div>
        {
          this.state.width >= 400 && (
            <div className="twins">
              <img className="img" src={require(`../media/${key}/${file}`)} alt="hi" />
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

export default Pictures;
//<img className="Graphic" src={graphic} alt="graphic"/>
