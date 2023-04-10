import profileIcon from "../assets/images/icons/profile.svg";
import timesIcon from "../assets/images/icons/times.svg";
import connectIcon from "../assets/images/icons/Wallet_connect.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Drawer(props) {
  const [drawerWidth, setDrawerWidth] = useState(props.drawerWidth);
  const handleClick = () => {
    setDrawerWidth(0);
    props.close(0);
  };
  return (
    <section className="rize-main">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   RIZE DRAWER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <div
        id="mySidenav"
        className="sidenav d-block"
        style={{ width: drawerWidth }}
      >
        <div className="row" style={{ marginBottom: 30 }}>
          <div className="col-6 v-center">
            <img className="rize-header-prifile-drawer" src={profileIcon} />
          </div>
          <div
            className="col-6 v-center"
            style={{ justifyContent: "flex-end" }}
          >
            <a className="closebtn" onClick={handleClick}>
              <img className="rize-icon-sm" src={timesIcon} />
            </a>
          </div>
        </div>
        <div className="side--drawer-option d-block">
          <Link to="/"> Dashboard</Link>
          <Link to="/roadmap">Road Map</Link>
          <Link to="/escrow">Escrow</Link>
          <Link to="/rize-stake-and-learn">LLE</Link>
          <Link to="/blog">Blog</Link>
          {/* <Link to="#">Bridge</Link> */}
          <Link to="/contact-us">ContactUs</Link>
        </div>
        <a>
          <button
            style={{ marginBottom: 30 }}
            className="btn rize-btn-green v-center"
          >
            <img
              className="rize-icon-sm"
              style={{ marginRight: 10 }}
              src={connectIcon}
            />{" "}
            Wallet Connect
          </button>
        </a>
      </div>
    </section>
  );
}