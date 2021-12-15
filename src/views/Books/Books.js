import BookList from '../../components/Books/BookList';
import React from 'react';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    bookList();
  }, []);
  const bookList = async () => {
    const resp = await fetchBooks();
    setData(resp);
  };
  // get books by getting api from fetch
  // pass those books to booklist, like i did with films
  return (
    <div>
      <h1>Books</h1>
      <BookList books={data} />
    </div>
  );
}
