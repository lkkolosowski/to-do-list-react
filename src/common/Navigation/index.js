import { toAuthor, toTasks } from "../../routes";
import Container from "../Container";
import image from "../../images/image.jpg";
import { NavLink } from "react-router-dom";
import { List, Item, Wrapper, Image, Nav, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Container trimmed>
        <Wrapper>
          <NavLink to={toAuthor()}>
            <Image src={image} alt="Łukasz" />
          </NavLink>
          <List>
            <Item>
              <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </Item>
          </List>
        </Wrapper>
      </Container>
    </Nav>
  );
};

export default Navigation;
