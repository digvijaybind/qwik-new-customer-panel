import React, {useState} from "react";
import styles from "./hamburgerMenu1.module.css";
const HamburgerMenu1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu font-sans">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>
      {isOpen && (
        <div style={{background: "#fff", padding: "20px", cursor: "pointer"}}>
          <ul className="">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu1;
