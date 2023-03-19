import React from "react";
import { ModalAuth } from "@/components";

const Navbar = ({authName}) => (
   <div className="header_content line_sect">
    <a href="/" className="navbar-l1_logo">Training App</a>
    <div className="header_group">
     <ModalAuth authName={authName} />
    </div>
   </div>
 );

export default Navbar;