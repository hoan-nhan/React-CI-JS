import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Click} from './Components/Click'
import {Meal} from './Components/Meal'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.getMeal=this.getMeal.bind(this)
  }
  getMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(mealObj => this.setState({mealObj}))
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Click onClick_={this.getMeal}/>
        <Meal meals={this.state}/>
      </React.Fragment>
    );
  }
}

export default App;


// let mealObject = {
//   mealObj:{
//     meals: [{id:'pho',price:'50'},{id:'com',price:'40'}]
//   }
// }
// console.log(mealObject)
// console.log(mealObject.mealObj)