import "./MainApp.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BookRoutes from "./routers/BookRoutes";
import MainNavigation from "./navigation/MainNavigation";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <MainNavigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books/*" element={<BookRoutes/>}/>
                {/*
                  <Route path="/books" element={<BookList />} />
                  <Route path="/books" element={<h1>Extra Contents</h1>}/>
                  <Route path="/books/:id" element={<Book />} />
                  <Route path="/books/new" element={<BookNew />} />
                */}
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
