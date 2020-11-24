import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Search } from './Components/Search';
import { Book } from './Components/Book'


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {SearchText:""}
    this.handleInput=this.handleInput.bind(this)
    this.getBook=this.getBook.bind(this)
  }
  handleInput(e) {
    this.setState ({SearchText: e.target.value})
  }
  getBook(searchText) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
    .then(res=>res.json())
    // .then(book=>return book)
  }
  render() {
    return (
      <React.Fragment>
        <Search onChange_={this.handleInput}/>
        <Book />
      </React.Fragment>
    );
  }
}

export default App;
