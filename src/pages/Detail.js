import React, { Component } from 'react'
import axios from 'axios';
export default class Detail extends Component {
 
componentDidMount(){
  console.log(this.props)
  // axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
}
  render() {
    
    return (
      <div>
        详情
      </div>
    )
  }
}
