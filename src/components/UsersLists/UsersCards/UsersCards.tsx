import React from "react";
import style from "./UsersCards.module.css";
import { useNavigate } from "react-router-dom";

interface User {
  id: Int16Array;
  username: string;
  email: string;
  phone: string;
  address: string;
  description: string;

  // incluye aquí cualquier otra propiedad que los usuarios puedan tener
}

const UsersCards: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate();
  return (
    <main className={style.main}>
      <div className={style.fatherContainer}>
        <div
          className={style.onClickForm}
          onClick={() => {
            navigate(`/users/${user.id}`);
          }}
        >
          <div className={style.sonContainer}>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address}</p>
            <p>{user.description}</p>
          </div>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default UsersCards;
