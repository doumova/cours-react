import './App.css';
import {books} from './data'


function App() {
    const clickHandler=(e)=>{
      console.log(e);
      console.log(e.target);
    };
    const Book = (props)=>{
      const {img,title,author} = props.book;
    return <article className="membre" onMouseOver={()=>{console.log(title)}} >
    <img src={img} alt=""/>
      <h1>{title}</h1>
      <h5>{author} </h5>
      <button type="button" onClick={()=>{console.log(title)}}>test button</button>
      <button type="button" onClick={clickHandler}>test click handle</button>

    </article>;
  };
 
  return (
    <section className="memberList">
      {books.map((book)=>{
        // const {img, author, title} = book;
        console.log(book);
        return <Book key={book.id} book={book}></Book>;
      })}


       {/* <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
         <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à 
           titre provisoire pour calibrer une mise en page, le texte définitif venant
            remplacer le faux-texte dès qu'il est prêt ou
          </p>
       </Book>
       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} /> */}




    </section>
  );
}
export default App;