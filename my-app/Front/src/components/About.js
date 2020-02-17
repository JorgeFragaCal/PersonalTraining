import React, { useState } from "react";
import { Container, Title2, Number, Text, BottonScroll } from "../pages/Home";
export function About() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  return (
    <React.Fragment>
      <Container text_right hidden={open1 ? true : false}>
        <Title2>PERO PRIMERO, CONOCEME</Title2>
        <Container col_3>
          <Number mr>01</Number>
          <div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis at
              iaculis purus. Aliquam erat volutpat. Suspendisse bibendum congue
              sapien, ut tempor lorem blandit scelerisque. Proin quis nisi
              sapien. Nam hendrerit varius aliquam. Maecenas eu fermentum felis,
              vel eleifend velit. Quisque non fringilla augue. Vivamus et ornare
              quam, id ullamcorper nisi.
            </Text>
            <Container col_4_bar>
              <BottonScroll /> <BottonScroll medium /> <BottonScroll medium />
              <BottonScroll medium />
            </Container>
          </div>
          <Number
            as="button"
            ml
            onClick={e => {
              setOpen2(!open2);
              setOpen1(!open1);
            }}
          >
            >
          </Number>
        </Container>
      </Container>
      <Container text_right hidden={open2 ? true : false}>
        <Title2>Titulo 2</Title2>
        <Container col_3>
          <Number mr>02</Number>
          <div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis at
              iaculis purus. Aliquam erat volutpat. Suspendisse bibendum congue
              sapien, ut tempor lorem blandit scelerisque. Proin quis nisi
              sapien. Nam hendrerit varius aliquam. Maecenas eu fermentum felis,
              vel eleifend velit. Quisque non fringilla augue. Vivamus et ornare
              quam, id ullamcorper nisi.
            </Text>
            <Container col_4_bar>
              <BottonScroll /> <BottonScroll /> <BottonScroll medium />
              <BottonScroll medium />
            </Container>
          </div>
          <Number
            as="button"
            ml
            onClick={e => {
              setOpen3(!open3);
              setOpen2(!open2);
            }}
          >
            >
          </Number>
        </Container>
      </Container>
      <Container text_right hidden={open3 ? true : false}>
        <Title2>Titulo 3</Title2>
        <Container col_3>
          <Number mr>03</Number>
          <div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis at
              iaculis purus. Aliquam erat volutpat. Suspendisse bibendum congue
              sapien, ut tempor lorem blandit scelerisque. Proin quis nisi
              sapien. Nam hendrerit varius aliquam. Maecenas eu fermentum felis,
              vel eleifend velit. Quisque non fringilla augue. Vivamus et ornare
              quam, id ullamcorper nisi.
            </Text>
            <Container col_4_bar>
              <BottonScroll /> <BottonScroll /> <BottonScroll />
              <BottonScroll medium />
            </Container>
          </div>
          <Number
            as="button"
            ml
            onClick={e => {
              setOpen4(!open4);
              setOpen3(!open3);
            }}
          >
            >
          </Number>
        </Container>
      </Container>
      <Container text_right hidden={open4 ? true : false}>
        <Title2>Titulo 4</Title2>
        <Container col_3>
          <Number mr>04</Number>
          <div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis at
              iaculis purus. Aliquam erat volutpat. Suspendisse bibendum congue
              sapien, ut tempor lorem blandit scelerisque. Proin quis nisi
              sapien. Nam hendrerit varius aliquam. Maecenas eu fermentum felis,
              vel eleifend velit. Quisque non fringilla augue. Vivamus et ornare
              quam, id ullamcorper nisi.
            </Text>
            <Container col_4_bar>
              <BottonScroll />
              <BottonScroll />
              <BottonScroll />
              <BottonScroll />
            </Container>
          </div>
          <Number
            as="button"
            ml
            onClick={e => {
              setOpen1(!open1);
              setOpen4(!open4);
            }}
          >
            >
          </Number>
        </Container>
      </Container>
    </React.Fragment>
  );
}
