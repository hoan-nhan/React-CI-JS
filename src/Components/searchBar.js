import '../assets/css/searchbar.css'
import React from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../config/firebase.config'
try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}
const db = firebase.firestore();

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // db.collection("users").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error.message);
        // });

        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }
    render() {
        return (
            <input className="full" type="text" placeholder="Enter your emoji" />
        )
    }
}