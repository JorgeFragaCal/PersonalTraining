import styled, { css } from "styled-components";
export const Button = styled.button`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 0.5rem 2rem;
  border: solid 1px;
  border-color: ${props => props.theme.colors.primary};
  border-radius: 0.7rem;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 30px ${props => props.theme.colors.primary};
  }
  ${props =>
    props.mr &&
    css`
      margin-right: 1rem;
    `};
`;
