import React from "react";
import styled, { css } from "styled-components";
import { Button } from "./Button";
import { Container } from "../pages/Home";
import email from "../img/envelope-solid.svg";
import avatar from "../img/avatar.svg";
const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;

export const InputText = styled.input`
  font-size: ${props => props.theme.fonts.size_xs};
  background-color: transparent;
  border: none;
  margin-right: 2rem;
  text-indent: 0.5rem;

  ${props =>
    props.orange &&
    css`
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      &::placeholder {
        color: ${props => props.theme.colors.primary};
        background: url(${avatar}) no-repeat right;
      }
    `};
  ${props =>
    props.ligth &&
    css`
      border-bottom: 1px solid ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.light};
      &::placeholder {
        color: ${props => props.theme.colors.light};
        background: url(${email}) no-repeat right;
      }
    `};
`;

export function ContactForm() {
  return (
    <Container col_3 contain_100>
      <InputText ligth placeholder="INGRESA TU CORREO"></InputText>
      <InputText orange placeholder="INGRESA TU NOMBRE"></InputText>
      <Button orange>CONSULTA GRATUITA</Button>
      <ContactInfo>
        <i className="fas fa-envelope fa-2x"></i>
        <p>contacto@email.com</p>
      </ContactInfo>
      <ContactInfo>
        <i className="fas fa-phone fa-2x"></i>
        <p>612 345 678</p>
      </ContactInfo>
      <ContactInfo>
        <i className="fas fa-map-marked-alt fa-2x"></i>
        <p>C/ Inventada 45 3</p>
      </ContactInfo>
    </Container>
  );
}
