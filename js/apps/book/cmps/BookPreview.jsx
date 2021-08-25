const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {
  return (
    <article className="book-preview">
      <h3>Title:{book.title}</h3>
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
      <img src={book.thumbnail} />
      <Link to={`/book/${book.id}`}>
        <button className="more-details">more details</button>
      </Link>
    </article>
  );
}
