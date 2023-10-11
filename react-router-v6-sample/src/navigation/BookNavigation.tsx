import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function BookNavigation() {
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/books/1">
            <h2>Book 1</h2>
          </Link>
        </li>
        <li>
          <Link to="/books/anyParameter">
            <h2>Book Any Parameter</h2>
          </Link>
        </li>
        <li>
          <Link to="/books/new">
            <h2>New Book with exact router name "new"</h2>
          </Link>
        </li>
        <Outlet context={{ hello: "world" }} />
      </ul>
    </>
  );
}

export default BookNavigation;
