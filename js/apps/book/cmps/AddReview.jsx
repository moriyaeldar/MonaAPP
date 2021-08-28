import { booksService } from "../services/book.service.js";

export class AddReview extends React.Component {
    state = {
      book: "",
      review: {
        txt: null,
        rate: null,
        name: "Books Reader",
        date: new Date().toDateString()
      }
    }

    componentDidMount() {
        this.loadBook()
        
    }

    loadBook = () => {
        const id = this.props.match.params.bookId;
        booksService.getBookById(id).then((book) => {
          if (!book) this.props.history.push("/");
          this.setState({ book });
        });
      };
       
    onSubmitReview=(ev)=> {
        ev.preventDefault();
        booksService
          .addReview(this.state.book, this.state.review)
          .then(() => this.loadBook())
}    
      
      
    render() {
        const { book } = this.state;
        if (!book) return <div>loading...</div>;
      return(
          <section>
        <form id="review" onSubmit={this.onSubmitReview}>
        <h4>Review</h4>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <input type="text" name="name" id="name" placeholder="full name" />
        <input type="datetime-local" name="date" id="date" />
        <select name="stars" id="stars">
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        <button id="submit">Send </button>
      </form> 
</section>
      )
    }
   }
   
 