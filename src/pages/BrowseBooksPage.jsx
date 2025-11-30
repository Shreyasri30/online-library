// Full browse page with search and category routing.
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const CATEGORY_FILTERS = ["all", "Fiction", "Non-Fiction", "Sci-Fi", "Self-Help", "Comic", "Rom-Com", "Biography", "Thriller", "Mystery"];

function BrowseBooksPage() {
  const books = useSelector((state) => state.books.list);
  const { category } = useParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const selectedCategory = CATEGORY_FILTERS.includes(category)
    ? category
    : "all";

  const handleCategoryClick = (cat) => {
    if (cat === "all") {
      navigate("/books");
    } else {
      navigate(`/books/${cat}`);
    }
  };

  const visibleBooks = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? books
        : books.filter((b) => b.category === selectedCategory);

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title.toLowerCase().includes(term) ||
          b.author.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [books, selectedCategory, searchTerm]);

  return (
    <main className="page page--browse">
      <section className="section section--narrow">
        <header className="section-header">
          <h1>Search Books by Name or Author</h1>
          <p>
            Use the search bar and category filters to quickly find the book
            you are looking for.
          </p>
        </header>

        <form
          className="search-panel"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="input"
            placeholder="Search by book name or author name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="filter-header">
          <p>
            Showing results for{" "}
            <strong>
              {selectedCategory === "all" ? "all categories" : selectedCategory}
            </strong>
            {searchTerm && (
              <>
                {" "}
                with search term <strong>"{searchTerm}"</strong>
              </>
            )}
          </p>
        </div>

        <div className="pill-row pill-row--wrap">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={
                "pill" + (selectedCategory === cat ? " pill--active" : "")
              }
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>

        {visibleBooks.length === 0 ? (
          <div className="empty-state empty-state--border">
            <p>No books match your filters.</p>
            <p>
              Try clearing the search or{" "}
              <Link to="/addbook">add a new book</Link>.
            </p>
          </div>
        ) : (
          <div className="card-grid card-grid--browse">
            {visibleBooks.map((book) => (
              <article key={book.id} className="book-card">
                <div className="book-card-cover">
                  {book.coverUrl ? (
                    <img src={book.coverUrl} alt={book.title} />
                  ) : (
                    <span className="book-card-letter">
                      {book.title.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="book-card-body">
                  <h3 className="book-card-title">{book.title}</h3>
                  <p className="book-card-author">by {book.author}</p>
                  <div className="book-card-meta">
                    <span className="badge badge-soft">{book.category}</span>
                    <span className="rating">
                      ★ {book.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="book-card-description">
                    {book.description.length > 140
                      ? book.description.slice(0, 140) + "…"
                      : book.description}
                  </p>
                  <Link to={`/book/${book.id}`} className="book-card-link">
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default BrowseBooksPage;
