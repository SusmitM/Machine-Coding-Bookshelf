/* eslint-disable no-unused-vars */
import { useBookContext } from "../../context/BookContext";
import "./Main.css";
import { BookCard } from "../../components/BookCard/BookCard";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const navigate=useNavigate();
  const { bookState } = useBookContext();
  
  return (
    <div className="MainSection">
      <h1>MY BOOKSHELF</h1>
      <button onClick={()=>navigate("/search")}>Search Books</button>

      <section className="ReadSection">
        <h1>Already Read</h1>
        <div className="booksDisplay">
          {(bookState.Read.length === 0 && <div>No Books in Read Section</div>)}
          {bookState.Read.length > 0 &&
            bookState.Read.map((data) => (
              <BookCard data={data} key={data.id} />
            ))}
        </div>
      </section>
      <section className="CurrentlyReadingSection">
        <h1>Currently Reading</h1>
        <div className="booksDisplay">
          {
            (bookState.Currently_Reading.length === 0 && (
              <div>No Books in Currently Reading Section</div>
            ))
          }
          {bookState.Currently_Reading.length > 0 &&
            bookState.Currently_Reading.map((data) => (
              <BookCard data={data} key={data.id} />
            ))}
        </div>
      </section>
      <section className="WantToReadSection">
        <h1>Want To Read</h1>
        <div className="booksDisplay">
          {
            (bookState.Want_To_Read.length === 0 && (
              <div>No Books in Want to Read Section</div>
            ))
          }

          {bookState.Want_To_Read.length > 0 &&
            bookState.Want_To_Read.map((data) => (
              <BookCard data={data} key={data.id} />
            ))}
        </div>
      </section>
    </div>
  );
};
