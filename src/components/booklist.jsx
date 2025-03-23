import React from 'react'
import { useTheme } from '../contexts/themecontext'
import { useBook } from '../contexts/bookcontext'

const BookListPage = () => {
    const { theme: { isLightTheme, light, dark } } = useTheme()
    const theme = isLightTheme ? light : dark

    const { books } = useBook();

    return (
        <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books && books.map(book => <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>)}
            </ul>
        </div>
    )
}

export default BookListPage