import React from 'react'
import '../assets/css/emoji.css'

export function Emoji(props) {
    return (
    <p>{props.symbol} {props.title}</p>
    )
}