import React from "react";
import './styles/Footer.css'
const Footer = () => {
  return (
    <div id="Footer">
      <div className="copyright">
        Copyright &copy; <a href="https://gautampatil.tech">Gautam Patil</a>
      </div>
      <div className="socials">
        <a href="https://discord.gg/mQPNB5hT">
          <i class="fa-brands fa-discord"></i>
        </a>
        <a href="https://github.com/gautampatil1">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/gautampatil1">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/gautampatil6969/">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
