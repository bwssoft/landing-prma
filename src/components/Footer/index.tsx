"use client";
import React from "react";
import Image from "next/image";
import "./styles.css";
import logo from "./assets/prma_white_label.png";
import whatappIcon from "../../assets/whatsapp.png";
import { PhoneTwo, LocalTwo } from "@icon-park/react";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="section1">
        <img
          width={240}        
        src="./assets/prma_white_label.png" />
        <div>
          <div>Soluções rápidas e efetivas na área de segurança.</div>
          <div>
            <h6>PRMA Federal</h6>
            <h6>© Todos os direitos reservados</h6>
          </div>
        </div>
      </div>
      <div className="section2">
        <h4>Serviços</h4>
        <ul>
          <li>
            <a href="#">Central de monitoramento</a>
          </li>
          <li>
            <a href="#">Pronta resposta veicular</a>
          </li>
          <li>
            <a href="#">Pronta resposta patrimonial</a>
          </li>
          <li>
            <a href="#">Assistência veicular 24 horas</a>
          </li>
          <li>
            <a href="#">Acompanhamento jurídico</a>
          </li>
          <li>
            <a href="#">Sindicância</a>
          </li>
        </ul>
      </div>
      <div className="section3">
        <h4>Contato</h4>
        <span>
          <PhoneTwo />
          <h4>+55 (11) 4195-0859</h4>
        </span>
        <h5>contato@prmafederal.com.br</h5>
        <span>
          <LocalTwo />
          <h5>Alphaville Comercial Barueri - SP</h5>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
