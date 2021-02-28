import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

const HomePage: React.FC = () => {
  return (
    <Segment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Lorem ipsum dolor
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              est corrupti necessitatibus minus dolores voluptates aliquam
              praesentium eveniet temporibus aliquid quis fuga deserunt fugiat,
              exercitationem provident. Optio, eos. Totam, eius!
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Lorem ipsum dolor
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit
              ullam dicta vero modi quis magnam in corrupti porro atque
              aspernatur quod sint, ipsam distinctio praesentium! Iusto
              perspiciatis veritatis quibusdam?
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src="/assets/logo_dash.svg" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button as={Link} to="/login" secondary size="huge">
              Login
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    // <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
    //   <Grid.Column mobile={14} style={{ maxWidth: 450 }}>
    //     <Segment size="massive">
    //       <Header color="grey" as="h2" textAlign="center">
    //         <Image src="images/initialpage.png" />{" "}
    //         <p style={{ fontSize: "1.33em" }}>Bem Vindo</p>
    //         <Header.Subheader>
    //           Cadastre-se e tenha acesso a vários Pokémons.
    //         </Header.Subheader>
    //       </Header>
    //     </Segment>
    //   </Grid.Column>
    // </Grid>
  );
};

export default HomePage;
