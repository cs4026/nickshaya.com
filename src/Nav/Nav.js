import React from 'react';



class Nav extends React.Component {
  render() {
    let place_pre = this.props.history.location.pathname;
    let place = place_pre ==="/" ? " " : place_pre.split("/");
    if(place!==" " && place.length ===3) place[2] = place[2].split("-").join(" ");

    return (
      <div>
      {
        (place!==" " &&place.length === 3)&&(
          <div className="NavBar" >
            <span className="rootNav" onClick={()=>{this.props.history.push('/')}} >
              {"Nicholas Shaya | "}
            </span>
            <span className="type" onClick={()=>{this.props.history.push('/pictures')}} >
               {place[1]+" | "}
            </span>
             <span>
               {place[2]}
             </span>
          </div>
        )
      }
      {
        (place!==" "&&place.length < 3) && (
          <div className="NavBar" >
            <span className="rootNav" onClick={()=>{this.props.history.push('/')}} >
              {"Nicholas Shaya | "}
            </span>
            <span >
               {place[1]}
            </span>
          </div>
        )
      }
      {
        place===" " && (
          <div className="NavBar" onClick={()=>{this.props.history.push('/')}}>
            Nicholas Shaya
          </div>
        )
      }

      </div>
    );

  }

}

export default Nav;
