import { CallIcon, Message } from "../../assets/Icon";
import styles from "./Contact.module.css";
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__item}>{CallIcon}</div>
      <div className={styles.contact__item}>{Message}</div>
    </div>
  );
};

export default Contact;
