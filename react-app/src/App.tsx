// import React from "react";
// import Navbar from "./Navbar";
import Sidebar from "./components/SideBar";
import Card from "./components/Card";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Sidebar />

      {/* <Heading /> */}

      <div className="main-content">
        <Card
          month="January"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="February"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="March"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="April"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="May"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="June"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="July"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="August"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="September"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="October"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="November"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
        <Card
          month="December"
          prize="$1,000 in cash prizes + Challenge accounts"
          contestants={3357}
        />
      </div>
    </div>
  );
}

export default App;
