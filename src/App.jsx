import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "styled-components";
import AccordianComponent from "./components/AccordianComponent";
function App() {
  return (
    <div className="App">
      <Label>Accordian</Label>
      <AccordianComponent />
    </div>
  );
}

export default App;
const Label = styled.h1`
  font-family: "Manufacturing Consent", sans-serif;
  font-size: 5rem;
`;
