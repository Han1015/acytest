import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Banner from "../../components/Banner";

import Header from "../../Containers/Header";
import Webinars from "../../Containers/Webinars";
import Register from "../Register/Register";
import "./style.scss";

export default function Home() {
  return (
    <div className="body-wrapper">
      <Banner />
      <Webinars />
      <Register />
    </div>
  );
}
