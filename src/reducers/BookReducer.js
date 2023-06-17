/* eslint-disable no-case-declarations */
import {
    bookData
} from "../data"
export const BookReducer = (bookState, action) => {
    switch (action.type) {
        case "MoveFromRead": {
            const selectedBook = bookState.booksData.find(({
                id
            }) => id === action.selectedId);
            const updatedCategory = action.MoveToCategory;
            selectedBook.category=updatedCategory;
            const updatedState = {
                ...bookState,
                Read: bookState.Read.filter(data => data.id !== action.selectedId),
            };
            updatedState[updatedCategory] = [...bookState[updatedCategory], selectedBook];
            return updatedState;
        }

        case "MoveFromCurrentlyReading": {
            const selectedBook = bookState.booksData.find(({
                id
            }) => id === action.selectedId);
            const updatedCategory = action.MoveToCategory;
            selectedBook.category=updatedCategory;
            const updatedState = {
                ...bookState,
                Currently_Reading: bookState.Currently_Reading.filter(data => data.id !== action.selectedId),
            };
            updatedState[updatedCategory] = [...bookState[updatedCategory], selectedBook];
            return updatedState;
        }

        case "MoveFromWantToRead": {
            const selectedBook = bookState.booksData.find(({
                id
            }) => id === action.selectedId);
            const updatedCategory = action.MoveToCategory;
            selectedBook.category=updatedCategory;
            const updatedState = {
                ...bookState,
                Want_To_Read: bookState.Want_To_Read.filter(data => data.id !== action.selectedId),
            };
            updatedState[updatedCategory] = [...bookState[updatedCategory], selectedBook];
            return updatedState;
        }


        default:
            return bookState;
    }
};




export const initialBookState = {
    booksData: bookData,
    Read: bookData.filter(({
        category
    }) => category === "Read"),
    Currently_Reading: bookData.filter(({
        category
    }) => category === "Currently_Reading"),
    Want_To_Read: bookData.filter(({
        category
    }) => category === "Want_To_Read"),
    None:[]
};