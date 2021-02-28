import React, { useContext, useState } from "react";
import {
  Segment,
  Form,
  Grid,
  Header,
  Message,
  Image,
  Button,
} from "semantic-ui-react";
import AuthContext from "../../../context/auth/authContext";
import { RouteComponentProps } from "react-router-dom";
import { setTokenLocalStorage } from "../../../utils/utils";
import { notifySuccess } from "../../../utils/utils";
interface ChildComponentProps extends RouteComponentProps {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const authContext = useContext(AuthContext);

  const { login } = authContext;

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      setError(false);
      login();
      history.push("/users");
      setTokenLocalStorage();
      notifySuccess("Login feito com successo!");
    } else {
      setError(true);
      setErrorMsg("Você precisa preencher todos os campos!");
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="assets/login_img.svg" />
        <Header as="h2" color="teal" textAlign="center"></Header>
        <Form onSubmit={handleSubmit} size="large">
          <Segment stacked>
            {error && (
              <Message negative>
                <Message.Header>{errorMsg}</Message.Header>
              </Message>
            )}
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              onChange={(e) => setPassword(e.target.value)}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              minLength={4}
              type="password"
            />

            <Button color="black" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
