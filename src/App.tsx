import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../src/globalStyles";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import PrivateRoute from "../src/components/routing/PrivateRoute";
// import AuthState from "../src/context/auth/AuthState";
import UserState from "./context/users/UserState";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/auth/Login";
import NotFound from "./components/pages/NotFound";

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <AuthState> */}
      <UserState>
        <Router>
          <GlobalStyle />
          <Fragment>
            <Navbar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/login' component={Login} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </Fragment>
        </Router>
      </UserState>
      {/* </AuthState> */}
    </Fragment>
  );
};

export default App;
