import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          {/* <a href="/">Visit my blog</a> */}
          <p>Hello! from umaidRather</p>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a href={img.url} key={img.url} className="icon" target="_blank">
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
