import React, { Component } from 'react'
import loding from './loding.gif'
export class Spin extends Component {
  render() {
    return (
      <div style={{textAlign:'center',}}>
        <img src={loding} alt="loding" />
      </div>
    )
  }
}

export default Spin
