import React from 'react'

// export class Search extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//             <React.Fragment>
//                 <h1>Book Finder</h1>
//                 <input type='text' placeholder='Type, Author, Book name, Subject...' onClick={this.props.onClick_}></input>
//                 <button type='button'>SEARCH</button>
//             </React.Fragment>
//         )
//     }
// }

export function Search(props) {
    return (
        <React.Fragment>
            <h1>Book Finder</h1>
            <input type='text' placeholder='Type, Author, Book name, Subject...' onClick={props.onClick_}></input>
            <button type='button'>SEARCH</button>
        </React.Fragment>
    )
}