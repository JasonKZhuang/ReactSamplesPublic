import {useState} from "react";
import {useOutletContext} from "react-router-dom";
import "../css/BookPage.css";
import "../css/NewBookPage.css";

function BookNew() {
    const [count, setCount] = useState(0);
    const obj: any = useOutletContext();
    return (
        <div className="book-card">
            <h2>This is new book page</h2>
            <button className="btn-new-book" onClick={() => setCount(count + 1)}>
                New Book [{count}]
            </button>
            {obj.hello}
        </div>
    );
}

export default BookNew;
