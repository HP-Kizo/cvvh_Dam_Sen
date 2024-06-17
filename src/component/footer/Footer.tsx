import React from "react";
import styles from "./Footer.module.css";
import { CompanyFooter, LogoIcon, NameCompanyFooter } from "../../assets/Icon";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>TRỰC THUỘC</h2>
          <div className={styles.logo}>
            {LogoIcon}
            <div className={styles.company}>
              {NameCompanyFooter}
              {CompanyFooter}
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section__top}>
            <h2 className={styles.title}>LIÊN HỆ</h2>
            <address className={styles.contact}>
              <p>03 Hòa Bình, Phường 3, Quận 11</p>
              <p>📞 0839 632 394</p>
              <p>✉️ phuthotouristquan11@gmail.com</p>
            </address>
          </div>
          <div className={styles.section__bottom}>
            <h2 className={styles.title}>GIỜ MỞ CỬA</h2>
            <ul className={styles.hours}>
              <li>
                Ngày thường: <span>8h00 - 18h00</span> (bán vé từ 7h30 - 16h00)
              </li>
              <li>
                Cuối tuần + Lễ: <span>7h30 - 21h00</span> (bán vé từ 7h30 -
                19h00)
              </li>
              <li>
                Công viên nghỉ <span>thứ 3</span> hàng tuần
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>
            CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
          </h2>
          <ul className={styles.units}>
            <li>Công ty CP DVL DL Phú Thọ</li>
            <li>Khu du lịch sinh thái Vàm Sát</li>
            <li>Khách sạn Ngọc Lan</li>
            <li>Khách sạn Phú Thọ</li>
            <li>Trung tâm Du lịch Đầm Sen</li>
            <li>Cà phê Vườn Đá</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          Copyright © Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
