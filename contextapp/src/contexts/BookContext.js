import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', id: 1},
    {title: 'the way of kings', id: 2},
    {title: 'the final empire', id: 3},
    {title: 'the hero of ages', id: 4}
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;