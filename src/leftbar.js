import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Leftbar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      <hr class="sidebar-divider my-0" />
      <li class="nav-item active">
        <Link to="/Dashboard">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </Link>
      </li>
      <hr class="sidebar-divider" />
      <div class="sidebar-heading">Interface</div>
      <li class="nav-item">
        <Link to="/User">
          <a class="nav-link collapsed">
            <i class="fas fa-fw fa-cog"></i>
            <span>Users(Crud)</span>
          </a>
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/Product">
          <a class="nav-link collapsed">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Products</span>
          </a>
        </Link>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        ></div>
      </li>
    </ul>
  );
}

export default Leftbar;
