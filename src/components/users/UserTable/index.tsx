import React, { Fragment, useContext, useEffect } from "react";
import { Table, Grid, Input, Button } from "semantic-ui-react";
import UserContext from "../../../context/users/usersContext";
import { IUserState } from "../../../models/userState";

const UserTable: React.FC = () => {
  const userContext = useContext<IUserState>(UserContext);

  const { getUsers, deleteUser, users, loading, error } = userContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id: number) => {
    deleteUser(id);
  };

  return (
    <Fragment>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Grid>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <Input fluid icon='search' placeholder='Search...' />
            <Table columns={4}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Cidade</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {users.length === 0 && <h1>Não existe nenhum usuário!</h1>}
              <Table.Body>
                {users.map((user) => (
                  <Table.Row>
                    <Table.Cell>{user.cpf}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                      {" "}
                      <Button color='black'>Editar</Button>
                      <Button onClick={() => onDelete(user.id!)} color='red'>
                        Deletar
                      </Button>
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
  );
};

export default UserTable;
