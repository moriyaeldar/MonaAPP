const { Link } = ReactRouterDOM
const { NavLink, withRouter } = ReactRouterDOM;

export function _AppHeader() {
  return (
    <section className="app-header">
      <h1 onClick={() =><Link to={"/"}></Link>
 }>Miss Book</h1>

      <nav>
        <NavLink activeClassName="my-active" exact to="/">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/book">Our Books</NavLink>
      </nav>
    </section>
  );
}
export const AppHeader = withRouter(_AppHeader);