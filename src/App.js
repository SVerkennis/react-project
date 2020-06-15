import React from 'react';
import "./App.css"
import Header from "./components/Header"; //Header importiert  automatisch, wenn ich es ausschreibe <Header
import List from "./components/List";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const climbingholds = ["Sloper", "Pinch", "Crimp", "Edge"];
const animals = ["cat", "kittens", "big cats", "crazy cats"];

export default function App() {

    const [itemsToDisplay, setItemsToDisplay] = React.useState(climbingholds);

    function displayClimbingholds() {
        setItemsToDisplay(climbingholds);
    }

    function displayAnimals() {
        setItemsToDisplay(animals);
    }

  return (
    <div className="App">
        <Header>climbing holds,cats and weather</Header>

        <MainContent>
            <button onClick={displayClimbingholds}>show me climbingholds!</button>
            <button onClick={displayAnimals}>show me animals!</button>
      <List items={itemsToDisplay} />
        </MainContent>

        <Footer>Its all about balance and cats</Footer>
    </div>
  );
}

