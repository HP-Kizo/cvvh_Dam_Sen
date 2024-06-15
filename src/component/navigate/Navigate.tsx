import styles from "./Navigate.module.css";
interface NavigateProps {}

const Navigate: React.FC<NavigateProps> = () => {
  return (
    <div className={styles.navigate}>
      <div className={styles.nav__list}></div>
      <div className={styles.nav__content}></div>
    </div>
  );
};

export default Navigate;
