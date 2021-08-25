const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { AddReview } from "./cmps/AddReview.jsx";
import { UserMsg } from "./cmps/UserMsg.jsx";

export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
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
