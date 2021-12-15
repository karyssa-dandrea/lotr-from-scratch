import BookList from '../../components/Books/BookList';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    bookList();
  }, []);
  const bookList = async () => {
    const resp = await fetch('https://the-one-api.dev/v2/book/', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await resp.json();
    setData(data.docs);
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
