import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr auto auto auto auto auto 1fr;
  gap: 2rem;
  max-width: 75rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.colors.dark};
  height: 5rem;
`;
export const NavbarItem = styled.li`
  font-size: ${props => props.theme.fonts.size_xs};
  list-style: none;
  box-shadow: 0px 30px 30px 20px ${props => props.theme.colors.dark};
`;

export const NavbarLink = styled.a`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
function Menu() {
  return (
    <Wrapper>
      <NavbarItem>
        <NavbarLink>Logo</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="#home">HOME</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="#about">SOBRE MI</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="#expertise">MI EXPERIENCIA</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="#benefits">BENEFICIOS</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink href="#contact">CONTACTO</NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <Button>INICIAR SESION</Button>
      </NavbarItem>
    </Wrapper>
  );
}
export { Menu };
