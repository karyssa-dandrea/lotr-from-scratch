import BookList from '../../components/Books/BookList';
import React from 'react';

export default function Books() {
  // get books by getting api from fetch
  // pass those books to booklist, like i did with films
  return (
    <div>
      <BookList />
    </div>
  );
}
