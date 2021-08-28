const { Link } = ReactRouterDOM;

import { noteService } from "../services/note.service.js";
import { eventBusService } from "../../../services/event-bus-service.js";
export class noteDetails extends React.Component{
  state={
      note:null
  }

componentDidMount() {
    this.loadNote();
  }

  loadNote = () => {
    const id = this.props.match.params.noteId;
    noteService.getNoteById(id).then((note) => {
      if (!book) this.props.history.push("/");
      this.setState({ note });
    });
  };


    render(){
        const { note } = this.state;
  return (
<div>   { 
!note ?<p>loading...</p>:
   <section className="note-details">
      <h2>Title:{book.title}</h2>
      <img src={book.thumbnail} alt="" />
      <h4>Subtitle:{book.subtitle}</h4>
      <h4>Authors:{book.authors}</h4>
      <h4>Description:{book.description}</h4>
      <h3>
        Price:{book.listPrice.amount}
        {
          {
            ILS: "₪",
            USD: "$",
            EUR: "€",
          }[book.listPrice.currencyCode]
        }
      </h3>
      <h4>Page count:{book.pageCount} </h4>
      <h4>
        {book.pageCount > 500 && " Long reading"}
        {book.pageCount < 500 && "Decent Reading"}
        {book.pageCount < 100 && "Light Reading"}
      </h4>

      <h3>published Date:{book.publishedDate} </h3>
      <h4>
        {book.publishedDate < 2011 && "Veteran Book"}
        {book.publishedDate > 2020 && "New!"}
      </h4>
      <h3>Categories:{book.categories}</h3>
      <h5>Language:{book.language}</h5>
      

      <h1>
        {book.listPrice.isOnSale && (
          <img className="sale" src="../assets/img/sale.jpg" alt=""></img>
        )}
      </h1>
      <Link to={`/book/add/${book.id}`}>
        <button className="write-review">write review</button>
      </Link>
      <h4>{book.reviews}</h4>
      
          <Link to={`/book/${booksService.getPrevBookId(book.id)}`}> <button className="back-btn">Previous-Book</button></Link>
          <Link to={`/book/${booksService.getNextBookId(book.id)}`}> <button className="next-btn">Next-Book</button></Link>


    </section>}
    </div> 
  );
}
}