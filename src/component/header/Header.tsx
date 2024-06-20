import styles from "./Header.module.css";
import { CallIcon, CategoryIcon, ClockIcon, Message } from "../../assets/Icon";
import { HeaderProps } from "../../context/interface";

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={styles.introduce__header}>
      <h1>{props.title}</h1>
      {props.category && props.date && (
        <div className={styles.wrap_category}>
          <div className={styles.category}>
            {CategoryIcon}
            <h3>{props.category}</h3>
          </div>
          <div className={styles.date}>
            {ClockIcon}
            <p>{props.date}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
