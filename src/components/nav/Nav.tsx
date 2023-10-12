import React from "react";
import style from "./nav.module.css";
import PrincipalImg from "../../css/PorkProsper.png";
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFacebook } from "react-icons/bs"

const Nav = () => {
  return (
    <>
      <main className={style.main}>
        <section className={style.sectionUp}>
            <div className={style.contactNumbers}>
              <p><IoLogoWhatsapp />+57 310 746 5499</p>
              <p><BsFacebook />PorkProsper</p>
            </div>
              <img src={PrincipalImg} alt="Logo" className={style.PrincipalImg}/>
            <div className={style.AttentionHours}>
              <p>Every day bringing the best proucts for you!</p>

            </div>
        </section>
      </main>
    </>
  );
};

export default Nav;
