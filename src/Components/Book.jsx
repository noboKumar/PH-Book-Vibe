import { Star, StarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = book;
  console.log(book);
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="border-2 border-gray-300 rounded-xl cursor-pointer">
        <div className="bg-gray-200 rounded-xl m-6 p-6">
          <img className="w-2/6 h-60 rounded mx-auto" src={image} alt="" />
        </div>
        <div className="p-6 space-y-4">
          <div>
            {tags.map((tags) => (
              <span className="bg-gray-200 text-[#23BE0A] rounded py-2 px-4 mx-2">
                {tags}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">
              {bookName}
              <span> ({yearOfPublishing})</span>
            </h1>
            <p className="text-xl">By: {publisher}</p>
          </div>
          <hr className="border-2 border-gray-200 border-dashed" />
          <div className="text-xl flex justify-between">
            <h1>{category}</h1>
            <div className="flex items-center gap-2">
              <p>{rating}</p>
              <StarIcon size={20}></StarIcon>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
