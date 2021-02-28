import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  ChangeEvent,
} from "react";
import { Button, Form, Grid, Icon, Message, Segment } from "semantic-ui-react";
import UserContext from "../../../context/users/usersContext";
import { IUser } from "../../../models/user";
import Users from "../../../api/agent";
import Spinner from "../../layout/Spinner/index";
import { RouteComponentProps } from "react-router-dom";
import { notifyError, notifyInfo } from "../../../utils/utils";
import InputMask from "react-input-mask";

interface ChildComponentProps extends RouteComponentProps {}

const UserForm: React.FC<ChildComponentProps> = ({ history }) => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const userContext = useContext(UserContext);

  const { current, updateUser, loading, addUser } = userContext;

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
    const unmaskCEP = cep.replace(/[^\d]/g, "");
    try {
      const res = await Users.getEndereco(unmaskCEP);
      setUser({ ...user, endereco: res });
    } catch (error) {
      notifyError("Não foi possível achar esse CEP!");
    }
  };

  const onSubmit = () => {
    if (
      nome !== "" &&
      cpf !== "" &&
      email !== "" &&
      endereco.cep !== "" &&
      endereco.bairro !== "" &&
      endereco.logradouro !== "" &&
      endereco.localidade !== "" &&
      endereco.numero !== ""
    ) {
      setError(false);
      if (current) {
        updateUser(user);
        notifyInfo("Usuário editado com successo!");
        history.push("/users");
      } else {
        addUser(user);
        notifyInfo("Usuário criado com successo!");
        history.push("/users");
      }
    } else {
      setError(true);
      setErrorMsg("Você precisa preencher todos os campos!");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Grid
          textAlign="center"
          style={{ height: "80vh" }}
          verticalAlign="middle"
        >
          <Grid.Column mobile={12} style={{ maxWidth: 450 }}>
            <Segment>
              {error && (
                <Message negative>
                  <Message.Header>{errorMsg}</Message.Header>
                </Message>
              )}
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
                    as={InputMask}
                    mask="99.999-999"
                    value={endereco.cep || ""}
                    onChange={(event) => onChange(event, 1)}
                    name="cep"
                    placeholder="Last Name"
                  />
                  <Button
                    fluid
                    animated="vertical"
                    onClick={() => changeEndereco(endereco.cep)}
                  >
                    <Button.Content hidden>Procurar CEP</Button.Content>
                    <Button.Content visible>
                      <Icon name="search" />
                    </Button.Content>
                  </Button>
                  <p style={{ fontSize: "0.8em", padding: "5px" }}>
                    Clique na lupa para achar o seu endereço.
                  </p>
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
                    value={endereco.numero || 0}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Button fluid secondary type="submit">
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      )}
    </Fragment>
  );
};

export default UserForm;
