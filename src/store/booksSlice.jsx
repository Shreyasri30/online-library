// Redux slice for managing the list of books.
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: {
      reducer(state, action) {
        // Newest book appears first
        state.list.unshift(action.payload);
      },
      prepare({ title, author, category, description, rating, coverUrl, publishedDate }) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            author: author.trim(),
            category,
            description: description.trim(),
            rating: Number(rating),
            coverUrl: coverUrl?.trim() || "",
            publishedDate: publishedDate || "",
          },
        };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
