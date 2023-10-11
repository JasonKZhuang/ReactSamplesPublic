import { Link, NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to={"/"} replace reloadDocument>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/books"} state={{ myKey: "myValue" }}>
            BookList
          </Link>
        </li>
        <li>
          <Link state={{ myKey: "myValue" }} to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "red" } : { color: "yellow" };
            }}
            to={"/contact"}
          >
            {({ isActive }) => {
              return isActive ? "Active Contact" : "Contact";
            }}
          </NavLink>
        </li>
        <li>
          <Link to={"/Coming"}>Coming Soon</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
