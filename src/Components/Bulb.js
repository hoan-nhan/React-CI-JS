import React from 'react'
const on_img = './on.jpg'
const off_img = './off.jpg'
 
export class Bulb extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            isOn:true
        }
    }
    switch_bulb(){
        console.log("You clicked switch button!")
        this.setState({isOn:!this.state.isOn})
    }
    render() {
        return (
            <div>
                <img src = {this.state.isOn ? on_img : off_img}/>
                <input type="button" value="Switch" onClick={()=>this.switch_bulb()}/>
            </div>
        )
    }
}

