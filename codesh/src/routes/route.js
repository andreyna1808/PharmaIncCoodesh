import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from "../pages/errorPage/errorPage";
import Home from "../pages/home/home";
import ListPatients from "../pages/listPatients/listPatients";

export default function Router() {
  return (
    <div>
      <header>

      </header>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/list-patients" element={<ListPatients/>} ></Route>
          <Route exact path="*" element={<ErrorPage/>} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

