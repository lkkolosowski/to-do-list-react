import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.teal};
  margin-left: -15px;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.color.alto};
`;

export const NavbarItem = styled.li`
  list-style-type: none;
  margin-left: 15px;
  padding: 4px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: filter;

  &:hover {
    filter: brightness(110%);
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
  }

  &:active {
    filter: brightness(120%);
  }

  &.active {
    font-weight: bold;
  }
`;
