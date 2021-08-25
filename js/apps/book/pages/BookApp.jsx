import { booksService } from "../services/Bookservice.js";
import { BookFilter } from "../cmps/BookFilter.jsx";
import { BookList } from "../cmps/BookList.jsx";
import { GoogleBooks } from "../cmps/GoogleBooks.jsx";
import { GoogleBooksList } from "../cmps/GoogleBooksList.jsx";
import { googleService } from "../services/google.service.js";
import { eventBusService } from '../services/event-bus-service.js';


export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
    googleBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    booksService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  onSearchGoogle = (data) => {
    if (!data) return this.setState({ googleBooks: [] })
    googleService.getGoogleBooks(data.toLowerCase())
      .then(googleBooks => {
        this.setState({ googleBooks })
      })
  }

  onAddGoogleBook = (googleBook) => {
    booksService.addGoogleBook(googleBook)
      .then(txt => {
        eventBusService.emit('user-msg', { txt, type: 'success', bookId: googleBook.id })
        this.loadBooks()
      })
      .catch(txt => {
        eventBusService.emit('user-msg', { txt, type: 'danger' })
      })
  }

  render() {
    const { books, googleBooks } = this.state;
    return (
      <section className="Book-app">
            <BookFilter onSetFilter={this.onSetFilter} />
            <GoogleBooks onSearchGoogle={this.onSearchGoogle} />
        {!googleBooks && <p>no results</p>}
        {googleBooks.length > 0 && <GoogleBooksList gBooks={googleBooks} onAddGoogleBook={this.onAddGoogleBook} />}
            <BookList books={books}  />
      </section>
    );
  }
}
