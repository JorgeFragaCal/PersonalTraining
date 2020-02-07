import React from "react";
import { Container, Title2, Number, Text, BottonScroll } from "../pages/Home";
export function About02() {
  return (
    <Container text_right hidden>
      <Title2>Titulo 2</Title2>
      <Container col_3>
        <Number mr>02</Number>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          suscipit nec risus ut varius. Ut eu dolor a dui mattis mattis at
          iaculis purus. Aliquam erat volutpat. Suspendisse bibendum congue
          sapien, ut tempor lorem blandit scelerisque. Proin quis nisi sapien.
          Nam hendrerit varius aliquam. Maecenas eu fermentum felis, vel
          eleifend velit. Quisque non fringilla augue. Vivamus et ornare quam,
          id ullamcorper nisi.
          <Container col_4>
            <BottonScroll medium /> <BottonScroll /> <BottonScroll medium />
            <BottonScroll medium />
          </Container>
        </Text>
        <Number as="button" ml onClick={e => e}>
          >
        </Number>
      </Container>
    </Container>
  );
}
