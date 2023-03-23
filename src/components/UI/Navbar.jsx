import React from "react";
import { ModalAuth } from "@/components";
import { NavLink } from "react-router-dom";

const Navbar = ({ authName }) => (
 <div className="header_content line_sect">
  <NavLink href="/" className="navbar-l1_logo">
   Training App
  </NavLink>
  <div className="header_group">
   <ModalAuth authName={authName} />
  </div>
 </div>
);

export default Navbar;
