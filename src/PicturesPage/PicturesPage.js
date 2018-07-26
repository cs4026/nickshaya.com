import React from 'react';
import files,{text} from '../utils/utils.js';

//import
class PicturesPage extends React.Component{
  constructor(props){
    super(props);
    let dir = this.props.match.params.name;
    let a;
    let t;
     Object.keys(files).map(key=>{
      if(key==dir){
         a= files[dir]
         t=text[dir]
      }
    })
    console.log("A",a);
    this.state={
      Dir: dir,
      Images: a,
      text: t
    }


  }

  render(){
    return(
      <div>
        <div className="introtext">
          <div className="textintro">{this.state.text}</div>
        </div>
      <div className="imagecontainer">

          <br/>
        <div className="imagesize">
        {
          this.state.Images.map((image,index)=>{
            return (<img key={index} className="displayimg" src={require(`../media/${this.state.Dir}/${image}`)}  alt="FOR"/>)
          })
        }
        </div>
      </div>
      </div>
    )
  }
}

export default PicturesPage;
