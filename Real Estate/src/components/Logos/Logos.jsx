import React from "react";
import "./Logos.css";
import prologis from "../../imgs/prologis.png";
import tower from "../../imgs/tower.png";
import equinix from "../../imgs/equinix.png";
import realty from "../../imgs/realty.png";
const Logos = () => {
  return (
    <section className="l-wrapper">
      <div className="paddings flexCenter innerWidth l-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </section>
  );
};
export default Logos;
