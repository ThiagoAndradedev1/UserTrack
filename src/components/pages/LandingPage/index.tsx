import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import { LandingPageStyle } from "./LandingPageElements";

const HomePage: React.FC = () => {
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
