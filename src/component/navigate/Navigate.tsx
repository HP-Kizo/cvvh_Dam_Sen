import React, { useState } from "react";
import styles from "./Navigate.module.css";
import CategoryList from "../categoryList/CategoryList";
import { categories } from "../../context/mockData";

interface NavigateProps {}

const Navigate: React.FC<NavigateProps> = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("games");

  const getNavItemClass = (category: string) => {
    return `${styles.nav_item} ${
      currentCategory === category ? styles.active : ""
    }`;
  };

  return (
    <div className={styles.navigate}>
      <div className={styles.wrap__nav}>
        <ul className={styles.nav__list}>
          <li
            className={getNavItemClass("games")}
            onClick={() => setCurrentCategory("games")}
          >
            TRÒ CHƠI
          </li>
          <li
            className={getNavItemClass("zoo")}
            onClick={() => setCurrentCategory("zoo")}
          >
            VƯỜN THÚ
          </li>
          <li
            className={getNavItemClass("scenery")}
            onClick={() => setCurrentCategory("scenery")}
          >
            CẢNH ĐẸP
          </li>
          <li
            className={getNavItemClass("stage")}
            onClick={() => setCurrentCategory("stage")}
          >
            SÂN KHẤU
          </li>
          <li
            className={getNavItemClass("education")}
            onClick={() => setCurrentCategory("education")}
          >
            GIÁO DỤC TRẢI NGHIỆM
          </li>
          <li
            className={getNavItemClass("food")}
            onClick={() => setCurrentCategory("food")}
          >
            ẨM THỰC
          </li>
        </ul>
        <div className={styles.nav__content}>
          <CategoryList categories={categories[currentCategory]} />
        </div>
      </div>
    </div>
  );
};

export default Navigate;
