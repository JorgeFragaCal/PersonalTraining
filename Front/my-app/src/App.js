import React from "react";
import { Menu } from "./components/Menu";
import { Home, Main } from "./pages/Home";
function App() {
  return (
    <Main>
      <header>
        <Menu />
      </header>
      <Home></Home>
    </Main>
  );
}

export default App;
