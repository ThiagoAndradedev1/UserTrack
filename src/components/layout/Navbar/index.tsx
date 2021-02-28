import React, { useContext } from "react";
import { Header, Icon, Image, Menu } from "semantic-ui-react";
import { StyledMenu, StyledHeader, StyledButton } from "./NavbarElements";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import UserContext from "../../../context/users/usersContext";
import { IAuthState } from "../../../models/authState";
import { removeTokenLocalStorage } from "../../../utils/utils";
import { IUserState } from "../../../models/userState";

const Navbar: React.FC = () => {
  const authContext = useContext<IAuthState>(AuthContext);
  const { logout, authenticated } = authContext;

  const userContext = useContext<IUserState>(UserContext);
  const { clearCurrent } = userContext;

  const history = useHistory();

  const onLogout = () => {
    logout();
    clearCurrent();
    history.push("/login");
    removeTokenLocalStorage();
  };

  return (
    <Menu stackable inverted>
      <Menu.Item as={NavLink} exact to="/">
        <Header inverted as="h3">
          <Icon name="users" />
          <Header.Content>
            User Tracker
            <Header.Subheader>Manage all your users</Header.Subheader>
          </Header.Content>
        </Header>
        {/* {" "}
        <Header as="h3" inverted color="grey">
          <Image
            circular
            src="https://blog.cpanel.com/wp-content/uploads/2019/08/user-01.png"
          />{" "}
          User Tracker
        </Header> */}
      </Menu.Item>

      {authenticated && (
        <Menu.Item
          as={NavLink}
          onClick={() => clearCurrent()}
          exact
          to="/userform"
          name="features"
        >
          Adicionar Contatos
        </Menu.Item>
      )}

      {authenticated && (
        <Menu.Item as={NavLink} exact to="/users" name="testimonials">
          Usuários
        </Menu.Item>
      )}

      {authenticated && (
        <Menu.Item
          onClick={() => onLogout()}
          as={NavLink}
          exact
          to="/login"
          name="sign-in"
        >
          Log Out
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;
