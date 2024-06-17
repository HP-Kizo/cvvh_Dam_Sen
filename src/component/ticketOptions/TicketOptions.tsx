import React from "react";
import styles from "./TicketOptions.module.css";
import { CheckIcon, XMark } from "../../assets/Icon";

const TicketOptions: React.FC = () => {
  return (
    <div className={styles.ticketOptions}>
      <h1 className={styles.title}>VÉ TRONG CÔNG VIÊN</h1>
      <div className={styles.ticketContainer}>
        <div className={styles.ticket}>
          <div className={styles.ticketTitle}>
            <h2>Vé Tham Quan</h2>
          </div>
          <div className={styles.content}>
            <ul className={styles.features}>
              <li>
                {CheckIcon} <span>Tham quan trong ngày</span>
              </li>
              <li>
                {XMark}
                <span className={styles.lineThrough}>Bao gồm trò chơi</span>
              </li>
              <li>
                {XMark}
                <span className={styles.lineThrough}>Dịch vụ xe điện</span>
              </li>
            </ul>
            <div className={styles.pricing}>
              <li className={styles.pricing__inside}>Mua tại cổng:</li>
              <p>+ 120.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 80.000 VNĐ/trẻ em (&lt;1.4m)</p>
              <li className={styles.pricing__inside}>
                Mua tại cổng Công viên nước:
              </li>
              <p>+ 80.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 50.000 VNĐ/trẻ em (&lt;1.4m)</p>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <h2 className={styles.ticketTitle}>Vé Trọn Gói</h2>
          <div className={styles.content}>
            <ul className={styles.features}>
              <li>
                {CheckIcon}
                <span>Tham quan trong ngày</span>
              </li>
              <li>
                {CheckIcon}
                <span>Bao gồm trò chơi</span>
              </li>
              <li>
                {XMark}
                <span>Thủy cung</span>
              </li>
              <li>
                {XMark}
                <span>Dịch vụ xe điện</span>
              </li>
            </ul>
            <div className={styles.pricing}>
              <li className={styles.pricing__inside}>Mua tại cổng:</li>
              <p>+ 260.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 180.000 VNĐ/trẻ em (&lt;1.4m)</p>
              <li className={styles.pricing__inside}>
                Mua tại cổng Công viên nước:
              </li>
              <p>+ 220.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 150.000 VNĐ/trẻ em (&lt;1.4m)</p>
              <li className={styles.pricing__inside}>Mua trong công viên:</li>
              <p>+ 150.000 VNĐ/người</p>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <h2 className={styles.ticketTitle}>Vé Silver</h2>
          <div className={styles.content}>
            <ul className={styles.features}>
              <li>
                {CheckIcon} <span>Tham quan trong ngày</span>
              </li>
              <li>
                {CheckIcon} <span>Bao gồm trò chơi</span>
              </li>
              <li>
                {CheckIcon} <span>Lối đi riêng</span>
              </li>
              <li>
                {XMark}
                <span>Thủy cung</span>
              </li>
              <li>
                {XMark}
                <span>Massage cá</span>
              </li>
              <li>
                {XMark}
                <span>Dịch vụ xe điện</span>
              </li>
            </ul>
            <div className={styles.pricing}>
              <li className={styles.pricing__inside}>Mua tại cổng:</li>
              <p>+ 380.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 240.000 VNĐ/trẻ em (&lt;1.4m)</p>
              <li className={styles.pricing__inside}>
                Mua tại cổng Công viên nước:
              </li>
              <p>+ 300.000 VNĐ/người (&gt;1.4m)</p>
              <p>+ 200.000 VNĐ/trẻ em (&lt;1.4m)</p>
              <li className={styles.pricing__inside}>Mua trong công viên:</li>
              <p>+ 280.000 VNĐ/người</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.noteContainer}>
        <div className={styles.noteTitle}>GHI CHÚ:</div>
        <ul className={styles.notes}>
          <li>
            <span>Giờ bán vé:</span> 8 giờ 00 - 17 giờ 30
          </li>
          <li>
            <span>Vé mua từ cổng:</span> là vé được bán tại 2 cổng chính số 1A
            Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).
          </li>
          <li>
            <span>Vé mua trong công viên:</span> là loại vé được bán tại các
            quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào
            cổng của quý khách.
          </li>
          <li>
            <span>Vé từ cổng Công viên nước:</span> là loại vé bán từ cổng liên
            thông phía công viên nước. Đây là loại vé cổng liên thông phía công
            viên nước. Đây là loại vé dành cho các du khách vui chơi phía công
            viên nước, sau đó vào CVVH Đầm Sen.
          </li>
          <li>
            <span>Vé trọn gói:</span> là vé đã bao gồm tất cả các trò chơi,
            không bao gồm xe điện.
          </li>
          <li>
            <span>&gt;1.4m:</span> người cao hơn 1.4m
          </li>
          <li>
            <span>&lt;1.4m:</span> người cao dưới 1.4m
          </li>
          <li>
            <span>Trẻ em dưới 1m được miễn phí</span> (nhưng phải đi cùng với
            người lớn).
          </li>
          <li>
            <span>Có vé mời, được giảm 50% vé trọn gói</span> (áp dụng mua từ
            cổng).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TicketOptions;
