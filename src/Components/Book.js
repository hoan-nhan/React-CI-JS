import React from 'react'

function genBook(props) {
    console.log(props)
    console.log(props.items)
    // let bookList = [];
    // bookList.push(props.books.items)
    // console.log(bookList)
    return props.items.map((book) => {console.log(book.volumeInfo)
        return (
            <React.Fragment>
                <div>
                    {/* <h4>{props.items}</h4> */}
                    <div>
                        {book.volumeInfo.imageLinks ? <img alt="Book cover"  src={book.volumeInfo.imageLinks.smallThumbnail} /> : ""}
                        <div>
                            <p>Author:{book.volumeInfo.authors}</p>
                            <p>Publisher:{book.volumeInfo.publisher}</p>
                            <p>Published:{book.volumeInfo.publishedDate}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    )

}

export function Book(props) {
    console.log(props.bookInfo)
    return (
        props.bookInfo ? genBook(props.bookInfo) : null)
}