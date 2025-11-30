// Top navigation bar used on all pages.
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link to="/" className="brand">
          <div className="brand-circle">OL</div>
          <div className="brand-text">
            <span className="brand-title">Online Library</span>
            <span className="brand-tagline">Read • Discover • Add books</span>
          </div>
        </Link>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link--active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " nav-link--active" : "")
            }
          >
            Browse Books
          </NavLink>

          <NavLink to="/addbook" className="nav-button">
            Add Book
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
