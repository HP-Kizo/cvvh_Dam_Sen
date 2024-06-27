import React from "react";
import styles from "./ServiceItem.module.css";

interface TableData {
  type: string;
  people: string;
  price: string;
}

interface RentalData {
  item: string;
  price: string;
}

interface ServiceItemProps {
  electricCarNotice: string;
  electricCarTable: TableData[];
  rentalNotice: string;
  rentalTable: RentalData[];
  additionalNote: string;
  linkText: string;
  linkUrl: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  electricCarNotice,
  electricCarTable,
  rentalNotice,
  rentalTable,
  additionalNote,
  linkText,
  linkUrl,
}) => {
  return (
    <div className={styles.serviceItem}>
      <h2 className={styles.title}>DỊCH VỤ XE ĐIỆN</h2>
      <p className={styles.notice}>{electricCarNotice}</p>
      <p className={styles.desc}>
        Bên cạnh việc tham quan Đầm Sen bằng “đoàn tàu cổ tích” (bao gồm trong
        <span>vé trọn gói</span> và <span>vé Silver</span> ), du khách có thể
        thưởng ngoạn bằng dịch vụ xe điện riêng của Đầm Sen. Tùy vào loại vé,
        hành trình xe điện sẽ đưa quý khách từ trạm đón (khu{" "}
        <span>trò chơi cảm giác mạnh</span> ở quảng trường Âu Lạc), đi quanh hồ
        Đầm Sen, tham quan vườn chim thú ở khu B, và về vườn Lan rừng để ngắm
        những loại hoa đẹp nhất tại Đầm Sen.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Loại hình</th>
            <th>Số người</th>
            <th>Số tiền</th>
          </tr>
        </thead>
        <tbody>
          {electricCarTable.map((row: TableData, index: number) => (
            <tr key={index}>
              <td>{row.type}</td>
              <td>{row.people}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className={styles.title}>DỊCH VỤ CHO THUÊ</h2>
      <p className={styles.notice}>{rentalNotice}</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Cho thuê</th>
            <th>Giá Xe</th>
          </tr>
        </thead>
        <tbody>
          {rentalTable.map((row: RentalData, index: number) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={styles.note}>
        <h3>GHI CHÚ</h3>
        <p dangerouslySetInnerHTML={{ __html: additionalNote }}></p>
        <a href={linkUrl}>{linkText}</a>
      </p>
    </div>
  );
};

export default ServiceItem;
