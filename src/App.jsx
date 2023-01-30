import React from "react";
import { Button, Header } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header>여기는 헤더에용</Header>
      <main>
        <Button>버튼1</Button>
        <Button>버튼2</Button>
        <Button>버튼3</Button>
        <Button>버튼4</Button>
      </main>
    </div>
  );
};

export default App;
