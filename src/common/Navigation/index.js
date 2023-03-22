import { toAuthor, toTasks } from "../../routes";
import { StyledNavigation, NavbarItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavbarItem>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </NavbarItem>
      <NavbarItem>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </NavbarItem>
    </StyledNavigation>
  );
};

export default Navigation;
