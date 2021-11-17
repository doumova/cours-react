import './App.css';


const firstBook ={
  img:'https://m.media-amazon.com/images/I/81W28TNCDFL._AC_UL320_.jpg',
  author:'René Goscinny',
  title:'Astérix - Astérix et le Griffon'
};
const secondBook ={
  img:'https://m.media-amazon.com/images/I/81W28TNCDFL._AC_UL320_.jpg',
  author:'Modou Gueye',
  title:'La Foret',
  data:'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1511b6482e6a1b80dd0216332982e4a5#'
};

function App() {
    
    const Book = (props)=>{
      console.log(props);
    return <article className="membre">
    <img src={props.img} alt=""/>
      <h1>{props.title}</h1>
      <h5>{props.author} </h5>
    </article>;
  };
 
  return (
    <section className="memberList">
       <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />



    </section>
  );
}
export default App;