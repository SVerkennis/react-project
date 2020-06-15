import React from 'react';
import Header from "./components/Header";
import List from "./components/List";  //Header importiert  automatisch, wenn ich es ausschreibe <Header

const climbingholds = ["Sloper", "Pinch", "Crimp", "Edge"];
const animals = ["cat", "kittens", "big cats", "crazy cats"];

export default function App() {
  return (
    <div className="App">
      <Header />
        {/*climbingholds oder animals*/}
      <List items={climbingholds} />
    </div>
  );
}

