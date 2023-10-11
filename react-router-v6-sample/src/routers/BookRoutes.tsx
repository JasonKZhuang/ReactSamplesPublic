import {Route, Routes} from "react-router-dom";
import BookList from "../pages/BookList";
import Book from "../pages/Book";
import BookNew from "../pages/BookNew";
import BookNavigation from "../navigation/BookNavigation";

function BookRoutes() {
    return (
        <>
            <Routes>
                <Route element = {<BookNavigation/>}>
                <Route index element={<BookList/>}/>
                <Route path="new" element={<BookNew/>}/>
                <Route path=":id" element={<Book/>}/>
                </Route>
            </Routes>

        </>
    );
}

export default BookRoutes;
