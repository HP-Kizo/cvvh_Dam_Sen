import styles from "./OperatingTime.module.css";
import { CalendarIcon, TimeAIcon, TimeBIcon } from "../../assets/Icon";
interface OperatingTimeProps {}

const OperatingTime: React.FC<OperatingTimeProps> = () => {
  return (
    <div className={styles.time}>
      <h1 className={styles.time__header}>Thời gian hoạt động</h1>
      <div className={styles.time__content}>
        <div className={styles.time__item}>
          <div className={styles.item__icon}>{CalendarIcon}</div>
          <div className={styles.item__undeline}></div>
          <div className={styles.item__content}>
            <h2>NGÀY MỞ CỬA</h2>
            <p>Tất cả các ngày</p>
            <p>(trừ thứ 3)</p>
          </div>
        </div>
        <div className={styles.time__item}>
          <div className={styles.item__icon}>{TimeAIcon}</div>
          <div className={styles.item__undeline}></div>
          <div className={styles.item__content}>
            <h2>GIỜ BÁN VÉ</h2>
            <p>
              Ngày thường: <span>7h30 - 16h00</span>
            </p>
            <p>
              Cuối tuần + Lễ: <span>7h30 - 19h00</span>
            </p>
          </div>
        </div>
        <div className={styles.time__item}>
          <div className={styles.item__icon}>{TimeBIcon}</div>
          <div className={styles.item__undeline}></div>
          <div className={styles.item__content}>
            <h2>GIỜ HOẠT ĐỘNG</h2>
            <p>
              Ngày thường: <span>8h00 - 18h00</span>
            </p>
            <p>
              Cuối tuần + Lễ: <span>7h30 - 21h00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingTime;
