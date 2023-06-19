import React from "react";

 import './styles.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div>Batata</div>
      <ul>
        <li>Inicio</li>
        <li>Serviços</li>
        <li>Quem Somos</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
};

export default Navbar;
