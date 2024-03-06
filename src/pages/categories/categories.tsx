import React from "react";
import style from "./categories.module.css";

const Categories = () => {
  return (
    <>
      <main>
        <h1 className={style.title}>Categories</h1>
        <div className={style.categories}>
          <div className={style.category}>
            <h2>Category 1</h2>
            <p>Category 1 description</p>
          </div>
          <div className={style.category}>
            <h2>Category 2</h2>
            <p>Category 2 description</p>
          </div>
          <div className={style.category}>
            <h2>Category 3</h2>
            <p>Category 3 description</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Categories;
