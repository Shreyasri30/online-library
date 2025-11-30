// Detailed view for a single book.
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function BookDetailsPage() {
  const { bookId } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id === bookId)
  );

  if (!book) {
    return (
      <main className="page page--details">
        <section className="section section--narrow">
          <div className="empty-state empty-state--border">
            <h1>Book not found</h1>
            <p>
              We couldn&apos;t find a book with that ID. It may have been
              removed or never existed.
            </p>
            <Link to="/books" className="btn btn-primary">
              Back to Browse
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page page--details">
      <section className="section section--narrow">
        <div className="details-layout">
          <div className="details-cover">
            {book.coverUrl ? (
              <img src={book.coverUrl} alt={book.title} />
            ) : (
              <div className="details-placeholder">
                {book.title.charAt(0)}
              </div>
            )}
          </div>

          <div className="details-content">
            <h1 className="details-title">{book.title}</h1>
            <p className="details-author">by {book.author}</p>

            <div className="details-meta">
              <span className="badge badge-soft">{book.category}</span>
              <span className="badge badge-rating">
                ★ {book.rating.toFixed(1)} <span>Rating</span>
              </span>
            </div>

            <div className="details-description">
              <h2>Description</h2>
              <p>{book.description}</p>
            </div>

            <div className="details-footer">
              {book.publishedDate && (
                <div className="details-field">
                  <span className="label">Published:</span>
                  <span>{book.publishedDate}</span>
                </div>
              )}

              <button
                type="button"
                className="btn btn-outline"
                onClick={() => window.history.back()}
              >
                Back to Browse
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookDetailsPage;
