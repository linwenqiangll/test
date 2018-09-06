import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class Button extends Component {
    onButtonClick=()=>{
        this.props.history.push(`/detail/${this.props.id}`)
    }
  render() {
       
    return (
        <button onClick={this.onButtonClick}>详情</button>
    )
  }
}
export default withRouter(Button);