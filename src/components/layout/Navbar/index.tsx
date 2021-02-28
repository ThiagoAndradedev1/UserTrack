import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";
import { StyledMenu, StyledHeader, StyledButton } from "./NavbarElements";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <StyledMenu inverted>
      <Menu.Item header as={NavLink} exact to="/">
        <StyledHeader>
          <Icon name="user circle" />
          <Header.Content>User Track</Header.Content>
        </StyledHeader>{" "}
      </Menu.Item>

      <Link to="/users">GO TO USERS</Link>

      <Menu.Item position="right">
        <StyledButton icon="add" content="Adicionar Contato" />
        <StyledButton icon="user" content="Lista de Usuários" />
        <StyledButton icon="log out" content="Log Out" />
      </Menu.Item>
    </StyledMenu>
  );
};

export default Navbar;
