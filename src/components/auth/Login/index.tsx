import React, { useContext, useState } from "react";
import {
  Segment,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Image,
  Button,
} from "semantic-ui-react";
import { StyledLabel, StyledButton } from "./LoginElements";
import AuthContext from "../../../context/auth/authContext";
import { RouteComponentProps } from "react-router-dom";
import { setTokenLocalStorage } from "../../../utils/utils";
import Spinner from "../../layout/Spinner/index";

interface ChildComponentProps extends RouteComponentProps {}

const Login: React.FC<ChildComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const authContext = useContext(AuthContext);

  const { loading, login } = authContext;

  const handleSubmit = () => {
    if (email !== "" && password !== "") {
      setError(false);
      login();
      history.push("/users");
      setTokenLocalStorage();
    } else {
      setError(true);
      setErrorMsg("Você precisa preencher todos os campos!");
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image src="assets/logo_dash.svg" />
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
    // <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
    //   <Grid.Column mobile={14} style={{ maxWidth: 450 }}>
    //     {loading ? (
    //       <Spinner />
    //     ) : (
    //       <Segment placeholder>
    //         <Header icon>
    //           <Icon disabled name="users" />
    //         </Header>{" "}
    //         {error && (
    //           <Message negative>
    //             <Message.Header>{errorMsg}</Message.Header>
    //           </Message>
    //         )}
    //         <Form onSubmit={handleSubmit}>
    //           <Form.Field>
    //             <StyledLabel>Email</StyledLabel>
    //             <input
    //               onChange={(e) => setEmail(e.target.value)}
    //               type="email"
    //               placeholder="Email"
    //               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    //             />
    //           </Form.Field>
    //           <Form.Field>
    //             <StyledLabel>Senha</StyledLabel>
    //             <input
    //               onChange={(e) => setPassword(e.target.value)}
    //               type="password"
    //               placeholder="Last Name"
    //               minLength={4}
    //             />
    //           </Form.Field>
    //           <StyledButton fluid type="submit">
    //             Submit
    //           </StyledButton>
    //         </Form>
    //       </Segment>
    //     )}
    //   </Grid.Column>
    // </Grid>
  );
};

export default Login;
