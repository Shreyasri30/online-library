// Landing page with intro, category and popular books.
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CATEGORY_FILTERS = ["all", "Fiction", "Non-Fiction", "Sci-Fi", "Self-Help"];

function HomePage() {
  const books = useSelector((state) => state.books.list);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const popularBooks = filtered.slice(0, 4);

  return (
    <main className="page page--home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Welcome to the Online Library</p>
          <h1 className="hero-title">Fuel your reading list in one place.</h1>
          <p className="hero-subtitle">
            Discover fiction, non-fiction, sci-fi and self-help books. Browse by
            category, view details, and add your favourite titles to the
            collection.
          </p>

          <div className="hero-actions">
            <Link to="/books" className="btn btn-primary">
              Browse Books
            </Link>
            <Link to="/addbook" className="btn btn-outline">
              Add a New Book
            </Link>
          </div>

          <div className="hero-breadcrumb">
            <span>Quick links:</span>
            <Link to="/books">Browse Books</Link>
            <span>•</span>
            <Link to="/addbook">Add Book</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Categories</h2>
          <p>Tap a category to filter popular books below.</p>
        </header>

        <div className="pill-row">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={
                "pill" +
                (selectedCategory === cat ? " pill--active" : "")
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2>Popular Books in {selectedCategory === "all" ? "All" : selectedCategory}</h2>
        </header>

        {popularBooks.length === 0 ? (
          <div className="empty-state">
            <p>No books yet. Try adding a new book from the <Link to="/addbook">Add Book</Link> page.</p>
          </div>
        ) : (
          <div className="card-grid">
            {popularBooks.map((book) => (
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
                    {book.description.length > 120
                      ? book.description.slice(0, 120) + "…"
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

export default HomePage;
