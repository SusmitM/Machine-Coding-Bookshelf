/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BookCard.css";
import { useBookContext } from "../../context/BookContext";
// eslint-disable-next-line react/prop-types
export const BookCard = ({ data }) => {
  const {bookDispatch}=useBookContext()
  const { id, title, author, image, category } = data;

  const [showDropDown,setShowDropDown]=useState(false);
  const categories=["Read","Currently_Reading","Want_To_Read","None"];

  const changeCategory=(id,bookCategory,category)=>{
    console.log(id,bookCategory)
    if(category==="Read"){
      bookDispatch({
        type:"MoveFromRead",
        selectedId:id,
        MoveToCategory:bookCategory
      })
    }
    if(category==="Currently_Reading"){
      bookDispatch({
        type:"MoveFromCurrentlyReading",
        selectedId:id,
        MoveToCategory:bookCategory
      })
    }
    if(category==="Want_To_Read"){
      bookDispatch({
        type:"MoveFromWantToRead",
        selectedId:id,
        MoveToCategory:bookCategory
      })
    }
   
  }

  return (
    <div className="bookCard">
      <div className="imgSection">
        <img src={image} alt="bookImage" />
        <button className="categoryBtn" onClick={()=>setShowDropDown(prev=>!prev)}>🢃</button>
        <div className="dropdown-content" style={{display: showDropDown ? "":"none"}}>
          <span>Move To</span>
          {categories.map(bookCategory=><div key={bookCategory} onClick={()=>changeCategory(id,bookCategory,category)}><span style={{display:bookCategory===category ? "" :"none"}}>✅</span>{bookCategory}</div>)}
         
        </div>
      </div>
      <div className="detailsSection">
        <div className="title">{title}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
};
