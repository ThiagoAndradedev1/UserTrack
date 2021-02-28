import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "../src/globalStyles";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import UserState from "./context/users/UserState";
import AuthState from "./context/auth/AuthState";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/auth/Login";
import NotFound from "./components/pages/NotFound";
import UserTable from "./components/users/UserTable";
import UserForm from "./components/users/UserForm";
import { ProtectedRoute } from "./components/routing/PrivateRoute";

const App: React.FC = () => {
  return (
    <Fragment>
      <AuthState>
        <UserState>
          <Router>
            <GlobalStyle />
            <Fragment>
              <Navbar />
              <Container style={{ marginTop: "3em" }}>
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={Login} />
                  <ProtectedRoute exact path="/users" component={UserTable} />
                  <ProtectedRoute exact path="/userform" component={UserForm} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Fragment>
          </Router>
        </UserState>
      </AuthState>
    </Fragment>
  );
};

export default App;
