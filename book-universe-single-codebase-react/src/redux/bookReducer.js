import { createSlice } from '@reduxjs/toolkit';

export const bookReducer = createSlice({
  name: 'book',
  initialState: {
    value: 0,
    list: [],
    total: 0,
  },
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    decrement: state => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    remove: (state, action) => {
      if (state.value >= 0) {
        state.list.splice(state.list.map(item => item.id).indexOf(action.payload.id), 1);
      }
      if (state.value === 0) {
        state.total = 0;
      }
    },
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    total: (state, action) => {
      state.total += action.payload
    },
    totalDecrement: (state, action) => {
      if (state.value > 0) {
        state.total -= action.payload
      }
    },
    clear: state => {
      state.value = 0;
      state.list = [];
      state.total = 0;
    }
  },
});

export const { increment, decrement, incrementByAmount, add, remove, list, total, totalDecrement, clear } = bookReducer.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addBook = item => dispatch => {
  dispatch(increment());
  dispatch(add(item));
  dispatch(total(item.price));
}

export const removeBook = item => dispatch => {
  dispatch(decrement());
  dispatch(remove(item));
  dispatch(totalDecrement(item.price));
}
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.book.value;

export const selectList = state => state.book.list;

export const selectListValue = state => state.book.value;

export const selectTotal = state => state.book.total;

export default bookReducer.reducer;
