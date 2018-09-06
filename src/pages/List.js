import React, { Component } from 'react'
import axios from 'axios';
import Button from '../components/Button';
export default class List extends Component {
  constructor(){
    super();
    this.state={
      isloading:true,
      list:[]
    }
  }
  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        if(res.status===200&&res.statusText==='OK'){
          this.setState({
            isloading:false,
            list:res.data
          })
        }
        
      })
  }
  onButtonClick(){

  }
  render() {
    return (
      this.state.isloading
      ?
      <div>loading...</div>
      :
      <div>
        {
          this.state.list.map(item=>{
            const {
              id,
              title,
              body
            }=item
            return (
                <li key={id}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                  <Button id={id} />
                </li>
                )

          })
        }
      </div>
    )
  }
}
