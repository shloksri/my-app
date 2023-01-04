import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// export const AppRouter = () => {
//   const [name, setName] = useState("Shlok");

//   return <div>AppRouter</div>;
// };
let val = "";
export default function AppRouter() {
  const [name, setName] = useState("Shlok");
  const changeName = (event) => {
    console.log("event.target.value :----", event.target.value);
    setName(event.target.value);
  };

  return (
    <Router>
      <div>
        Name: {name}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About name={name} changeName={changeName} />
          </Route>
          <Route path="/dashboard">
            <Dashboard name={name} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <input type="text" onChange={props.changeName} />
      <br />
      Name: {props.name}
      {/* <Dashboard val={val} /> */}
    </div>
  );
}

function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Name from props: {props.name}</p>
    </div>
  );
}
