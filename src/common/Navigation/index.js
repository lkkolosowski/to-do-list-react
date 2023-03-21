import { StyledNavigation, NavbarItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavbarItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </NavbarItem>
      <NavbarItem>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </NavbarItem>
    </StyledNavigation>
  );
};

export default Navigation;
