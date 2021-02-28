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
import Users from "../../../api/agent";

const UserForm: React.FC = () => {
  const userContext = useContext(UserContext);

  const { current, updateUser, loading, addUser } = userContext;

  useEffect(() => {
    if (current !== null) {
      console.log(current);
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

  let { nome, cpf, email, endereco } = user;

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: number) => {
    if (type === 0) {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      const novoEndereco = user.endereco;
      novoEndereco[e.target.name] = e.target.value;
      setUser({ ...user, endereco: novoEndereco });
    }
  };

  const changeEndereco = async (cep: string) => {
    const res = await Users.getEndereco(cep);
    setUser({ ...user, endereco: res });
    console.log(user);
  };

  const onSubmit = () => {
    if (current) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Form onSubmit={onSubmit}>
                <Form.Field>
                  <label>Nome</label>
                  <Form.Input
                    name="nome"
                    onChange={(event) => onChange(event, 0)}
                    value={nome || ""}
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>CPF</label>
                  <Form.Input
                    name="cpf"
                    onChange={(event) => onChange(event, 0)}
                    value={cpf}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <Form.Input
                    name="email"
                    onChange={(event) => onChange(event, 0)}
                    value={email || ""}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>CEP</label>
                  <Form.Input
                    value={endereco.cep || ""}
                    onChange={(event) => onChange(event, 1)}
                    name="cep"
                    icon={
                      <Icon
                        onClick={() => changeEndereco(endereco.cep)}
                        name="search"
                        inverted
                        circular
                        link
                      />
                    }
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Rua</label>
                  <Form.Input
                    value={endereco.logradouro || ""}
                    readOnly
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Bairro</label>
                  <Form.Input
                    value={endereco.bairro}
                    readOnly
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Cidade</label>
                  <Form.Input
                    value={endereco.localidade || ""}
                    readOnly
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Número</label>
                  <Form.Input
                    name="numero"
                    onChange={(event) => onChange(event, 1)}
                    value={endereco.numero || ""}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid>
      )}
    </Fragment>
  );
};

export default UserForm;
