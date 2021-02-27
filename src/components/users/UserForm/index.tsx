import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  ChangeEvent,
} from "react";
import { Button, Form, Grid, Icon, Segment } from "semantic-ui-react";
import UserContext from "../../../context/users/usersContext";
import { IUser } from "../../../models/user";

const UserForm: React.FC = () => {
  const userContext = useContext(UserContext);

  const {
    addUser,
    updateUser,
    currentUser,
    current,
    clearCurrent,
    getEndereco,
  } = userContext;

  useEffect(() => {
    if (current !== null) {
      setUser(current);
    } else {
      setUser({
        nome: "",
        email: "",
        cpf: "",
        endereco: {
          cep: "",
          bairro: "",
          complemento: "",
          logradouro: "",
          localidade: "",
          numero: 0,
        },
      });
    }
  }, [userContext, current]);

  const [user, setUser] = useState<IUser>({
    nome: "",
    cpf: "",
    email: "",
    endereco: {
      cep: "",
      bairro: "",
      complemento: "",
      logradouro: "",
      localidade: "",
      numero: 0,
    },
  });

  const { nome, cpf, email, endereco } = user;

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: number) => {
    if (type === 0) {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      const novoEndereco = user.endereco;
      novoEndereco[e.target.name] = e.target.value;
      setUser({ ...user, endereco: novoEndereco });
    }
  };

  const changeEndereco = () => {};

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Segment>
            <Form>
              <Form.Field>
                <label>Nome</label>
                <Form.Input
                  name='nome'
                  onChange={(event) => onChange(event, 0)}
                  value={nome}
                  placeholder='First Name'
                />
              </Form.Field>
              <Form.Field>
                <label>CPF</label>
                <Form.Input name='cpf' value={cpf} placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Form.Input
                  name='email'
                  value={email}
                  placeholder='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <label>CEP</label>
                <Form.Input
                  value={endereco.cep}
                  onChange={(event) => onChange(event, 1)}
                  name='cep'
                  icon={
                    <Icon
                      onClick={() => getEndereco(endereco.cep)}
                      name='search'
                      inverted
                      circular
                      link
                    />
                  }
                  placeholder='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <label>Rua</label>
                <Form.Input
                  value={endereco.logradouro}
                  readOnly
                  placeholder='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <label>Número</label>
                <Form.Input value={endereco.numero} placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Bairro</label>
                <Form.Input
                  value={endereco.bairro}
                  readOnly
                  placeholder='Last Name'
                />
              </Form.Field>
              <Form.Field>
                <label>Cidade</label>
                <Form.Input
                  value={endereco.localidade}
                  readOnly
                  placeholder='Last Name'
                />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default UserForm;
