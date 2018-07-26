import React, { Component } from 'react';
import Insta from '../media/Insta.svg'
class AboutPage extends Component{
  render(){
    return(
      <div className="AboutPage">
        <div>
          {"Instagram: @nickshaya - "}
          <a href="https://www.instagram.com/nickshaya/"><img src={Insta} style={{width:"20px",height:"auto"}}/></a><br/>
          Email: nickshaya@gmail.com<br/>
        </div>
      </div>
    )
  }
}

export default AboutPage;
