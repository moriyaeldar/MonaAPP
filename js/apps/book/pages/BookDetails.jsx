const { Link } = ReactRouterDOM;
import { LongTxt } from '../cmps/LongTxt.jsx'
import { ReviewList } from '../cmps/ReviewList.jsx';
import { booksService } from '../services/book.service.js'
import { AddReview } from '../cmps/AddReview.jsx';

export class BookDetails extends React.Component {
  state = {
    book: null,
    isAddReviewOpen: false
  }

  componentDidMount() {
    this.loadBook()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.loadBook()
    }

  }

  getPageDesc = () => {
    const { pageCount } = this.state.book;
    if (pageCount > 500) {
      return "Long reading";
    } else if (pageCount > 100) {
      return "Decent Reading";
    } else {
      return "Light Reading";
    }
  };

  getPublishedDateDesc = () => {
    let diffYears = new Date().getFullYear() - this.state.book.publishedDate;
    if (diffYears > 10) {
      return "Veteran Book";
    } else {
      return "New";
    }
  };

  loadBook = () => {
    console.log("loading book");
    const id = this.props.match.params.bookId
    console.log('id got from page:', id);
    booksService.getBookById(id)
      .then(book => {
        console.log(book);
        if (!book) this.props.history.push('/book')
        else {
          this.setState({ book })
        }
      })
  }

  onDeleteBook = () => {
    booksService.deleteBook(this.state.book.id).then(this.onBack)
  }

  onRemoveReview = (review) => {
    booksService.deleteReview(this.state.book.id, review)
      .then(this.loadBook);
  }

  onAddReview = (review) => {
    booksService.addReview(this.state.book.id, review)
      .then(this.loadBook);
  }

  openAddReview = () => {
    let isAdd = this.state.isAddReviewOpen;
    isAdd = isAdd ? false : true;
    this.setState({ isAddReviewOpen: isAdd });
  }

  onBack = () => {
    this.props.history.push('/book')
  }

  render() {
    console.log('RENDERD!');
    const { book } = this.state
    if (!book) return <div>Loading...</div>
    return (
      <section className='book-details'>
        <h2 className='book-title'>{book.title} </h2>
        <h3 className='book-subtitle'>"{book.subtitle}"</h3>
        <h3 className={(book.listPrice.amount > 150 ? 'red' : 'green')}>Price:{book.listPrice.amount}{{
          'ILS': '₪',
          'USD': '$',
          'EUR': '€'
        }[book.listPrice.currencyCode]}
        </h3>
        <h4>Key words:
          <span>{this.getPageDesc()}</span>
          <span>{this.getPublishedDateDesc()}</span>
        </h4>
        <h4>Authors:{book.authors}</h4>
        <LongTxt text={book.description} />
        <button className="write-review-btn" onClick={this.openAddReview}>Write a Review</button>
        {this.state.isAddReviewOpen &&
        <AddReview onAddReview={this.onAddReview}/>
        }
        <ReviewList book={book} onRemoveReview={this.onRemoveReview} />
        <h4>Page count:{book.pageCount} </h4>
        <h3>published Date:{book.publishedDate} </h3>
        <h4>
        </h4>
        <h3>Categories:{book.categories}</h3>
        <h5>Language:{book.language}</h5>
        <img src={book.thumbnail} />

        <button onClick={this.onBack}>Go Back</button>
      </section>);
  }

}