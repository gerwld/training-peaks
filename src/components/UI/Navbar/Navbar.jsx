import React from "react";
import { ModalAuth } from "@/components";
import s from "./s.module.css";

const Navbar = () => {
 return (
  <>
   <div className={s.header_content + " line_sect"}>
    <div className={s.logo_box}>
     <div className={s.logo}>
      <img src="./assets/img/logo-bigger.svg" alt="Home" />
     </div>
    </div>

    <div className={s.header_group}>
     <ModalAuth />
    </div>
   </div>
  </>
 );
};

export default Navbar;
