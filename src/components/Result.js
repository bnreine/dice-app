import React, { Component } from 'react';

class Result extends Component{
  render(){
    return(
      <div className="card">
        <div className="card-body text-center">
          <p className="card-text">
            {this.props.number}
          </p>
        </div>
      </div>
    )
  }
}

export default Result;
