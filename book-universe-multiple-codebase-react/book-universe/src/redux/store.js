import { configureStore } from '@reduxjs/toolkit';
import bookReducer from "./bookReducer";

export default configureStore({
  reducer: {
    book: bookReducer
  },
});
