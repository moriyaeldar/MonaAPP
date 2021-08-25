const { NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {
    return (
        <section className="app-header">
            <h1>MonaApp</h1>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/book" >Book</NavLink>
                <NavLink to="/mail" >Mail</NavLink>
                <NavLink to="/keep" >Keep</NavLink>
            </nav>
        </section>
    )
}