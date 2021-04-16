import { ADD_BOOK_REQUEST } from '../Types'


export const addBook = params => {
    return {
        type: ADD_BOOK_REQUEST,
        params
    }
}

