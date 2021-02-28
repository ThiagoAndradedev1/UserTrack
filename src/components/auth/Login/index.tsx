import React, { useContext } from "react";
import { Segment, Form, Grid, Header, Icon } from "semantic-ui-react";
import TextInput from "./TextInput";
import { StyledLabel, StyledButton } from "./LoginElements";
import AuthContext from "../../../context/auth/authContext";
import { RouteComponentProps } from "react-router-dom";
import { setTokenLocalStorage } from "../../../utils/utils";

interface ChildComponentProps extends RouteComponentProps {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
  const authContext = useContext(AuthContext);

  const { loading, login } = authContext;

  const handleSubmit = () => {
    login();
    history.push("/users");
    setTokenLocalStorage();
  };

  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Segment placeholder>
              <Header icon>
                <Icon disabled name="users" />
              </Header>{" "}
              <Form onSubmit={handleSubmit}>
                <StyledLabel>Email</StyledLabel>
                <Form.Field
                  placeholder="Email"
                  name="title"
                  time={true}
                  component={TextInput}
                />
                <StyledLabel>Senha</StyledLabel>
                <Form.Field
                  placeholder="Senha"
                  name="title"
                  time={true}
                  component={TextInput}
                />
                <StyledButton
                  fluid
                  secondary
                  type="submit"
                  name="title"
                  content="Log In"
                />
              </Form>
            </Segment>
          )}
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
