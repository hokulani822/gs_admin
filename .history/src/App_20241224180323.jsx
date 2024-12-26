import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* 先ほど作成したsrc/pages/homeを表示させる🤗 */}
      <Home />
    </>
  );
}

export default App;