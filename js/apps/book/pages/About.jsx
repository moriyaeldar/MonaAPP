const { NavLink, Route } = ReactRouterDOM;
export function About() {
  return (
    <section className="about">
      <h3>About</h3>
      <p>
        Our site present many kindes of books, you can search for your favorite
        or just walk around and see everything we have
      </p>
      <img className="aboutpic" src="assets/img/books.jpg" />
    </section>
  );
}
