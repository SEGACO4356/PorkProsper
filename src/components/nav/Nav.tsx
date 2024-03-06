import { useState } from 'react';
import style from './nav.module.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <main>
      <nav className={style.nav}>
        <ul className={style.ulPrincipal}>
          <div className={style.firstContainerPork}>
          <h1 className={style.title}>
            <Link to="/"><PorkProsper /> </Link>
          </h1>
          </div>
           <li className={style.dropdown}>
            <DropDownItem text={"Categorias"} />
           </li>
          <li className={style.dropdown}>
            <DropDownItem text={"Redes"} />

          </li>
        
          <li className={style.dropdown}>
            <DropDownItem text={"Contacto"} />
          </li>
          <li className={style.dropdown}>
            <DropDownItem text={"Usuarios"} />
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
  const [isOpen, setIsOpen] = useState(false);

  if (props.text === "Redes") {
    return (
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <a>{props.text}</a>
        {isOpen && (
          <ul>
            <li className={style.dropdownItem}><Link to="https://www.facebook.com" target='_blank'>Facebook</Link></li>
            <li className={style.dropdownItem}><Link to="https://www.instagram.com" target='_blank'>Instagram</Link></li>
          </ul>
        )}
      </div>
    );
  }
  else if (props.text === "Categorias") {
    return (
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <a>{props.text}</a>
        {isOpen && (
          <ul>
            <li className={style.dropdownItem}><Link to="/categories">Categorias</Link></li>
          </ul>
        )}
      </div>
    );
  }
  else if (props.text === "Usuarios") {
    return (
      <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <a>{props.text}</a>
        {isOpen && (
          <ul>
            <li className={style.dropdownItem}><Link to="/users">Ver Socios</Link></li>
            <li className={style.dropdownItem}><Link to="/create-user">Crear Usuario</Link></li>
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
          <li className={style.dropdownItem}><a href="#">+57 123456789</a></li>
        </ul>
      )}
    </div>
  );
}

export default Nav;