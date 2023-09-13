import React from "react";
import "./Hero.css";
import heroimg from "../../imgs/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hr-wrapper">
      <div className="flexCenter innerWidth paddings hr-container">
        <div className="flexColStart hr-left">
          <div className="or-circle"></div>
          <div className="hr-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
              DISCOVER
              <br /> MOST SUITABLE
              <br /> PROPERTY
            </motion.h1>
          </div>
          <div className="flexColStart hr-description">
            <span className="secondaryText">
              Find a variety of property that suits you very easily
            </span>
            <span className="secondaryText">
              Forgot all dificulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter hr-search">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hr-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring"
            }}
            className="im-container"
          >
            <img src={heroimg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
