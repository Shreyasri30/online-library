// 404 page without header. Shows invalid URL and link back home.

import { Link, useLocation } from "react-router-dom";

function NotFoundPage() {
  const location = useLocation();

  return (
    <main className="page page--notfound">
      <section className="section section--narrow">
        <div className="empty-state empty-state--border">
          <h1>404 – Page Not Found</h1>
          <p>
            The URL <code>{location.pathname}</code> does not exist in this
            application.
          </p>
          <p>Please check the address or return to the home page.</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
