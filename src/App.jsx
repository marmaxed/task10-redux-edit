import React from "react";
import "./App.css"
import ServiceList from "./components/ServiceList";
import ServiceAdd from "./components/ServiceAdd";

export default function App() {
  return <>
  <ServiceAdd />
  <ServiceList/>
  </>;
}