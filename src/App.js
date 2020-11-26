import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Click} from './Components/Click'
import {Meal} from './Components/Meal'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getMeal=this.getMeal.bind(this)
  }
  getMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(mealObj => {
      console.log(mealObj)
      // this.setState({mealObj})
      this.setState(mealObj)
    })
  }
  render() {
    {this.state.meals ? console.log(this.state.meals[0]) : console.log("error app")}
    // console.log(this.state)
    // console.log(this.state.meals)
    // console.log(this.state.meals[0]) => err do this.state.meals là undefined khi chưa setState
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