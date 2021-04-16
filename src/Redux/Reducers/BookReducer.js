import { ADD_BOOK_SUCCESS } from '../Types';
  
  const INITIAL_STATE = {
    bookList : [],
    counterid : 1,
  };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_BOOK_SUCCESS:
        return {
          ...state,
          addBookSuccess: true,
          addBookResponse: action.payload,
          bookList : [...state.bookList, action.payload],
          counterid : state.counterid++,
        };
  
      default:
        return state;
    }
  };