import React from "react";
import UserInfo from "./UserInfo";

const PremiumLeft = ({username}) => {
 return (
  <div className="premiumleft">
   <div className="premiumleft__info">
    <h3 className="premiumleft__title">Welcome, {username}! You have 12 days left of premium.</h3>
    <p className="premiumleft__desc">To continue with premium, you can upgrade now.</p>
   </div>

   <div className="premiumleft__buttons">
    <a href="#" className="btn">
     Learn More
    </a>
    <a href="#" className="btn">
     Upgrade
    </a>
   </div>
  </div>
 );
};

export default PremiumLeft;
