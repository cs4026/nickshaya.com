import React, { Component } from 'react';


class PicturesMenu extends Component {
  render() {
    return (
      <div className="menu">
          {this.props.series.map((option,index)=>{
            return (
              <div key={index}>
              <span className="choice" onClick={()=>{this.props.goTo(index)}}>
                {option}
              </span><br/>
              </div>
            )
          })}

      </div>
    );
  }
}

export default PicturesMenu;
