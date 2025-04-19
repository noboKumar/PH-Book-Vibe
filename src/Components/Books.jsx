import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBookData(data));
  }, []);
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h1 className="text-4xl text-center font-bold">Books</h1>
      <div className="grid grid-cols-3 my-10 gap-6">
        {bookData.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
