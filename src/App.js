import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './Components/header'
import {SearchBar} from './Components/searchBar'
import {Emoji} from './Components/emoji'

import {emojiList} from './resources/emojiList'

console.log(emojiList)
function App() {
  // let elist = [];
  // for (let i = 0; i < 20; i++) {
  //   elist.push(
  //     <Emoji symbol={emojiList[i].symbol} title={emojiList[i].title}/>
  //   )
  // }

  return (
    <React.Fragment>
      <Header/>
      <SearchBar/>
      <Emoji title={emojiList[0].title} symbol = {emojiList[0].symbol}/>
    </React.Fragment>
  );
}

export default App;
