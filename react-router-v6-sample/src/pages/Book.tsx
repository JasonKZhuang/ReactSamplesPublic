import { useReducer, useState } from "react";
import { useParams, useOutletContext, useSearchParams } from "react-router-dom";
import "../css/BookPage.css";

function Book() {
  // useParams is important to receive the parameter from parent router
  const { id } = useParams();
  // const obj:any = useOutletContext();

  return (
    <div className="book-card">
      <div>
        This is Book <h2>{id}</h2> Page
      </div>
      <div>{/* aaa {obj?.hello} */}</div>
    </div>
  );
}

export default Book;
