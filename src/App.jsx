// Main routing and layout. 404 route has no Header.
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BrowseBooksPage from "./pages/BrowseBooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import AddBookPage from "./pages/AddBookPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer"; 

// Layout for normal pages (with header)
function LayoutWithHeader() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />   
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<HomePage />} />

        {/* Browse all and by category (dynamic route) */}
        <Route path="/books" element={<BrowseBooksPage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />

        {/* Book details */}
        <Route path="/book/:bookId" element={<BookDetailsPage />} />

        {/* Add new book */}
        <Route path="/addbook" element={<AddBookPage />} />
      </Route>

      {/* 404 - without header */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}


export default App;
