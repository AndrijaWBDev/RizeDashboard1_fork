import rize1 from "../assets/images/logo/rize_w.svg";
import searchIcon from "../assets/images/icons/search.svg";
import filterIcon from "../assets/images/icons/filter.svg";
import profileICon from "../assets/images/icons/profile.svg";
import add_to_cartIcon from "../assets/images/icons/add_to_cart.svg";
import menuIcon from "../assets/images/icons/menu.svg";
import Drawer from "./rizedrwaer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';

import Net1 from "../assets/images/img/Networks/net1.svg";
import Net2 from "../assets/images/img/Networks/net2.svg";
import Net3 from "../assets/images/img/Networks/net3.svg";
import Net4 from "../assets/images/img/Networks/net4.svg";
import Net5 from "../assets/images/img/Networks/net5.svg";
import Net6 from "../assets/images/img/Networks/net6.svg";
import Net7 from "../assets/images/img/Networks/net7.svg";
import Net8 from "../assets/images/img/Networks/net8.svg";
import Net9 from "../assets/images/img/Networks/net9.svg";
import Net10 from "../assets/images/img/Networks/net10.svg";
import Net11 from "../assets/images/img/Networks/net11.svg";
import Filter from "./filter";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(0);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setDrawerWidth(275);
  };
  const handlefilter = () => {
    setisclicked(!isclicked);
  };

  const [isclicked, setisclicked] = useState(false);
  return (
    <section className="rize-container">
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                   WEB HEADER                                   || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-container-fluid rize-header rize-web-header">
        <div className="row">
          <div className="col-sm-5">
            <Link
              to={{
                pathname: "/",
                query: { refresh: true }, // your data array of objects
              }}
            >
              <img className="rize-header-logo" src={rize1} />
            </Link>
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
            <div className="rize-header-search">
              <input />
              <AiOutlineSearch color="#2fed00" />
            </div>
            <div className="rize-header-filter">
              <img src={filterIcon} onClick={handlefilter} />
            </div>
          </div>

          <div className="col-sm-7 v-center" style={{ color: "white" }}>
            <div className="rize-header-right-section">
              <div className="v-center">
                <div class="dropdown">
                  <a
                    style={{ height: 16 }}
                    className="rize-nav-item dropdown-toggle"
                  >
                    {/*  add utility, add members, , add nft market, */}
                    Pages
                  </a>
                  <ul class="dropdown-menu" style={{ marginRight: 15 }}>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/members"
                      >
                        Members
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/validator"
                      >
                        Validator
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/stake-coreum"
                      >
                        Stake Coreum
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Utility
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Members
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        NFT Market
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/roadmap">
                        Roadmap
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/contact-us">
                        Contact Us
                      </Link>
                    </li> */}

                    {/* <li>
                      <Link className="dropdown-item" to="/wallet">
                        Wallet
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div
                  className="rize-nav-item-network nets"
                  style={{ height: 60 }}
                >
                  <a
                    className="rize-nav-item"
                    style={{ marginRight: 10, height: 16, paddingLeft: 0 }}
                  >
                    Networks
                  </a>
                  <div className="rize-dropdown">
                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item1">
                          <img src={Net1} />
                          <span>Coreum</span>
                        </div>
                        <div className="v-center rize-dropdown-padding rize-dropdown-border-left rize-dropdown-item2">
                          <img src={Net7} />
                          <span>XRPL</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item3">
                          <img src={Net2} />
                          <span>Ethereum</span>
                        </div>
                        <div className="v-center rize-dropdown-padding rize-dropdown-border-left rize-dropdown-item4">
                          <img src={Net8} />
                          <span>Cosmos</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item5">
                          <img src={Net3} />
                          <span>BSC</span>
                        </div>
                        <div className="v-center rize-dropdown-padding rize-dropdown-border-left rize-dropdown-item6">
                          <img src={Net9} />
                          <span>Solana</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item7">
                          <img src={Net4} />
                          <span>Polygon</span>
                        </div>
                        <div className="v-center rize-dropdown-padding rize-dropdown-border-left rize-dropdown-item8">
                          <img src={Net10} />
                          <span>Hedera</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item9">
                          <img src={Net5} />
                          <span>Avalanche</span>
                        </div>
                        <div className="v-center rize-dropdown-padding rize-dropdown-border-left rize-dropdown-item10" style={{ marginTop: 1 }}>
                          <img src={Net11} />
                          <span>Tezos</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex">
                        <div className="v-center rize-dropdown-padding rize-dropdown-item11" style={{ marginLeft: 0.5 }}>
                          <img src={Net6} />
                          <span>Near</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <Link to="/">
                  <button
                    className="btn rize-btn-green v-center"
                    style={{ padding: 11, color: "#212529" }}
                  >
                    Wallet Connect
                  </button>
                </Link>
                <div className="rize-header-divider" />
                <img className="rize-header-prifile" src={profileICon} />
                <img className="rize-icon-sm" src={add_to_cartIcon} />
              </div>
            </div>
          </div>
        </div>
        {isclicked && <Filter />}
      </header>
      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                  MOBILE HEADER                                  || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <header className="container rize-container-fluid rize-header rize-mobile-header">
        <div className="row">
          <div className="col-4 v-center">
            <img
              onClick={handleClick}
              className="rize-icon-sm"
              src={menuIcon}
            />
            <Drawer
              key={drawerWidth}
              close={() => {
                setDrawerWidth(0);
              }}
              drawerWidth={parseInt(drawerWidth)}
            />
          </div>
          <div className="col-4 v-center h-center">
            <Link to="/">
              <img className="rize-header-logo" src={rize1} />
            </Link>
          </div>
          <div className="col-4 v-center">
            <div className="rize-header-right-section">
              <img
                className="rize-icon-sm"
                style={{ marginRight: 16 }}
                src={add_to_cartIcon}
              />
              <img id="s-icon" className="rize-icon-sm d-none" src={searchIcon} />
              {/* <img id="#s-icon_1" className="rize-icon-sm" src={searchIcon} /> */}
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
{
  /*  ||--------------------------------------------------------------------------------|| */
}
{
  /*  || RIZE HEADER || */
}
{
  /*  ||--------------------------------------------------------------------------------|| */
}
