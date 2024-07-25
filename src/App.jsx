import React, { useState } from "react";
import Counter from "./components/Counter";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <ListGroup />
    </div>
  );
};
export default App;
