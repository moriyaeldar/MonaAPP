const { NavLink, withRouter } = ReactRouterDOM;
export function AppHeader() {
  return (
    <section className="app-header flex space-between">
      <h1>
        MonaApp<span>.</span>
      </h1>
      <nav>
        <ul className="main-nav clean-list">
         <a><NavLink to="/">Home</NavLink></a>
         <a><NavLink to="/about">About</NavLink></a>
         <a><NavLink to="/mail">Mail</NavLink></a>
         <a><NavLink to="/book">Book</NavLink></a>
         <a><NavLink to="/KeepApp">Keep</NavLink></a>
        </ul>
      </nav>
      <button className ="btn-menu-toggle" >☰</button>

    </section>
  );
}
