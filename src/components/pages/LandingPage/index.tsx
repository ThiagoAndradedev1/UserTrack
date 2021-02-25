import React, { useEffect, useContext } from "react";
import { Grid, Image } from "semantic-ui-react";
import UserContext from "../../../context/users/usersContext";
import { IUserState } from "../../../models/userState";

const HomePage: React.FC = () => {
  // const userContext = useContext(UserContext);

  const { getUsers, addUser } = useContext<IUserState>(UserContext);

  useEffect(() => {
    addUser();
    getUsers();
  }, []);

  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
