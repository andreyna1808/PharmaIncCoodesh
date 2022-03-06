import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { All, Header, ImgLogo, ImgName, ImgProfile } from "../components/header";
import ErrorPage from "../pages/errorPage/errorPage";
import Home from "../pages/home/home";
import ListPatients from "../pages/listPatients/listPatients";

import Profile from '../constants/imgs/user.png'
import LogoName from '../constants/imgs/LogoPharma.png'

export default function Router() {
  return (
    <All>
      <Header>
        <ImgName src={LogoName} href='Logo name Pharma'/>
        <ImgProfile src={Profile} href='Logo'/>
      </Header>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/list-patients" element={<ListPatients/>} ></Route>
          <Route exact path="*" element={<ErrorPage/>} ></Route>
        </Routes>
      </BrowserRouter>

    </All>
  );
}

