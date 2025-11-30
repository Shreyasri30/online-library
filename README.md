# **Online Library**

A fully functional online library system built using **React + Vite** with state management handled via **Redux Toolkit**.
Users can explore books, browse by category, search by title or author, add new books to the library, and view detailed information for each book.

This project has been developed as part of **React Assignment – Module 5** (Internshala Trainings).

Repository:
**[https://github.com/Shreyasri30/online-library](https://github.com/Shreyasri30/online-library)**

---

## **1. Features**

### **Core User Flows**

---

### **Home Page**

* Displays a welcome message and introduction.
* Shows book categories (Fiction, Non-Fiction, Sci-Fi, Self-Help).
* Displays popular books as cards.
* Provides navigation to Browse Books and Add Book.

---

### **Browse Books Page**

* Lists all books available in the library.
* Filter books by category using dynamic routes (e.g., `/books/fiction`).
* Search functionality to filter books by **title** or **author**.
* Each book card includes a **View Details** button.

---

### **Book Details Page**

* Dynamic route `/books/details/:bookId`.
* Shows full information: title, author, category, rating, description.
* Includes a **Back to Browse** button.

---

### **Add Book Page**

* Fully validated form to add a new book.
* Integrated with **Redux Toolkit** to update global state.
* Newly added book appears **at the top** of the Browse Books page.
* Form validation ensures:

  * Title is required
  * Author is required
  * Category selection is mandatory
  * Rating must be between 0 and 5
  * Description is required

---

### **404 Page**

* Handles undefined routes.
* Displays the invalid URL entered by the user.
* Does **not** include the Header component.
* Provides a link back to the Home page.

---

### **Styling and UX**

* Fully responsive layout.
* Clean, modern design using **CSS**.
* Consistent color theme with draggable shadows, rounded cards, smooth spacing, and readable typography.
* User-friendly layout for forms, lists, and navigation.

---

## **2. Tech Stack**

* **React**
* **Vite**
* **Redux Toolkit**
* **React Router DOM**
* **Tailwind CSS**
* **JavaScript (ES6+)**

---

## **3. Project Structure**

```
online-library/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │
│   ├── data/
│   │   └── books.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── BrowseBooksPage.jsx
│   │   ├── BookDetailsPage.jsx
│   │   ├── AddBookPage.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── store/
│   │   ├── booksSlice.jsx
│   │   └── store.js
│   │
│   ├── styles/
│   │   └── App.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

## **4. How to Run the Project**

### **Prerequisites**

Ensure the following are installed:

* Node.js (LTS version recommended)
* npm or yarn

---

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Shreyasri30/online-library

# Navigate into the project directory
cd online-library

# Install dependencies
npm install
```

---

### **Start Development Server**

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

### **Build for Production**

```bash
npm run build
```

---

## **5. State Management (Redux)**

* The entire book collection is stored in **Redux global state**.
* Adding a new book dispatches `addBook()` action.
* The Redux store persists only in frontend memory (no backend).

---

## **6. Assignment Compliance**

This project fully satisfies all requirements:

✔ Vite used
✔ Home Page
✔ Browse Books Page
✔ Category filter + Dynamic routing
✔ Search functionality
✔ Book Details Page
✔ Add Book Page + Redux + Validation
✔ 404 Page
✔ Clean UI with Tailwind
✔ 10+ relevant GitHub commits
✔ README with all instructions
✔ Comments added throughout the codebase

