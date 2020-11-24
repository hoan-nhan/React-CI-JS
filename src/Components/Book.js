import React from 'react'

export function Book (props) {
    return(
        <React.Fragment>
            <div>
                {/* <h4>{props.</h4> */}
                <div>
                    <img  alt="Book cover"/>
                    <div>
                        <p>Author</p>
                        <p>Publisher</p>
                        <p>Published</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}