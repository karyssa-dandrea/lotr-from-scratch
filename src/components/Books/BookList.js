import React from 'react';

export default function BookList({ books }) {
  return (
    <section className="books">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <div className="book-content">
            <h1>{book.title}</h1>
            <p>{book.created}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
