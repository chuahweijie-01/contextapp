import React, { createContext, useContext, useState } from 'react'

const BookContext = createContext();

export const useBook = () => {
    return useContext(BookContext)
}

const BookContextProvider = ({ children }) => {

    const [books, setBooks] = useState([
        { title: 'the ways of king', id: 1 },
        { title: 'the name of wind', id: 2 },
        { title: 'the final empire', id: 3 }
    ])

    return (
        <BookContext.Provider value={{ books }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider