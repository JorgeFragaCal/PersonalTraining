import React, { useState } from "react";
import styled, { css } from "styled-components";
import img from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import { Button } from "../components/Button";
import { About } from "../components/About";
import { ContactForm } from "../components/ContactForm";

export const Main = styled.main`
  background-color: ${props => props.theme.colors.dark};
  height: 100vh;
  background: url(${img});
  background-size: cover;
  background-attachment: fixed;
`;
export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  ${props =>
    props.large &&
    css`
      height: 90vh;
      background: ${props => props.theme.colors.dark};
    `}
    ${props =>
      props.contact &&
      css`
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${img4});
        background-size: cover;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        justify-content: center;
      `}
  ${props =>
    props.medium &&
    css`
      background-image: linear-gradient(90deg, #0e0f11, #0a0b0d);
      height: 70vh;
    `}
  ${props =>
    props.small &&
    css`
      height: 30vh;
      background: ${props => props.theme.colors.dark};
    `}
`;
export const Container = styled.section`
  color: ${props => props.theme.colors.light};
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;

  ${props =>
    props.contain &&
    css`
      max-width: 55rem;
    `}
  ${props =>
    props.about &&
    css`
      height: 100%;
      background: url(${img2});
      background-size: contain;
      background-repeat: no-repeat;
      align-items: center;
    `}
    ${props =>
      props.expertise &&
      css`
        height: 60vh;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(${img3});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        align-items: center;
        display: flex;
        margin-top: 2rem;
      `}
    
  ${props =>
    props.col_2 &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `};
  ${props =>
    props.col_2_auto &&
    css`
      display: grid;
      grid-template-columns: auto auto;
      margin-bottom: 1rem;
    `};
  ${props =>
    props.col_3 &&
    css`
      display: grid;
      grid-template-columns: auto auto auto;
      max-width: 1000px;
      margin-bottom: 5rem;
    `};
  
  ${props =>
    props.col_4 &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    `};
    ${props =>
      props.col_7 &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        max-width: inherit;
      `};
  ${props =>
    props.row_4 &&
    css`
      position: fixed;
      top: 40%;
      left: 50px;
      width: 50px;
    `};
  ${props =>
    props.text_right &&
    css`
      grid-column: 3/2;
    `};
  ${props =>
    props.hidden &&
    css`
      display: none;
    `};
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fonts.size_xxl};
  font-family: ${props => props.theme.fonts.primary};
  max-width: 40rem;
`;
export const Title2 = styled.h2`
  font-size: ${props => props.theme.fonts.size_xl};
  font-family: ${props => props.theme.fonts.primary};
  margin-bottom: 1rem;
  text-align: center;
`;
export const Title3 = styled.h2`
  font-size: ${props => props.theme.fonts.size_md};
  font-family: ${props => props.theme.fonts.primary};
  margin-bottom: 1rem;
`;
export const SubTitle = styled.p`
  font-size: ${props => props.theme.fonts.size_sm};
  font-family: ${props => props.theme.fonts.medium};
  text-align: center;
  color: ${props => props.theme.colors.medium};
  margin-bottom: 2rem;
  ${props =>
    props.light &&
    css`
      color: ${props => props.theme.colors.light};
      margin: 0 auto;
      max-width: 500px;
    `};
`;
export const Text = styled.p`
  font-size: ${props => props.theme.fonts.size_xs};
  max-width: 30rem;
  color: ${props => props.theme.colors.medium};
`;
export const SubText = styled.p`
  font-size: ${props => props.theme.fonts.size_xs};
  font-family: ${props => props.theme.fonts.medium};
  text-align: center;
`;
export const Description = styled.p`
  font-size: ${props => props.theme.fonts.size_xs};
  max-width: 20rem;
`;

export const Number = styled.div`
  font-size: ${props => props.theme.fonts.size_xl};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.primary};
  background: transparent;
  border: none;
  display: inline-block;
  ${props =>
    props.mr &&
    css`
      margin-right: 1rem;
    `};
  ${props =>
    props.ml &&
    css`
      margin-left: 1rem;
    `};
`;
export const BottonScroll = styled.div`
  border-bottom: solid 5px ${props => props.theme.colors.primary};
  margin-top: 1rem;

  ${props =>
    props.medium &&
    css`
      border-bottom: solid 5px ${props => props.theme.colors.medium};
    `};
`;
export const Scroll = styled.a`
  border-right: solid 3px ${props => props.theme.colors.primary};
  height: 50px;
  font-size: ${props => props.theme.fonts.size_xs};
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.primary};
  ${props =>
    props.medium &&
    css`
      border-right: solid 3px ${props => props.theme.colors.medium};
    `};
  ${props =>
    props.hidden &&
    css`
      color: transparent;
    `};
`;
export const Graphics = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border-top-left-radius: 3px solid ${props => props.theme.colors.secondary};
  margin: 0 auto 1rem;
  border: 3px solid ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fonts.size_xl};
  font-family: ${props => props.theme.fonts.primary};
