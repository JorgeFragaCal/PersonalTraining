import React, { useState } from "react";
import {
  Container,
  Title2,
  Number,
  Arrow,
  Text,
  BottonScroll
} from "../pages/Home";
export function About() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);
  return (
    <div>
      <Title2>PERO PRIMERO, CONOCEME</Title2>
      <Container text_right hidden={open1 ? true : false}>
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
          <Arrow
            ml
            onClick={e => {
              setOpen2(!open2);
              setOpen1(!open1);
            }}
          >
            >
          </Arrow>
        </Container>
      </Container>
      <Container text_right hidden={open2 ? true : false}>
        <Container col_3>
          <Number mr>02</Number>
          <div>
            <Text>
              Praesent a pellentesque metus, vel molestie urna. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Proin et arcu quis enim rutrum sollicitudin.
              Aliquam scelerisque mauris id tellus molestie efficitur eu vitae
              sapien. Etiam dapibus purus in commodo sodales. Aenean imperdiet
              odio et nunc blandit, eu tempus elit scelerisque. Curabitur
              aliquet volutpat est, quis aliquam lacus consequat vel. Sed a ante
            </Text>
            <Container col_4_bar>
              <BottonScroll /> <BottonScroll /> <BottonScroll medium />
              <BottonScroll medium />
            </Container>
          </div>
          <Arrow
            as="button"
            ml
            onClick={e => {
              setOpen3(!open3);
              setOpen2(!open2);
            }}
          >
            >
          </Arrow>
        </Container>
      </Container>
      <Container text_right hidden={open3 ? true : false}>
        <Container col_3>
          <Number mr>03</Number>
          <div>
            <Text>
              Curabitur eget varius lectus, ut laoreet sem. Cras accumsan diam
              sed tortor ornare, in ultricies mauris accumsan. Pellentesque
              laoreet eget urna at bibendum. Nunc dapibus libero ut quam
              dignissim pharetra. Suspendisse enim lectus, suscipit quis mauris
              a, consequat hendrerit sapien. Aliquam ornare, dolor sed pulvinar
              vehicula, velit justo vulputate nunc, ac pellentesque tellus
              libero ac nulla. Ut cursus tincidunt magna, vel iaculis odio
            </Text>
            <Container col_4_bar>
              <BottonScroll /> <BottonScroll /> <BottonScroll />
              <BottonScroll medium />
            </Container>
          </div>
          <Arrow
            as="button"
            ml
            onClick={e => {
              setOpen4(!open4);
              setOpen3(!open3);
            }}
          >
            >
          </Arrow>
        </Container>
      </Container>
      <Container text_right hidden={open4 ? true : false}>
        <Container col_3>
          <Number mr>04</Number>
          <div>
            <Text>
              Proin at justo elementum, placerat quam eget, accumsan nulla.
              Aliquam sed dapibus ante. Etiam eget neque nulla. Donec iaculis
              tortor in sem maximus eleifend. Aenean hendrerit vestibulum leo,
              non feugiat neque molestie id. Donec imperdiet tortor neque, sed
              mattis nibh ullamcorper id. Interdum et malesuada fames ac ante
              ipsum primis in faucibus.
            </Text>
            <Container col_4_bar>
              <BottonScroll />
              <BottonScroll />
              <BottonScroll />
              <BottonScroll />
            </Container>
          </div>
          <Arrow
            as="button"
            ml
            onClick={e => {
              setOpen1(!open1);
              setOpen4(!open4);
            }}
          >
            >
          </Arrow>
        </Container>
      </Container>
    </div>
  );
}
