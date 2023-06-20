import React, { useState } from "react";

import "./styles.css";

import logo from "../../assets/prma_white_label.png";

import { HamburgerButton } from "@icon-park/react";

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState(0);
  function handleClick() {
    if (activeNav == 0) {
      setActiveNav(1);
    }
    if (activeNav == 1) {
      setActiveNav(0);
    }

    console.log(activeNav);
  }

  function renderMobile() {
    if (activeNav == 0) {
      return (
        <nav className="mobile">
          <a className="active">Inicio</a>
          <a className="active">Serviços</a>
          <a className="active">Quem Somos</a>
          <a className="active">Contato</a>
        </nav>
      );
    }
  }
  return (
    <>
      <header>
        <div>
          <img src={logo} />
        </div>
        <nav>
          <a className="active">Inicio</a>
          <a className="active">Serviços</a>
          <a className="active">Quem Somos</a>
          <a className="active">Contato</a>
        </nav>
        <button onClick={() => handleClick()}>
          <HamburgerButton size={"42px"} />
        </button>
      </header>
      <div>{renderMobile()}</div>
    </>
  );
};

export default Navbar;
