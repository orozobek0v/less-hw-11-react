import { useEffect, useRef } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const colorRef = useRef("red");
  useEffect(() => {
    const intervaled = setInterval(() => {
      const background = colorRef.current.style;
      if (background.background == "red") {
        return (background.background = "green");
      }
      return (background.background = "red");
    }, 2000);
    return () => clearInterval(intervaled);
  }, []);
  return (
    <div className="App">
      <Div style={{ background: colorRef }} ref={colorRef}></Div>
    </div>
  );
}

export default App;

const Div = styled.div`
  width: 500px;
  height: 500px;
  border: 2px solid black;
  margin: auto;
  margin-top: 20px;
`;
