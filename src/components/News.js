import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spin from './Spin'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general'
  }
  static PropType = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }
  //here firstly run constructor then render and then componentDidMount
  constructor() {
    super();
    // console.log("hello world")
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
  }


  async updateData(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1952e4c295af4340b8ff62d1bffa7ab1&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({loading:true})
    // console.log(parseData)
    // this.setState({ articles: parseData.articles })
    this.setState({

      page: this.state.page ,
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    })
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1952e4c295af4340b8ff62d1bffa7ab1&page=${this.state.page}&pagesize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(url)
    // let parseData = await data.json()
    // console.log(parseData)
    // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading:false })
    this.updateData()
  }


  handleNextClick = async () => {
   
    this.setState({page: this.state.page+1})
    this.updateData()
  }
  handlePrevClick = async () => {
    
    this.setState({page: this.state.page-1})
    this.updateData()
  }
  render() {

    return (
      <div className='container my-3' style={{ color: this.props.mode === `light` ? 'black ' : 'white', backgroundColor: this.props.mode === `light` ? 'white ' : '#263238' }}>
        <h1 className='text-center' style={{ margin: '40px' }}>NewsMonkey - Top Headlines</h1>
        {this.state.loading&&<Spin/>}
        <div className="row" style={{ color: this.props.mode === `light` ? 'black ' : 'white', backgroundColor: this.props.mode === `light` ? 'white ' : '#263238' }} >
          {!this.state.loading&&this.state.articles.map((ele) => {
            return <div className="col-md-4" key={ele.url}>
              <NewsItems mode={this.props.mode} title={ele.title} description={ele.description ? ele.description.slice(0, 88) + "..." : ""} imageurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt}  />
            </div>
          })}


        </div>
        <div className="buttons d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2 my-3" onClick={this.handlePrevClick}>&lt; Previous</button>
          <button disabled={this.state.page  > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark mx-2 my-3" onClick={this.handleNextClick}>	Next &gt;</button>

        </div>
      </div>
    )
  }
}

export default News
