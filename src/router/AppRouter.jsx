import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Regiser.jsx";
import Home from "../pages/Home.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import Navbar from "../components/Navbar.jsx";
import ContactDetail from "../pages/ContactDetail.jsx";
import ContentWrapper from "../components/ContentWrapper.jsx";
import NotFound from "../pages/NotFound.jsx";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<ContactDetail />} />
          </Route> 
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ContentWrapper>
    </BrowserRouter>
  );
};

export default AppRouter;
