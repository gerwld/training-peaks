import React from "react";
import { ModalAuth } from "@/components";
import { NavLink } from "react-router-dom";

const Navbar = (authObj) => (
 <div className="header_content line_sect">
  <NavLink to="/" className="navbar-l1_logo">
   Training App
  </NavLink>
  <div className="header_group">
   <ModalAuth {...authObj} />
  </div>
 </div>
);

export default Navbar;
