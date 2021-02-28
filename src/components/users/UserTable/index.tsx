import React, { Fragment, useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Table, Grid, Input, Button } from "semantic-ui-react";
import UserContext from "../../../context/users/usersContext";
import AuthContext from "../../../context/auth/authContext";
import { IUser } from "../../../models/user";
import { IUserState } from "../../../models/userState";
import { IAuthState } from "../../../models/authState";
import { StyledButton } from "./UserTableElements";
import Spinner from "../../layout/Spinner/index";

interface ChildComponentProps extends RouteComponentProps {}

const UserTable: React.FC<ChildComponentProps> = ({ history }) => {
  const [searchUserTerm, setSearchUserTerm] = useState<string>("");

  const userContext = useContext<IUserState>(UserContext);
  const authContext = useContext<IAuthState>(AuthContext);

  const {
    getUsers,
    deleteUser,
    currentUser,
    users,
    loading,
    error,
  } = userContext;

  const { authenticated } = authContext;

  useEffect(() => {
    getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, history]);

  const onUpdate = (user: IUser) => {
    history.push("/userform");
    currentUser(user);
  };

  const onDelete = (id: number) => {
    deleteUser(id);
  };

  const searchUser = () => {
    getUsers(searchUserTerm ?? "");
  };

  const clearUser = () => {
    getUsers();
  };

  if (error) {
    return (
      <div>
        <h1>Ocorreu um erro!</h1>
      </div>
    );
  }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column mobile={12}>
            <Input
              onChange={(e) => setSearchUserTerm(e.target.value)}
              fluid
              icon="search"
              placeholder="Search..."
            />
            <StyledButton secondary fluid onClick={() => searchUser()}>
              Search
            </StyledButton>
            <StyledButton fluid onClick={() => clearUser()}>
              Clear
            </StyledButton>
            <Table columns={4}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {users.length === 0 && (
                  <Table.Row>
                    {" "}
                    <Table.Cell>Não existem usuários cadastrados!</Table.Cell>
                  </Table.Row>
                )}

                {users.map((user) => (
                  <Table.Row key={user.id}>
                    <Table.Cell>{user.nome}</Table.Cell>
                    <Table.Cell>{user.cpf}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <StyledButton
                        fluid
                        onClick={() => onUpdate(user)}
                        color="black"
                      >
                        Editar
                      </StyledButton>
                      <StyledButton
                        fluid
                        onClick={() => onDelete(user.id!)}
                        color="red"
                      >
                        Deletar
                      </StyledButton>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>
      )}
    </Fragment>
    // <Fragment>
    //   {loading ? (
    //     <h1>Loading...</h1>
    //   ) : error ? (
    //     <h1>{error}</h1>
    //   ) : (
    //     <Grid>
    //       {users.length === 0 && <h1>Não existe nenhum usuário!</h1>}
    //       <Grid.Column width={2}></Grid.Column>
    //       <Grid.Column width={12}>
    //         <Input
    //           onChange={(e) => setSearchUserTerm(e.target.value)}
    //           fluid
    //           icon="search"
    //           placeholder="Search..."
    //         />
    //         <button onClick={() => searchUser()}>Search</button>
    //         <button onClick={() => clearUser()}>Clear</button>
    //         <Table columns={4}>
    //           <Table.Header>
    //             <Table.Row>
    //               <Table.HeaderCell>Nome</Table.HeaderCell>
    //               <Table.HeaderCell>CPF</Table.HeaderCell>
    //               <Table.HeaderCell>Email</Table.HeaderCell>
    //               <Table.HeaderCell>Cidade</Table.HeaderCell>
    //               <Table.HeaderCell></Table.HeaderCell>
    //             </Table.Row>
    //           </Table.Header>
    //           <Table.Body>
    //             {users.map((user) => (
    //               <Table.Row key={user.id}>
    //                 <Table.Cell>{user.nome}</Table.Cell>
    //                 <Table.Cell>{user.cpf}</Table.Cell>
    //                 <Table.Cell>{user.email}</Table.Cell>
    //                 <Table.Cell>{user.email}</Table.Cell>
    //                 <Table.Cell>
    //                   {" "}
    //                   <Button onClick={() => onUpdate(user)} color="black">
    //                     Editar
    //                   </Button>
    //                   <Button onClick={() => onDelete(user.id!)} color="red">
    //                     Deletar
    //                   </Button>
    //                 </Table.Cell>
    //               </Table.Row>
    //             ))}
    //           </Table.Body>
    //         </Table>
    //       </Grid.Column>
    //       <Grid.Column width={2}></Grid.Column>
    //     </Grid>
    //   )}
    // </Fragment>
  );
};

export default UserTable;
