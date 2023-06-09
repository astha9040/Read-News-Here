import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title,description, imageurl,newsurl,author,date} = this.props
    return (
      
      <div className='my-3'  >
        <div className="card" style={{color: this.props.mode===`light`?'black ':'white',backgroundColor:this.props.mode===`light`?'white ':'black'}} >
          <img src={!imageurl?"https://i.blogs.es/9e3096/estrenos-streaming/840_560.jpeg":imageurl} className="card-img-top" alt="..." />
          <div className="card-body" style={{color: this.props.mode===`light`?'black ':'white'}}>
            <h4 className="card-title">{title} </h4>
            <h6 className="card-text">{description}</h6>
            <p className="card-text">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
            <a rel="noreferenc" href={newsurl} target="blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
