import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem.jsx";
import styles from '../styles/Home.module.css';

const MENU_LIST = [
  { text: "Verify", href: "/" },
  { text: "About", href: "/about" },
  { text: "Team", href: "/team" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <img src="/truthCamLogo2.png" alt="TruthCamera logo" className={styles.logo2} />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              style={{backgroundColor:'white', width:"80%", height:'30px'}}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;