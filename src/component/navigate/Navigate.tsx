import { NavLink } from "react-router-dom";
import styles from "./Navigate.module.css";
interface NavigateProps {}

const Navigate: React.FC<NavigateProps> = () => {
  return (
    <div className={styles.navigate}>
      <div className={styles.wrap__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              TRÒ CHƠI
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              VƯỜN THÚ
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              cẢNH ĐẸP
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              SÂN KHẤU
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              GIÁO DỤC TRẢI NGHIỆM
            </NavLink>
          </li>
          <li className={styles.nav_item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              ẨM THỰC
            </NavLink>
          </li>
        </ul>
        <div className={styles.nav__content}></div>
      </div>
    </div>
  );
};

export default Navigate;
