import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import More from "../Components/Bar/More";

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/more" element={<More/>}></Route>
      </Routes>
    </>
  );
}

export default CommonRouter;
