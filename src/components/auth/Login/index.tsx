import React from "react";
import { Segment, Form, Grid, Header, Icon } from "semantic-ui-react";
import { Form as FinalForm, Field } from "react-final-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";
import { StyledLabel, StyledButton } from "./LoginElements";

const Login: React.FC = () => {
  const validate = combineValidators({
    email: isRequired({ message: "The event title is required" }),
    senha: isRequired({ message: "The event title is required" }),
  });

  const handleFinalFormSubmit = (values: any) => {};

  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column>
          <Segment placeholder>
            <Header icon>
              <Icon disabled name='users' />
            </Header>{" "}
            <FinalForm
              validate={validate}
              onSubmit={handleFinalFormSubmit}
              render={({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <StyledLabel>Email</StyledLabel>
                  <Field
                    placeholder='Email'
                    name='title'
                    time={true}
                    component={TextInput}
                  />
                  <StyledLabel>Senha</StyledLabel>
                  <Field
                    placeholder='Senha'
                    name='title'
                    time={true}
                    component={TextInput}
                  />
                  <StyledButton
                    fluid
                    secondary
                    type='submit'
                    name='title'
                    content='Log In'
                  />
                </Form>
              )}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
