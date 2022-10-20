import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";

function App() {
  return (
    <>
      <div>
        <Layout />
      </div>
    </>
  );
}

export default App;
