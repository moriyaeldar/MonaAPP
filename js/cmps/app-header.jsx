const { NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {
    return (
        <section className="app-header">
            <h1>MonaApp<span>.</span></h1>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/mail" >Mail</NavLink>
                <NavLink to="/KeepApp" >Keep</NavLink>
            </nav>
        </section>
    )
}