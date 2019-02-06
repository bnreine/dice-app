import React, { Component } from 'react';

class Roll extends Component{
  render(){
    return(
      <div className="card">
        <div className="card-body text-center">
          <button type="button" className="btn btn-light btn-outline-dark text-center card-text" onClick={this.props.handleClick}>roll</button>
        </div>
      </div>
    )
  }
}

export default Roll;
