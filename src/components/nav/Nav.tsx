import { useState } from 'react';
import PrincipalImg from '../../assets/PorkProsper.png'; // replace with your actual image path
import style from './nav.module.css';
import { FaUserCircle } from 'react-icons/fa';

const Nav = () => {
  return (
    <main>
      <nav className={style.nav}>
        <ul>
          <li>
              <PorkProsper />
          </li>
        </ul>
        <ul>
          <li className={style.dropdown}>
            <DropDownItem text={"Redes"} />

          </li>
          <li className={style.logo}>
            <img src={PrincipalImg} alt="" className={style.logo} />
          </li>
          <li className={style.dropdown}>
            <DropDownItem text={"Contacto"} />
          </li>
        </ul>
        <ul >
          <li className={style.dropdown}>
            <span className={style.userIcon}><FaUserCircle /></span>
          </li>
        </ul>
      </nav>
    </main>
  );
};
const PorkProsper = () => {
  const [isHoveredPork, setIsHoveredPork] = useState(false);
  const [isHoveredProsper, setIsHoveredProsper] = useState(false);

  return (
    <span>
      <span className={style.pork}
        onMouseEnter={() => setIsHoveredPork(true)}
        onMouseLeave={() => setIsHoveredPork(false)}
        style={{ color: isHoveredPork ? 'red' : 'white' }}
      >
        Pork
      </span>
      <span
      className={style.prosper}
        onMouseEnter={() => setIsHoveredProsper(true)}
        onMouseLeave={() => setIsHoveredProsper(false)}
        style={{ color: isHoveredProsper ? 'white' : 'red' }}
      >
        Prosper
      </span>
    </span>
  );
};

const DropDownItem = (props: any) => {

  const openFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  }
  const openInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  }
  const [isOpen, setIsOpen] = useState(false);

  if (props.text === "Redes") {
    return (
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <a>{props.text}</a>
        {isOpen && (
          <ul>
            <li><a href="" onClick={openFacebook}>Facebook</a></li>
            <li><a href="" onClick={openInstagram}>Instagram</a></li>
          </ul>
        )}
      </div>
    );
  }

  return (

    <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a>{props.text}</a>
      {isOpen && (
        <ul>
          <li><a href="#">+57 123456789</a></li>
        </ul>
      )}
    </div>
  );
}

export default Nav;