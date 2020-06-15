import React from 'react';
import "./App.css"
import Header from "./components/Header"; //Header importiert  automatisch, wenn ich es ausschreibe <Header
import List from "./components/List";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const climbingholds = ["Sloper", "Pinch", "Crimp", "Edge"];
const animals = ["cat", "kittens", "big cats", "crazy cats"];
const weather = ["sunny", "cloudy", "rainy", "foggy"];

export default function App() {

  return (
    <div className="App">
        <Header>climbing holds,cats and weather</Header>
        <MainContent>
      <List items={climbingholds} />
      <List items={animals} />
      <List items={weather} />
        </MainContent>

        <Footer>Its all about balance and cats</Footer>
    </div>
  );
}

