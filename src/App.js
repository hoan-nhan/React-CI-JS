import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Search } from './Components/Search';
import { Book } from './Components/Book'


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleInput = this.handleInput.bind(this)
    this.getBook = this.getBook.bind(this)
  }
  handleInput(e) {
    e.preventDefault()
    // if (e.key === 'Enter') {
    this.getBook(e.target.value)
    this.setState({ SearchText: e.target.value })
    console.log(e.target.value)
    // return e.target.value
    // }
  }
  getBook(searchText) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
      .then(res => res.json())
      // .then(book=>console.log(book))
      .then(books => {
        this.setState({ books })
      })
  }
  // genBook() {
  //   let bookList = [];
  //   bookList.push(this.state.books.items)
  //   console.log(bookList)
  // }
  render() {
    // console.log('render')
    // console.log(JSON.stringify(this.state))
    console.log(this.state)
    return (
      <React.Fragment>
        {/* <Search onKeyDown_={()=>this.getBook(this.handleInput())} /> */}
        <Search onSubmit_={this.handleInput} />
        <Book bookInfo={this.state.books} />
      </React.Fragment>
    );
  }
}

export default App;
