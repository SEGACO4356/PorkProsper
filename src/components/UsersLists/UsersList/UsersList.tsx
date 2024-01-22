import { useEffect, useState } from "react";
import { getAllUsers } from "../../../api/UsersApi.js";
import UsersCards from "../UsersCards/UsersCards.tsx";
import style from "./UsersList.module.css";
const UsersList = () => {
  useEffect(() => {
    async function LoadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
    }
    LoadUsers();
  }, []);

  interface User {
    id: Int16Array;
    username: string;
    email: string;
    phone: string;
    address: string;
    description: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  return (
    <>
      <main className={style.main}>
        <section className={style.sectionOne}>
          {users.map((user, key) => (
            <div key={key} className={style.cardsmap}>
              <UsersCards key={user.username} user={user} />
            </div>
          ))}
        </section>
        <section className={style.sectionTwo}>
          <div className={style.containerText}>
            <h2>¡Nuestros Clientes!</h2>
            <p className={style.textUsers}>
              En PorkProsper, extendemos una cálida bienvenida a todos nuestros
              registrados en la página, quienes forman parte de nuestra
              apasionada comunidad porcina. Desde agricultores emprendedores
              hasta amantes de la buena cocina, cada miembro registrado comparte
              un interés común en la calidad y sostenibilidad en la cría
              porcina. Al unirte a nosotros, te conectas con una red diversa de
              individuos apasionados por la excelencia en la producción porcina.
              Ya sea que estés aquí para explorar oportunidades de negocios
              ganaderos o simplemente para disfrutar de la mejor carne en tu
              mesa, tu participación en PorkProsper contribuye a hacer de
              nuestra comunidad un lugar vibrante y colaborativo. ¡Bienvenido a
              PorkProsper, donde la calidad y la pasión por los cerdos nos unen!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default UsersList;
