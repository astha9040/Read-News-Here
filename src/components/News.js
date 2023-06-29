import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import Spin from './Spin'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: 'in',
    // pagesize: 8,
    category: 'general'
  }
  static PropType = {
    country: PropTypes.string,
    // pagesize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //here firstly run constructor then render and then componentDidMount
  constructor(props) {
    super(props);
    // console.log("hello world")
    this.state = {
      articles: [],
      loading: false,
      page: 1,

      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsTime`
  }

  // -----------------------------------------updating data-------------------------=--//
  // -------------------------------------start----------------------
  async updateData() {
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1952e4c295af4340b8ff62d1bffa7ab1&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parseData = await data.json()

    this.setState({ loading: true })
    // console.log(parseData)
    // this.setState({ articles: parseData.articles })
    this.setState({

      page: this.state.page,
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  //------------------- end -------------------
  // -------------------------------------rendering data --------------------------------
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1952e4c295af4340b8ff62d1bffa7ab1&page=${this.state.page}&pagesize=${this.props.pagesize}`
    // this.setState({loading:true})
    // let data = await fetch(url)
    // let parseData = await data.json()
    // console.log(parseData)
    // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading:false })
    this.updateData()
  }
  // -------------------------------------end--------------------------------

  // handleNextClick = async () => {

  //   this.setState({ page: this.state.page + 1 })
  //   this.updateData()
  // }
  // handlePrevClick = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.updateData()
  // }

  //------------------------------ function for infinity scroll bar-------------------------//

  // -------------------------strat------------------------
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1952e4c295af4340b8ff62d1bffa7ab1&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    let parseData = await data.json()

    this.setState({ loading: true })
    this.setState({
      page: this.state.page,
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })
  };

  // --------------------------end----------------------------

  render() {

    return (
      <>
        {/* // <div className='container my-3' style={{ color: this.props.mode === `light` ? 'black ' : 'white', backgroundColor: this.props.mode === `light` ? 'white ' : '#263238' }}> */}
        <h1 className='text-center' style={{ margin: '40px', marginTop:'80px', color: this.props.mode === `light` ? 'black ' : 'white' }}>{`NewsTime - Top ${this.capitalizeFirstLetter(this.props.category)} Headlines`}</h1>
        {/* // {this.state.loading&&<Spin/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spin />}
        >
          <div className="container" >
            <div className="row" style={{ color: this.props.mode === `light` ? 'black ' : 'white', backgroundColor: this.props.mode === `light` ? 'white ' : '#263238' }} >
              {!this.state.loading && this.state.articles.map((ele, index) => {
                const uniqueKey = `${ele.url}-${index}`;
                return <div className="col-md-4" key={uniqueKey}>
                  <NewsItems mode={this.props.mode} title={ele.title} description={ele.description ? ele.description.slice(0, 88) + "..." : ""} imageurl={ele.urlToImage} newsurl={ele.url} author={ele.author} date={ele.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="buttons d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2 my-3" onClick={this.handlePrevClick}>&lt; Previous</button>
          <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark mx-2 my-3" onClick={this.handleNextClick}>	Next &gt;</button>

        </div> */}
        {/* </div> */}

      </>
    )
  }
}

export default News
