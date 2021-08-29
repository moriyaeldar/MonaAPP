const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { BookDetails } from "./js/apps/book/pages/BookDetails.jsx"
import { BookApp } from "./js/apps/book/pages/BookApp.jsx"
import { KeepApp } from "./js/apps/keep/pages/keep-app.jsx"
import { MailApp } from "./js/apps/mail/pages/email-app.jsx"
import { About } from "./js/pages/app-about.jsx";
import { Home } from "./js/pages/app-home.jsx";
import { AppHeader } from "./js/cmps/app-header.jsx";
import { AppBottom } from "./js/cmps/app-buttom.jsx";

export function App() {
  
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/mail" component={MailApp} />
          <Route path="/KeepApp" component={KeepApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <AppBottom/>
    </Router>
  );
}
