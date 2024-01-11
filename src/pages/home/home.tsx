import style from "./home.module.css";
import primerCerdo from "../../assets/CerdoInicio-removebg-preview.png";

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.firstContainer}>
          <p className={style.principaltext}>
            Descubre la excelencia en la cría porcina con PorkProsper,
            la empresa líder en la venta de cerdos de alta calidad. En PorkProsper,
            nos enorgullece ofrecer cerdos sanos, bien cuidados y alimentados con los estándares más rigurosos.
            Ya sea que estés buscando expandir tu negocio ganadero o disfrutar de la mejor carne en tu mesa,
            nuestros cerdos son la elección perfecta.
            Confía en PorkProsper para obtener cerdos robustos y saludables que cumplen con los más altos estándares de la industria.
            ¡Haz tu pedido ahora y experimenta la diferencia con PorkProsper!</p>
          <img src={primerCerdo} alt="Cerdo" className={style.primerCerdo}/>
        </div>
      </main>
    </>
  );
};

export default Home;
