import { createContext, useContext, useReducer } from "react"
import { BookReducer, initialBookState } from "../reducers/BookReducer";

const BookContext=createContext();

// eslint-disable-next-line react/prop-types
export const BookContextProvider=({children})=>{


    const [bookState,bookDispatch]=useReducer(BookReducer,initialBookState);


    return(
        <BookContext.Provider value={{bookState,bookDispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export const useBookContext=()=>useContext(BookContext);