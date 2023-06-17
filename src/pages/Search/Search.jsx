import { useState } from "react"
import "./Search.css"
import { useBookContext } from "../../context/BookContext";
import { BookCard } from "../../components/BookCard/BookCard";
import { useNavigate } from "react-router-dom";


export const Search = () => {

  const navigate=useNavigate();
  const [searchedBooks,setSearchedBooks]=useState([]);
  const{bookState}=useBookContext();
  const handelSearch=(e)=>{
    console.log(e.target.value)
    setSearchedBooks(bookState.booksData.filter(({title})=>title.toLowerCase().includes(e.target.value.toLowerCase())))

    

  }
  return (
   <div className="searchContainer" >
    <div className="inputContainer">
    <span className="homeIcon" onClick={()=>navigate("/")}>🡸</span>
      <input className="text"
          
          placeholder="Try typing Brave New World"
        
          onChange={(e)=>handelSearch(e)}
        />
      
    </div>


    <div className="resultContainer"  style={{ marginTop: "20px"}}>
    <div className="booksDisplay">
      {searchedBooks.length===0 && <div>Search Books using their Name...</div>}
      {searchedBooks.length>0 && searchedBooks.map((data) => (
              <BookCard data={data} key={data.id} />
            ))}

    </div>
    </div>
   </div>
  )
}
