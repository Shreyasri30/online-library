// Form to add a new book (Redux, validation, success modal).
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice.jsx";
import { useNavigate } from "react-router-dom";

const CATEGORY_OPTIONS = ["Fiction", "Non-Fiction", "Sci-Fi", "Self-Help", "Comic", "Rom-Com", "Biography", "Thriller", "Mystery"];

function AddBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    publishedDate: "",
    category: "",
    coverUrl: "",
    rating: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!form.author.trim()) newErrors.author = "Author is required.";
    if (!form.category) newErrors.category = "Pick a category.";
    if (!form.description.trim())
      newErrors.description = "Please add a brief description.";

    const ratingNumber = Number(form.rating);
    if (Number.isNaN(ratingNumber) || ratingNumber < 0 || ratingNumber > 5) {
      newErrors.rating = "Rating must be between 0 and 5.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    dispatch(
      addBook({
        ...form,
      })
    );

    setErrors({});
    setShowSuccess(true);
  };

  const handleModalClose = () => {
    setShowSuccess(false);
    navigate("/books");
  };

  return (
    <main className="page page--form">
      <section className="section section--narrow">
        <header className="section-header">
          <h1>Add New Book to Library</h1>
          <p>
            Fill in the details below. All required fields are marked with{" "}
            <span className="required">*</span>.
          </p>
        </header>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="title">
              Book Title <span className="required">*</span>
            </label>
            <input
              id="title"
              name="title"
              className={"input" + (errors.title ? " input--error" : "")}
              placeholder="Enter the book title"
              value={form.title}
              onChange={handleChange}
            />
            {errors.title && <p className="field-error">{errors.title}</p>}
          </div>

          <div className="form-row">
            <label htmlFor="author">
              Author Name <span className="required">*</span>
            </label>
            <input
              id="author"
              name="author"
              className={"input" + (errors.author ? " input--error" : "")}
              placeholder="Enter the author name"
              value={form.author}
              onChange={handleChange}
            />
            {errors.author && <p className="field-error">{errors.author}</p>}
          </div>

          <div className="form-row form-row--split">
            <div>
              <label htmlFor="publishedDate">Published Date</label>
              <input
                id="publishedDate"
                name="publishedDate"
                type="date"
                className="input"
                value={form.publishedDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="category">
                Category <span className="required">*</span>
              </label>
              <select
                id="category"
                name="category"
                className={"input" + (errors.category ? " input--error" : "")}
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="field-error">{errors.category}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="coverUrl">Cover Image Link (optional)</label>
            <input
              id="coverUrl"
              name="coverUrl"
              className="input"
              placeholder="e.g., https://example.com/example.jpg"
              value={form.coverUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label htmlFor="rating">
              Rating (0 - 5) <span className="required">*</span>
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              className={"input input--small" + (errors.rating ? " input--error" : "")}
              value={form.rating}
              onChange={handleChange}
            />
            {errors.rating && <p className="field-error">{errors.rating}</p>}
          </div>

          <div className="form-row">
            <label htmlFor="description">
              Brief Description <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className={
                "textarea" + (errors.description ? " input--error" : "")
              }
              rows="4"
              placeholder="Describe the book in a few lines"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="field-error">{errors.description}</p>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
          </div>
        </form>
      </section>

      {showSuccess && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Success!</h2>
            <p>The book has been added to the library.</p>
            <button className="btn btn-primary" onClick={handleModalClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default AddBookPage;
