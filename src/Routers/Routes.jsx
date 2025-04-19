import React from "react";
import { createBrowserRouter } from "react-router";
import ListedBook from "../Components/ListedBook";
import Root from "./Root";
import Home from "../Components/Home";
import PagesToRead from "../Components/PagesToRead";
import BookDetails from "../Components/BookDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/listedBook",
        Component: ListedBook,
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
      },
      {
        path: "/BookDetails/:id",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
