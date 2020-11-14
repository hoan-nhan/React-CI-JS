import React from 'react';
import '../assets/css/searchbar.css'

export class SearchBar extends React.Component{
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <input className="full" type="text" placeholder="Enter your emoji"/>
        )
    }
}