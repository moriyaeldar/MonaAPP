const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;


import { } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { UserMsg } from "./cmps/UserMsg.jsx";

export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <h1>Naama is in the house</h1>
        <Switch>
          <Route path="/book/add/:bookId" component={AddReview} />
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <BookApp />
        </Switch>
      </main>
      <UserMsg/>
    </Router>
  );
}
