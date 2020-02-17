import React, { useState } from "react";
import styled, { css } from "styled-components";
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
  @media (max-width: ${props => props.theme.breackpoints.lg}) {
    position: fixed;
    grid-template-columns: 1fr;
    right: 10px;
    padding: 1rem;
    bottom: 9rem;
    z-index: 100;
    border-radius: 10px;
    max-width: 200px;
    text-align: center;
    height: auto;
    background-color: ${props => props.theme.colors.dark};
    ${props =>
      props.hidden &&
      css`
        display: none;
      `};
  }
`;
export const NavbarItem = styled.li`
  font-size: ${props => props.theme.fonts.size_xs};
  list-style: none;
  box-shadow: 0px 30px 30px 20px ${props => props.theme.colors.dark};
  @media (max-width: ${props => props.theme.breackpoints.lg}) {
    box-shadow: none;
  }
`;
export const MenuButton = styled.button`
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 4rem;
  right: 1.5rem;
  width: 64px;
  height: 64px;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  border: none;
  color: ${props => props.theme.colors.light};
  z-index: 100;
  display: none;
  @media (max-width: ${props => props.theme.breackpoints.lg}) {
    display: block;
  }
`;

export const SiteOverlay = styled.div`
  opacity: 0.75;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  margin: 0;
  background: black;
  z-index: 10;
  display: block;
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
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
  const [open, setOpen] = useState(true);
  return (
    <React.Fragment>
      <Wrapper hidden={open ? true : false}>
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
      <MenuButton onClick={e => setOpen(!open)}>
        <i className="fa fa-bars fa-lg"></i>
      </MenuButton>
      <SiteOverlay hidden={open ? true : false} />
    </React.Fragment>
  );
}
export { Menu };
