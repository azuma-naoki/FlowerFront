import { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Body from "./components/Select";
import Footer from "./components/Footer";
import Select from "./components/Select";
import Result from "./components/Result";

function App() {
    return (
      <>
        <Header/>
        {/* <Routes>
            <Route path="/" element={<Select setID={setID}/>} />
            <Route path="/result" element={<Result e_id={e_id}/>} />
        </Routes> */}
        <Body />
        <Footer/>
      </>
    );
  }
  
  export default App;