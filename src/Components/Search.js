import React from 'react'

export class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <React.Fragment>
                <h1>Book Finder</h1>
                <input type='text' placeholder='Type, Author, Book name, Subject...' onChange={this.props.onChange_}></input>
                <button type='button'>SEARCH</button>
            </React.Fragment>
        )
    }
}