`;
export const Icon = styled.svg`
  height: 100px;
  width: 100px;
  display: flex;
  text-align: right;
  & > * {
    fill: ${props => props.theme.colors.light};
  }
`;
export const Image = styled.a`
  height: 300px;
  width: 300px;
  background: url(${img5});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  filter: brightness(0.5);
  &::after {
    font-family: "Font Awesome 5 Brands";
    content: "\f16d";
  }
  &:hover::after {
    content: "";
  }
  &:hover {
    filter: brightness(1);
  }
`;
export function Home() {
  //let scroll1;
  const [scroll1, setScroll1] = useState(false);
  const [scroll2, setScroll2] = useState(true);
  const [scroll3, setScroll3] = useState(true);
  const [scroll4, setScroll4] = useState(true);

  return (
    <Main>
      <Section id="home">
        <Container row_4>
          <Scroll
            href="#home"
            onClick={e => {
              setScroll1(!scroll1);
              setScroll2(!scroll2);
              setScroll3(scroll3 === true);
              setScroll4(scroll4 === true);
            }}
            medium={scroll1 ? true : false}
            hidden={scroll1 ? true : false}
          >
            01
          </Scroll>
          <Scroll
            href="#about"
            medium={scroll2 ? true : false}
            hidden={scroll2 ? true : false}
            onClick={e => {
              setScroll1(scroll1 === true);
              setScroll2(scroll2 === false);
              setScroll3(scroll3 === true);
              setScroll4(scroll4 === true);
            }}
          >
            02
          </Scroll>
          <Scroll
            medium={scroll3 ? true : false}
            hidden={scroll3 ? true : false}
            onClick={e => {
              setScroll1(!scroll1);
              setScroll2(!scroll2);
              setScroll3(!scroll3);
              setScroll4(!scroll4);
            }}
          >
            03
          </Scroll>
          <Scroll
            medium={scroll4 ? true : false}
            hidden={scroll4 ? true : false}
            onClick={e => {
              setScroll1(!scroll1);
              setScroll2(!scroll2);
              setScroll3(!scroll3);
              setScroll4(!scroll4);
            }}
          >
            04
          </Scroll>
        </Container>
        <Container>
          <Title>HOLA, YO SOY TU NUEVO ENTRENADOR PERSONAL</Title>
          <Text>
            Finalmente es el momento de convertirte en la persona que puedes
            llegar a ser. Sin excusas, solo establece claramente la meta.
            Contacta conmigo hoy para mas informacion.
          </Text>
        </Container>
      </Section>
      <Section medium id="about">
        <Container col_2 about="true">
          <About></About>
        </Container>
      </Section>
      <Section small>
        <Container col_4>
          <div>
            <Graphics>5.7k</Graphics>
            <SubText>SESIONES REALIZADAS</SubText>
          </div>
          <div>
            <Graphics>10k</Graphics>
            <SubText>CALORIAS QUEMADAS</SubText>
          </div>
          <div>
            <Graphics>97</Graphics>
            <SubText>METAS CONSEGUIDAS</SubText>
          </div>
          <div>
            <Graphics>126</Graphics>
            <SubText>CLIENTES SATISFECHOS</SubText>
          </div>
        </Container>
      </Section>
      <Section medium></Section>
      <Section large id="expertise">
        <Container contain>
          <Title2>MI EXPERIENCIA</Title2>
          <SubTitle>
            Aquí podras encontar los entrenamientos más populares que te
            ayudaran a verte mejor y sentirte más seguro
          </SubTitle>
          <Container col_4>
            <Button mr>PERDER GRASA</Button>
            <Button mr>GANAR MÚSCULO</Button>
            <Button mr>NUTRICIÓN</Button>
            <Button>ENTRENAMIENTO HIT</Button>
          </Container>
          <Container expertise>
            <SubTitle light>
              Este plan de entrenamiento esta diseñado para ayudarte a ganar
              musculo y perder grasa en 12 semanas. Parece sencillo, pero no lo
              es. Seguir el entrenamiento no es fácil. Tiene un inicio lento,
              pero resultados rápidos
            </SubTitle>
          </Container>
        </Container>
      </Section>
      <Section medium id="benefits">
        <Container>
          <Title2>¿POR QUE YO?</Title2>
          <SubTitle>
            Porque entrenando conmigo obtendras todos estos beneficios
          </SubTitle>
          <Container col_2>
            <Container col_2_auto>
              <Icon viewBox="0 0 65 70">
                <path d="M61,56H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V57A1,1,0,0,0,61,56Zm-1,4H4V58H60Z" />
                <path d="M24.274,14.72a.989.989,0,0,0-.053.156,5.7,5.7,0,0,0-.92-.671,1,1,0,0,0-1.354.343L14.558,26.631v0L9.79,34.429,8.531,33.68a1,1,0,0,0-1.377.36L6.143,35.789a3.01,3.01,0,0,0,1.065,4.08L30.644,53.794A9.009,9.009,0,0,0,35.144,55H57a3,3,0,0,0,3-3V50a1,1,0,0,0-1-1H57.977a8.917,8.917,0,0,0-.87-3.362.775.775,0,0,0-.042-.081,9.007,9.007,0,0,0-6.254-4.847l-7.773-1.6a2.747,2.747,0,0,0-.172-.343L37.059,28.707,51.86,3.73a1,1,0,0,0-1.72-1.02L38.754,21.923,26.561,14.885,33.006,3.72a1,1,0,0,0-1.732-1l-6.79,11.762A1,1,0,0,0,24.274,14.72ZM15.759,28.5a11.028,11.028,0,0,1,4.419,12.1L11.509,35.45ZM58,52a1,1,0,0,1-1,1H35.144a7,7,0,0,1-3.49-.932L8.229,38.149a1,1,0,0,1-.354-1.359l.5-.873L32.632,50.33a5.008,5.008,0,0,0,2.5.67H58Zm-7.877-3a2.993,2.993,0,0,1,2.807-2h2.584a6.942,6.942,0,0,1,.44,2Zm-8.061-8.045L50.41,42.67A6.963,6.963,0,0,1,54.32,45H52.93a5.006,5.006,0,0,0-4.88,4H35.132a2.987,2.987,0,0,1-1.489-.4l-11.7-6.953A13.032,13.032,0,0,0,16.8,26.8l6.276-10.263c1.521,1.548.941,3.958.7,4.737a2.973,2.973,0,0,0,1.273,3.388l6.806,4.291a3.89,3.89,0,0,0,.055,2.715l.011.027,0,.011,0,0a3.061,3.061,0,0,0,.249.532l3.7,6.411a2.978,2.978,0,0,0,1.993,1.438l4.147.856ZM35.034,29.2v0l1.253,2.17-1.729,1-.667-1.155a1.4,1.4,0,0,1-.114-.26,1.993,1.993,0,0,1,.208-1.843,1.893,1.893,0,0,1,.642-.607l.005,0Zm.525,4.9,1.729-1,.8,1.38-1.728,1Zm2.7,4.024a.984.984,0,0,1-.656-.478l-.25-.434,1.728-1,1.363,2.362Zm-.528-14.484-1.822,3.075-.046-.078a1,1,0,0,0-1.364-.368l-.877.5a4.086,4.086,0,0,0-.677.5l-6.834-4.31a.968.968,0,0,1-.43-1.1,7.226,7.226,0,0,0-.152-5.2l.028-.049Z" />
                <path d="M7,12H22a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
                <path d="M3,12H4a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
                <path d="M17,18a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z" />
                <path d="M6,18H7a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z" />
                <path d="M14,6H25a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z" />
                <path d="M9,6h1a1,1,0,0,0,0-2H9A1,1,0,0,0,9,6Z" />
                <path d="M8,49a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" />
                <path d="M3,51H4a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
                <path d="M3,28H8a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
                <path d="M3,42H4a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z" />
              </Icon>
              <div>
                <Title3>Resultados Rápidos</Title3>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis
                  at iaculis purus. Aliquam erat volutpat. Suspendisse bibendum
                  congue sapien, ut tempor lorem blandit scelerisque. Proin quis
                </Description>
              </div>
            </Container>
            <Container col_2_auto>
              <Icon viewBox="0 0 25 30">
                <path
                  d="M3.763,23.937c0.019,0.002,0.037,0.004,0.056,0.004h5.807c0.021,0,0.041-0.002,0.062-0.005  
                    c0.917-0.07,1.639-0.522,2.044-1.24c0.726,0.806,1.518,1.244,2.29,1.244c0.582,0,0.897-0.094,1.176-0.177
                    c0.244-0.072,0.454-0.135,0.866-0.135s0.623,0.063,0.867,0.135c0.278,0.083,0.595,0.177,1.176,0.177 
                    c1.002,0,2.038-0.73,2.918-2.058c1.292-1.947,2.17-5.192,1.251-7.368c-0.688-1.632-2.338-2.485-3.611-2.485 
                    c-0.77,0-1.223,0.175-1.622,0.33c-0.21,0.081-0.391,0.151-0.602,0.19c-0.117-1.081-0.675-2.04-1.514-2.568
                    c-0.185-0.119-0.434-0.063-0.552,0.125c-0.117,0.187-0.062,0.434,0.126,0.552c0.608,0.384,1.021,1.081,1.133,1.881 
                    c-0.188-0.041-0.356-0.105-0.548-0.18c-0.4-0.155-0.854-0.33-1.623-0.33c-0.429,0-0.9,0.105-1.363,0.296v-1.347 
                    c0-0.008-0.004-0.015-0.005-0.023l0.001-1.113c0.001-0.748-0.175-1.43-0.536-2.086c-0.187-0.337-0.367-0.677-0.549-1.017 
                    c-0.29-0.542-0.579-1.085-0.887-1.618c-0.263-0.454-0.371-0.887-0.36-1.36c0.707-0.286,1.182-1.012,1.182-1.808 
                    c0-1.088-0.596-1.775-1.595-1.872C9.308,0.067,9.263,0.059,9.219,0.059L4.133,0.068C3.095,0.178,2.5,0.865,2.5,1.953
                    c0,0.796,0.475,1.522,1.161,1.808c0.031,0.472-0.077,0.905-0.34,1.36C3.013,5.654,2.724,6.197,2.434,6.74
                    c-0.182,0.34-0.362,0.68-0.548,1.017C1.524,8.411,1.348,9.094,1.349,9.843c0.001,0.372,0,0.744,0,1.116
                    c0,0.007-0.004,0.012-0.004,0.019v6.74c0,0.005,0.003,0.01,0.003,0.015l-0.003,3.398C1.345,23.552,3.174,23.89,3.763,23.937z
                    M11.293,12.767c-0.597,0.414-1.124,0.994-1.443,1.748c-0.347,0.824-0.436,1.802-0.344,2.804H2.149l0-0.468 
                    c0.002-1.824,0.002-3.648,0.001-5.472h9.144L11.293,12.767z M9.626,23.138c-0.006,0.001-0.013,0.002-0.021,0.002H3.838
                    c-0.008-0.001-0.015-0.001-0.021-0.002c-0.625-0.048-1.672-0.372-1.672-2.006l0.002-3.014h7.475
                    c0.253,1.385,0.806,2.752,1.48,3.767c0.022,0.034,0.046,0.062,0.068,0.095C10.873,22.895,10.087,23.103,9.626,23.138z
                    M14.796,13.106c0.353,0.136,0.717,0.277,1.267,0.277s0.915-0.141,1.268-0.277c0.366-0.142,0.713-0.276,1.333-0.276 
                    c1.01,0,2.322,0.686,2.875,1.997c0.78,1.85,0.013,4.816-1.181,6.615c-0.717,1.08-1.537,1.699-2.252,1.699 
                    c-0.465,0-0.689-0.066-0.948-0.143c-0.266-0.079-0.566-0.169-1.095-0.169s-0.829,0.09-1.094,0.169 
                    c-0.26,0.076-0.483,0.143-0.948,0.143c-0.715,0-1.535-0.618-2.251-1.697c-1.194-1.799-1.963-4.766-1.184-6.617
                    c0.276-0.654,0.742-1.152,1.264-1.488c0.007-0.003,0.012-0.008,0.019-0.011c0.519-0.329,1.093-0.498,1.593-0.498
                    C14.083,12.829,14.429,12.964,14.796,13.106z M4.217,0.864c0.008-0.001,0.021-0.002,0.034-0.005h4.941
                    c0.014,0.002,0.026,0.004,0.034,0.005c0.394,0.042,0.917,0.2,0.917,1.089c0,0.446-0.248,0.845-0.616,1.027H3.917
                    C3.548,2.798,3.3,2.4,3.3,1.953C3.3,1.064,3.824,0.906,4.217,0.864z M2.586,8.142c0.188-0.34,0.37-0.683,0.554-1.026
                    c0.285-0.535,0.57-1.07,0.874-1.595c0.327-0.568,0.469-1.139,0.445-1.741h4.527C8.961,4.384,9.103,4.955,9.43,5.522
                    c0.304,0.525,0.589,1.06,0.874,1.595c0.184,0.343,0.366,0.686,0.554,1.026c0.295,0.535,0.438,1.091,0.437,1.699l0,0.737H2.15
                    c0-0.246,0.001-0.491,0-0.737C2.149,9.232,2.292,8.676,2.586,8.142z"
                />
                <path
                  d="M6.722,16.405c0.858,0,1.557-0.698,1.557-1.556c0-0.718-0.948-2.018-1.238-2.398c-0.152-0.199-0.484-0.199-0.637,0
                    c-0.29,0.381-1.238,1.681-1.238,2.398C5.166,15.707,5.864,16.405,6.722,16.405z M6.722,13.377c0.404,0.591,0.756,1.226,0.756,1.472
                    c0,0.417-0.339,0.756-0.756,0.756s-0.756-0.339-0.756-0.756C5.966,14.602,6.318,13.968,6.722,13.377z"
                />
              </Icon>
              <div>
                <Title3>Asesoramiento Nutricional</Title3>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis
                  at iaculis purus. Aliquam erat volutpat. Suspendisse bibendum
                  congue sapien, ut tempor lorem blandit scelerisque. Proin quis
                </Description>
              </div>
            </Container>
            <Container col_2_auto>
              <Icon viewBox="0 0 65 70">
                <path d="M59,22h-2v-5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v8h-2.354l-0.22-0.56c-1.06-2.697-3.617-4.44-6.515-4.44h-0.095  c-0.414-1.161-1.514-2-2.816-2c-0.771,0-1.468,0.301-2,0.78c-0.532-0.48-1.229-0.78-2-0.78s-1.468,0.301-2,0.78  c-0.532-0.48-1.229-0.78-2-0.78s-1.468,0.301-2,0.78c-0.532-0.48-1.229-0.78-2-0.78c-1.654,0-3,1.346-3,3v4h-3v-8  c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v5H5c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h2v5c0,1.654,1.346,3,3,3h4  c1.654,0,3-1.346,3-3v-8h2.268l0.779,2.465c0.035,0.112,0.09,0.217,0.162,0.311l2.669,3.453l-1.71,17.966  c-0.069,0.717,0.169,1.434,0.654,1.967C22.307,61.694,22.997,62,23.718,62h13.556c0.723,0,1.415-0.307,1.899-0.843  c0.485-0.536,0.722-1.255,0.65-1.975l-1.747-17.471c-0.019-0.183,0.054-0.363,0.193-0.482l5.487-4.703  c0.48-0.412,0.817-0.944,1.022-1.526H47v8c0,1.654,1.346,3,3,3h4c1.654,0,3-1.346,3-3v-5h2c1.654,0,3-1.346,3-3V25  C62,23.346,60.654,22,59,22z M35,20c0.552,0,1,0.449,1,1v5v0.893c0,0.38-0.186,0.723-0.456,0.923  c-0.029,0.02-0.056,0.042-0.087,0.059c-0.053,0.031-0.111,0.048-0.169,0.066c-0.064,0.02-0.129,0.034-0.198,0.04  c-0.081,0.006-0.16,0-0.238-0.012c-0.058-0.009-0.116-0.016-0.17-0.034c-0.08-0.027-0.154-0.071-0.226-0.119  c-0.043-0.029-0.09-0.051-0.128-0.086c-0.071-0.065-0.123-0.145-0.172-0.226c-0.021-0.035-0.051-0.063-0.068-0.101  C34.033,27.278,34,27.141,34,27v-6C34,20.449,34.448,20,35,20z M31,20c0.552,0,1,0.449,1,1v6c0,0.551-0.448,1-1,1s-1-0.449-1-1v-6  C30,20.449,30.448,20,31,20z M27,20c0.552,0,1,0.449,1,1v6c0,0.551-0.448,1-1,1s-1-0.449-1-1v-6C26,20.449,26.448,20,27,20z M22,21  c0-0.551,0.448-1,1-1s1,0.449,1,1v6c0,0.141-0.033,0.278-0.089,0.404c-0.017,0.038-0.047,0.066-0.068,0.101  c-0.049,0.081-0.101,0.16-0.172,0.226c-0.037,0.034-0.084,0.057-0.126,0.085c-0.073,0.048-0.147,0.093-0.229,0.12  c-0.052,0.018-0.109,0.024-0.164,0.033c-0.08,0.012-0.16,0.019-0.243,0.012c-0.068-0.006-0.133-0.02-0.196-0.04  c-0.059-0.019-0.117-0.036-0.171-0.067c-0.031-0.016-0.057-0.038-0.085-0.058c-0.27-0.2-0.457-0.544-0.457-0.924V26V21z M5,36  c-0.552,0-1-0.449-1-1V25c0-0.551,0.448-1,1-1h2v12H5z M15,43c0,0.551-0.448,1-1,1h-4c-0.552,0-1-0.449-1-1v-6V23v-6  c0-0.551,0.448-1,1-1h4c0.552,0,1,0.449,1,1v9v8V43z M17,27h3c0,1.098,0.599,2.049,1.481,2.572c0.054,0.033,0.11,0.06,0.166,0.09  c0.09,0.046,0.179,0.092,0.273,0.128c0.105,0.042,0.215,0.072,0.326,0.101c0.066,0.017,0.13,0.039,0.198,0.052  c0.021,0.004,0.039,0.012,0.06,0.016c0.07,0.012,0.139,0.005,0.209,0.012C22.809,29.98,22.902,30,23,30  c0.029,0,0.056-0.008,0.084-0.009c0.092-0.003,0.181-0.017,0.271-0.027c0.12-0.014,0.238-0.03,0.353-0.058  c0.086-0.021,0.168-0.05,0.252-0.078c0.112-0.038,0.222-0.08,0.328-0.13c0.081-0.039,0.159-0.083,0.237-0.129  c0.1-0.06,0.195-0.124,0.288-0.195c0.042-0.032,0.09-0.054,0.13-0.088c0.02-0.017,0.039-0.033,0.058-0.05  c0.058,0.052,0.126,0.093,0.188,0.14c0.062,0.048,0.122,0.097,0.188,0.14c0.094,0.061,0.195,0.11,0.296,0.161  c0.067,0.033,0.13,0.071,0.199,0.099c0.116,0.047,0.239,0.08,0.361,0.112c0.062,0.016,0.12,0.04,0.184,0.053  C26.606,29.978,26.8,30,27,30c0.2,0,0.394-0.022,0.583-0.059c0.065-0.013,0.124-0.037,0.187-0.054  c0.121-0.033,0.243-0.064,0.358-0.111c0.071-0.029,0.135-0.067,0.203-0.101c0.1-0.05,0.2-0.099,0.293-0.159  c0.067-0.043,0.127-0.093,0.189-0.141c0.062-0.047,0.129-0.088,0.187-0.14c0.058,0.052,0.125,0.092,0.187,0.14  c0.063,0.048,0.123,0.099,0.19,0.142c0.093,0.06,0.193,0.109,0.293,0.159c0.068,0.034,0.132,0.072,0.203,0.101  c0.115,0.047,0.236,0.079,0.358,0.111c0.063,0.017,0.123,0.041,0.187,0.054C30.606,29.978,30.8,30,31,30  c0.2,0,0.394-0.022,0.583-0.059c0.063-0.013,0.122-0.036,0.184-0.053c0.123-0.033,0.245-0.065,0.361-0.112  c0.07-0.028,0.133-0.066,0.2-0.1c0.101-0.05,0.201-0.1,0.295-0.161c0.066-0.043,0.125-0.092,0.188-0.14  c0.062-0.047,0.13-0.088,0.188-0.14c0.019,0.017,0.038,0.034,0.058,0.05c0.04,0.034,0.088,0.056,0.129,0.088  c0.093,0.071,0.189,0.136,0.291,0.197c0.076,0.045,0.152,0.088,0.232,0.126c0.11,0.053,0.223,0.095,0.34,0.135  c0.079,0.027,0.157,0.054,0.238,0.074c0.122,0.03,0.247,0.046,0.373,0.061c0.084,0.01,0.166,0.023,0.251,0.025  C34.941,29.992,34.969,30,35,30c0.1,0,0.195-0.02,0.292-0.03c0.068-0.006,0.136,0,0.205-0.011c0.023-0.004,0.044-0.012,0.067-0.016  c0.045-0.009,0.088-0.022,0.132-0.033c0.128-0.031,0.252-0.068,0.372-0.116c0.066-0.025,0.13-0.052,0.193-0.082  c0.07-0.034,0.138-0.072,0.205-0.111c0.731-0.414,1.275-1.115,1.46-1.958C37.97,27.755,38,27.874,38,28v3.586L36.586,33H17V27z   M36.969,39.71c-0.636,0.545-0.966,1.367-0.883,2.201l1.747,17.471c0.021,0.217-0.08,0.365-0.143,0.434  C37.628,59.884,37.49,60,37.273,60H23.718c-0.216,0-0.354-0.115-0.416-0.184s-0.164-0.216-0.144-0.432l1.748-18.36  c0.024-0.253-0.049-0.505-0.204-0.707L21.9,36.693L21.365,35h15.221c0.526,0,1.042-0.213,1.414-0.586L39.414,33  C39.792,32.622,40,32.12,40,31.586V28c0-1.302-0.839-2.402-2-2.816v-3.183c2.033,0.035,3.818,1.271,4.564,3.17l0.376,0.945  c0.039,0.079,0.06,0.166,0.06,0.252v7.453c0,0.457-0.199,0.889-0.545,1.187L36.969,39.71z M45,33v-6h2v6H45z M55,43  c0,0.551-0.448,1-1,1h-4c-0.552,0-1-0.449-1-1v-9v-8v-9c0-0.551,0.448-1,1-1h4c0.552,0,1,0.449,1,1v6v14V43z M60,35  c0,0.551-0.448,1-1,1h-2V24h2c0.552,0,1,0.449,1,1V35z" />
              </Icon>
              <div>
                <Title3>ENTRENAMIENTO PERSONALIZADO</Title3>
                <Description>
                  I will tailor your training plan to suit you and what enjoy,
                  as well as encourage you to do the exercises that are best to
                  archive your goals.
                </Description>
              </div>
            </Container>
            <Container col_2_auto>
              <Icon viewBox="0 0 65 70">
                <path d="M28.685,7.878c0.175-0.37,0.35-0.73,0.53-1.082c0.049-0.092,0.162-0.339,0.31-0.663c0.248-0.543,0.88-1.931,1.147-2.343  C30.908,3.607,31.06,3.321,31.06,3c0-0.553-0.447-1-1-1c-0.399,0-1.336,0-5.792,3.547C15.592,12.445,6.311,24.048,5.134,34.42  c-0.559,4.932,0.66,9.316,3.624,13.033c3.662,4.591,8.637,6.499,13.489,6.499c3.277,0,6.497-0.873,9.22-2.375  C33.068,57.608,38.643,62,45,62c7.72,0,14-6.28,14-14s-6.28-14-14-14c-1.526,0-3.017,0.248-4.451,0.729  c-0.258-2.091-0.866-4.123-1.464-6.099c-0.229-0.755-0.456-1.507-0.659-2.25c-0.542-2.012-0.779-3.657-0.746-5.178  c0.02-0.869,0.127-1.696,0.319-2.456c0.104-0.407,0.287-0.817,0.48-1.252c0.199-0.444,0.404-0.904,0.544-1.406  c0.076-0.277,0.03-0.573-0.127-0.814s-0.41-0.402-0.695-0.443c-2.256-0.321-4.512,0.979-5.868,2.303  c-1.072,1.043-1.619,2.344-2.147,3.602c-0.097,0.229-0.192,0.458-0.287,0.674c-0.037,0.082-0.111,0.23-0.202,0.409  c-0.022-0.026-0.045-0.053-0.068-0.08c-0.504-0.581-1.266-1.46-1.375-1.61c-1.974-2.976-1.929-6.874,0.167-11.663  C28.504,8.271,28.589,8.076,28.685,7.878z M21.976,51.675c-1.449-0.021-2.784-0.634-3.757-1.725  c-3.937-4.412-3.229-11.083-0.905-15.414c0.751-1.402,1.757-2.793,2.729-4.137c0.253-0.349,0.509-0.703,0.763-1.061  c0.872,1.693,1.766,3.25,3.085,4.855l0.394,0.477c1.403,1.697,2.855,3.453,3.58,5.491c1.134,3.182,0.371,7.553-1.7,9.742  C25.095,51.035,23.545,51.662,21.976,51.675z M57,48c0,6.617-5.383,12-12,12c-5.87,0-10.97-4.364-11.861-10.153  C33.047,49.252,33,48.631,33,48c0-0.295,0.011-0.588,0.032-0.879c0.064-0.874,0.223-1.728,0.469-2.55  c0.901-3.016,2.968-5.603,5.79-7.129c0.256-0.138,0.518-0.268,0.786-0.389C41.639,36.354,43.295,36,45,36C51.617,36,57,41.383,57,48  z M27.44,5.873c-0.195,0.38-0.38,0.76-0.562,1.144c-0.104,0.215-0.197,0.431-0.325,0.723c-2.318,5.299-2.308,9.965,0.038,13.501  c0.125,0.186,0.49,0.613,1.524,1.807c0.429,0.495,0.819,0.944,0.939,1.096c0.133,0.199,0.336,0.351,0.58,0.414  c0.438,0.115,0.901-0.079,1.125-0.476c0.191-0.339,0.796-1.486,0.965-1.858c0.103-0.235,0.203-0.474,0.304-0.713  c0.472-1.123,0.918-2.185,1.699-2.944c0.688-0.671,1.729-1.382,2.825-1.662c-0.187,0.423-0.369,0.863-0.493,1.351  c-0.229,0.906-0.357,1.883-0.381,2.904c-0.037,1.717,0.222,3.542,0.815,5.746c0.21,0.765,0.442,1.533,0.676,2.305  c0.627,2.073,1.273,4.21,1.458,6.321c-0.05,0.025-0.096,0.055-0.146,0.081c-0.139,0.073-0.274,0.151-0.41,0.228  c-0.153,0.087-0.306,0.175-0.455,0.268c-0.132,0.082-0.261,0.168-0.39,0.254c-0.146,0.097-0.29,0.196-0.432,0.299  c-0.125,0.091-0.247,0.184-0.369,0.278c-0.138,0.107-0.274,0.216-0.408,0.328c-0.117,0.098-0.232,0.198-0.345,0.3  c-0.13,0.117-0.258,0.236-0.384,0.357c-0.109,0.105-0.216,0.212-0.321,0.32c-0.122,0.125-0.24,0.253-0.357,0.382  c-0.101,0.112-0.201,0.225-0.298,0.341c-0.112,0.133-0.221,0.269-0.328,0.406c-0.093,0.118-0.185,0.237-0.273,0.359  c-0.104,0.141-0.203,0.286-0.301,0.431c-0.083,0.123-0.167,0.246-0.246,0.372c-0.094,0.149-0.183,0.302-0.272,0.455  c-0.074,0.128-0.149,0.255-0.219,0.385c-0.084,0.157-0.163,0.317-0.241,0.477c-0.064,0.132-0.13,0.262-0.19,0.396  c-0.074,0.164-0.141,0.331-0.209,0.498c-0.055,0.135-0.112,0.268-0.162,0.405c-0.064,0.172-0.119,0.347-0.176,0.521  c-0.044,0.136-0.091,0.27-0.132,0.408c-0.053,0.181-0.097,0.365-0.143,0.549c-0.034,0.135-0.071,0.268-0.101,0.404  c-0.042,0.194-0.074,0.391-0.108,0.587c-0.022,0.129-0.049,0.256-0.068,0.386c-0.032,0.221-0.052,0.445-0.074,0.668  c-0.01,0.107-0.026,0.214-0.034,0.322C31.013,47.328,31,47.663,31,48c0,0.451,0.028,0.896,0.069,1.336  c0.005,0.053,0.003,0.107,0.008,0.16c-0.993,0.603-2.076,1.097-3.208,1.49c2.383-2.792,3.216-7.744,1.88-11.495  c-0.844-2.37-2.409-4.264-3.924-6.095l-0.39-0.472c-1.559-1.897-2.506-3.794-3.604-5.991c-0.16-0.32-0.479-0.53-0.836-0.551  c-0.351-0.02-0.699,0.15-0.896,0.45c-0.518,0.791-1.081,1.569-1.678,2.395c-1.012,1.397-2.058,2.843-2.872,4.363  c-2.559,4.77-3.336,12.078,0.776,17.194c-2.206-0.918-4.273-2.407-6.004-4.578C7.701,42.92,6.624,39.03,7.121,34.646  c1.112-9.803,10.038-20.892,18.415-27.553c0.808-0.643,1.496-1.162,2.073-1.579C27.532,5.683,27.474,5.811,27.44,5.873z" />
                <path d="M33.357,30.415c0.463,1.529,0.9,2.973,1.145,4.351l1.969-0.348c-0.264-1.495-0.739-3.065-1.199-4.583  c-0.243-0.804-0.485-1.605-0.702-2.403c-0.222-0.81-0.397-1.562-0.536-2.3l-1.965,0.369c0.148,0.792,0.336,1.596,0.571,2.457  C32.862,28.772,33.108,29.592,33.357,30.415z" />
                <path d="M38.707,55.707L50,44.414V47h2v-5c0-0.553-0.447-1-1-1h-5v2h2.586L37.293,54.293L38.707,55.707z" />
                <path d="M37,45c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S37,43.346,37,45z M41,45c0,0.552-0.448,1-1,1s-1-0.448-1-1  s0.448-1,1-1S41,44.448,41,45z" />
                <path d="M48,50c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S49.654,50,48,50z M48,54c-0.552,0-1-0.448-1-1s0.448-1,1-1  s1,0.448,1,1S48.552,54,48,54z" />
                <polygon points="45,16 45,18 43,18 43,20 45,20 45,22 47,22 47,20 49,20 49,18 47,18 47,16 " />
                <polygon points="51,9 51,12 48,12 48,14 51,14 51,17 53,17 53,14 56,14 56,12 53,12 53,9 " />
              </Icon>
              <div>
                <Title3>MEJOR ESTILO DE VIDA</Title3>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis
                  at iaculis purus. Aliquam erat volutpat. Suspendisse bibendum
                  congue sapien, ut tempor lorem blandit scelerisque. Proin quis
                </Description>
              </div>
            </Container>
          </Container>
        </Container>
      </Section>
      <Section large contact id="contact">
        <Container>
          <Title2>DA EL PRIMER PASO</Title2>
          <SubTitle>
            No es facil. Pero puedes hacerlo.<br></br> Nunca has estado tan
            cerca de cumplir tu sueño
          </SubTitle>
        </Container>
        <ContactForm />
        <Container col_7>
          <Image href="https://www.instagram.com" />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </Container>
      </Section>
    </Main>
  );
}
