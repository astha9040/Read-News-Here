import React, { Component } from "react";
// import loding from './loding.gif'
export class Spin extends Component {
  render() {
    return (
      <div className="my-5" style={{ textAlign: "center" }}>
        {/* <img src={loding} alt="loding" /> */}
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Spin;
