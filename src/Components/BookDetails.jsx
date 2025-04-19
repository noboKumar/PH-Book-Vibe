import React from "react";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const bookData = useLoaderData();

  const singleBook = bookData.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const {
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    review,
    totalPages,
  } = singleBook;

  return (
    <div className="w-11/12 mx-auto flex items-center gap-12 text-xl">
      <div className="flex-11/12 bg-gray-100 p-16 rounded-xl">
        <img className="rounded" src={image} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl">{bookName}</h1>
        <p className="text-2xl">By: {publisher}</p>
        <hr className="border-gray-300 border-2 rounded my-5"/>
        <p>{category}</p>
        <hr className="border-gray-300 border-2 rounded my-5"/>
        <p>
          <span className="font-bold">Review:</span> {review}
        </p>

        <div className="flex gap-5">
          <p className="font-bold">Tags: </p>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <p className="bg-gray-100 rounded-xl px-5 py-1 text-[#23BE0A]" key={index}> #{tag}</p>
            ))}
          </div>
        </div>
        <hr className="border-gray-300 border-2 rounded my-5" />

        <div className="space-y-2">
          <p>Number ofPages: {totalPages}</p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
        </div>
        <div className="space-x-2">
          <button className="btn">Read</button>
          <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
