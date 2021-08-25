const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { EmailCompose } from "./js/apps/mail/cmps/email-compose.jsx"
import { KeepApp } from "./js/apps/keep/pages/keep-app.jsx"
import { MailApp } from "./js/apps/mail/pages/email-app.jsx"
import { About } from "./js/pages/app-about.jsx";
import { Home } from "./js/pages/app-home.jsx";
import { AppHeader } from "./js/cmps/app-header.jsx";

export function App() {
  return (
    <Router>
      <header>
        <AppHeader />
      </header>
      <main>
        <Switch>
          <Route path="/mail/mail-compose" component={EmailCompose} />
          <Route path="/KeepApp" component={KeepApp} />
          <Route path="/mail" component={MailApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
