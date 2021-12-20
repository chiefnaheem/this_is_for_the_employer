import React from "react";
// import { NavLink } from "react-router-dom";
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div>
          <p className={classes.text}>
            Copyright © 2021 Job Finder | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;