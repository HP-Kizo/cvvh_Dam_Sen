import { BackgroundProps } from "../../context/interface";
import styles from "./Background.module.css";

const Background: React.FC<BackgroundProps> = ({ image, alt }) => {
  return (
    <div className={styles.background}>
      <img className={styles.image} src={image} alt={alt} />
      <div className={styles.alt}>
        <h3>Mô tả</h3>
        <p className={styles.desc}>{alt}</p>
      </div>
    </div>
  );
};

export default Background;
