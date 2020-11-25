import React from 'react'

export function Click(props) {
    return(
        <div className='get-meal'>
            <h1>Feeling hungry?</h1>
            <p>Get a random meal by clicking below</p>
            <button type="button" onClick={props.onClick_}>GET MEAL</button>
        </div>
    )
}