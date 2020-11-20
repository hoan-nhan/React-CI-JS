import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './Components/header'
import { SearchBar } from './Components/searchBar'
import { Emoji } from './Components/emoji'


import {emojiList} from './resources/emojiList'

function filterEmoji(searchText,data) {
  return data.filter((value) => {
    return value.keywords.indexOf(searchText) != -1
  })
}

// console.log(emojiList)
class App extends React.Component {
  constructor(props) {
    super (props)
    this.state = {}
    this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(e) {
    this.setState({searchText: e.target.value})
    // console.log(this.state) 
  }
  createEmojis(emojis) {
    console.log(emojis)
    let len = emojis.length > 20 ? 20 : emojis.length;
    let elist_ = [];
    for (let i = 0; i < len; i++) {
      elist_.push(
        <Emoji symbol={emojis[i].symbol} title={emojis[i].title}/>
      )
    }
    return elist_
  }
  render () {
    let elist = this.createEmojis(filterEmoji(this.state.searchText,emojiList))
    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange_={this.handleInput}/>
        <div className="emoList">{elist}</div>
        
      </React.Fragment>
    );
  }
}

export default App;
