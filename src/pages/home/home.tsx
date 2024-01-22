import style from "./home.module.css";
import primerCerdo from "../../assets/CerdoInicio-removebg-preview.png";
import segundoCerdo from "../../assets/PorkProsperAnimate.jpeg";

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.initialDivisor}>
          <hr />
        </div>
        <h1 className={style.title}>PorkProsper</h1>
        <div className={style.firstContainer}>
          <div className={style.containerSon}>
            <p className={style.principaltext}>
              Descubre la excelencia en la cría porcina con PorkProsper, la
              empresa líder en la venta de cerdos de alta calidad. En
              PorkProsper, nos enorgullece ofrecer cerdos sanos, bien cuidados y
              alimentados con los estándares más rigurosos. Ya sea que estés
              buscando expandir tu negocio ganadero o disfrutar de la mejor
              carne en tu mesa, nuestros cerdos son la elección perfecta. Confía
              en PorkProsper para obtener cerdos robustos y saludables que
              cumplen con los más altos estándares de la industria. ¡Haz tu
              pedido ahora y experimenta la diferencia con PorkProsper!
              <hr />
              <hr />
              <hr />
              <hr />
              Descubre la distinción en la cría porcina con PorkProsper, donde
              nos enorgullece afirmar que tenemos los mejores cerdos de la
              región. Nuestro compromiso con la excelencia se refleja en cada
              detalle, desde la crianza ética hasta las prácticas alimenticias
              orgánicas. En PorkProsper, nos esforzamos por proporcionar cerdos
              de la más alta calidad, criados con cuidado y alimentados
              exclusivamente con ingredientes orgánicos. Este enfoque meticuloso
              garantiza no solo la salud y robustez de nuestros cerdos, sino
              también la calidad insuperable de su carne. Si buscas una
              experiencia gastronómica excepcional y sostenible, confía en
              PorkProsper para ofrecerte los mejores cerdos de la región,
              alimentados de manera orgánica. ¡Haz tu pedido ahora y descubre el
              verdadero sabor de la calidad y la sostenibilidad en cada bocado!
              <hr />
              <hr />
              <hr />
              <hr />
             ¡Prueba PorkProsper!
            </p>

            <img
              src={primerCerdo}
              alt="Cerdo"
              className={style.primerCerdoImg}
            />
          </div>
        </div>
        <div className={style.containerSonTwo}>
          <img src={segundoCerdo} className={style.secondPigImg} alt="" />
          <p className={style.secondText}>
          <h2>Sabías que?</h2>
            PorkProsper se destaca como una de las principales distribuidoras de
            carne en la región, consolidando su posición como referente en la
            industria porcina. Con un compromiso inquebrantable hacia la calidad
            y la excelencia en el servicio, la empresa se ha ganado la confianza
            de sus clientes como proveedor líder de productos porcinos. La
            dedicación de PorkProsper a la excelencia en cada paso de la cadena
            de suministro la ha posicionado como una opción preferida para
            aquellos que buscan carne de alta calidad y confiabilidad en la
            distribución.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
