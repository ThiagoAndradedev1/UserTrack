import React, { Fragment, useContext } from "react";
import {
  Menu,
  Header,
  Icon,
  Segment,
  Image,
  Container,
  Button,
} from "semantic-ui-react";
import { StyledMenu, StyledHeader, StyledButton } from "./NavbarElements";
import {
  Link,
  NavLink,
  RouteComponentProps,
  useHistory,
} from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import { IAuthState } from "../../../models/authState";
import { removeTokenLocalStorage } from "../../../utils/utils";

const Navbar: React.FC = () => {
  const authContext = useContext<IAuthState>(AuthContext);
  const { logout } = authContext;

  const history = useHistory();

  const onLogout = () => {
    logout();
    history.push("/login");
    removeTokenLocalStorage();
  };

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
        <StyledButton
          onClick={() => onLogout()}
          icon="log out"
          content="Log Out"
        />
      </Menu.Item>
    </StyledMenu>
  );
};

export default Navbar;
