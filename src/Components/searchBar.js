import '../assets/css/searchbar.css'
import React from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../config/firebase.config'
import { emojilist } from '../resources/emojiList';
// try {
//     firebase.initializeApp(firebaseConfig);
// } catch (e) {
//     console.log(e.message)
// }
// const db = firebase.firestore();

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {searchText: 'hehe'}
        this.EnterInput = this.EnterInput.bind(this)
    }
    EnterInput(e) {
        // handle sự kiện onchange
        this.setState({searchText:e.target.value})
        // console.log(this.setState.searchText)
        // filter để show 20 emiji có include enterinput
        for (let i = 0; i < emojilist.length; i++) {
            if (emojilist[i].keywords.includes(this.setState.searchText)) {
                
            }
        }
    }
    // componentDidMount() {
    //     // db.collection("users").add({
    //     //     first: "Ada",
    //     //     last: "Lovelace",
    //     //     born: 1815
    //     // })
    //     // .then(function(docRef) {
    //     //     console.log("Document written with ID: ", docRef.id);
    //     // })
    //     // .catch(function(error) {
    //     //     console.error("Error adding document: ", error.message);
    //     // });

    //     db.collection("users").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //         });
    //     });
    // }
    render() {
        return (
            <input onChange={this.EnterInput} className="full" type="text" placeholder="Enter your emoji" />
        )
    }
}