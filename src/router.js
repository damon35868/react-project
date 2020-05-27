import React from "react";
import Landing from "./pages/landing/index";
import { BrowserRouter, Route } from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
}

export default Routers;
