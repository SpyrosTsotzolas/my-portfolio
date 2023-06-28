import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

import "./home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
