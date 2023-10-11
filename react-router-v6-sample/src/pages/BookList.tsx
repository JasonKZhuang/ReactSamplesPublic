import { useState } from "react";
import "../css/BookListPage.css";
import { Link, useSearchParams } from "react-router-dom";

function BookList() {
  const [number1, setNumber1] = useState("0");
  const [searchParams, setSearchParams] = useSearchParams({ n: "0" });

  console.log(searchParams.get("n"));

  const number2: any = searchParams.get("n");
  return (
    <div className="book-list-div">
      <h2> This is BookList Page</h2>
      {/* <Link to={`/books/${number2}`}>
        <h2>Book {number2}</h2>
      </Link> */}
      <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
      <input type="number" value={number2} onChange={(e) => setSearchParams({ n: e.target.value })} />
    </div>
  );
}

export default BookList;
