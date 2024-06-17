import React from "react";
import styles from "./TicketPricing.module.css";
import { ArrowRight } from "../../assets/Icon";

interface TicketInfo {
  title: string;
  price: string;
  description: string;
  buttonText: string;
}

const ticketData: TicketInfo[] = [
  {
    title: "VÉ KHÁCH LẺ",
    price: "80k - 380k/vé/người",
    description:
      "Là loại vé được bán tại các quầy trong công viên cho từng khách. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách",
    buttonText: "Xem thêm",
  },
  {
    title: "VÉ THỂ DỤC",
    price: "5k/vé/người",
    description:
      "Quý khách có thể vào CVVH Đầm Sen tập thể dục quanh hồ thoáng mát vào mỗi buổi sáng, trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành",
    buttonText: "Xem thêm",
  },
  {
    title: "VÉ DỊCH VỤ",
    price: "120k - 380k/vé/người",
    description:
      "Vé dịch vụ gồm có các dịch vụ như xe điện, gửi đồ, cho thuê xe đẩy, xe nôi, xe lăn.",
    buttonText: "Xem thêm",
  },
  {
    title: "VÉ TẬP THỂ",
    price: "120k - 380k/vé/người",
    description:
      "Nhóm bạn, cơ quan đoàn thể, trường học, công ty du lịch, công nhân, sinh viên có thể áp dụng vé tập thể dài theo quý có quan hệ đến tham quan vui chơi tại CVVH Đầm Sen",
    buttonText: "Xem thêm",
  },
];

const TicketPricing: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GIÁ VÉ</h1>
      <div className={styles.tickets}>
        {ticketData.map((ticket: TicketInfo, index: number) => (
          <div key={index} className={styles.ticket}>
            <div className={styles.ticket__left}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.ticket__right}>
              <h2 className={styles.ticketTitle}>{ticket.title}</h2>
              <p className={styles.price}>{ticket.price}</p>
              <p className={styles.description}>{ticket.description}</p>
              <button className={styles.button}>
                <span>{ticket.buttonText}</span>
                {ArrowRight}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.note}>
        <h2>CHÚ Ý:</h2>
        <ul>
          <li>
            <span>Giờ bán vé:</span> 8 giờ 00 - 17 giờ 30
          </li>
          <li>
            <span>Vé mua từ cổng:</span> Là vé được bán tại 2 cổng chính số 1A
            Lạc Long Quân (hoặc số 3 Hòa Bình), cổng số 2 (nhà hàng Thủy Tạ).
          </li>
          <li>
            <span>Vé mua trong công viên:</span> Là loại vé được bán tại các
            quầy trong công viên. Đây là các loại vé trọn gói đã được trừ vé vào
            cổng của quý khách.
          </li>
          <li>
            <span>Vé vào cổng công viên nước:</span> Là loại vé bán tại cổng
            liên thông giữa công viên khô và công viên nước. Đây là vé dành cho
            các du khách vui chơi phía công viên nước, và muốn sang CVVH Đầm
            Sen.
          </li>
          <li>
            <span>1.4m:</span> người cao trên 1.4m
          </li>
          <li>
            <span>1.4m:</span> người cao dưới 1.4m
          </li>
          <li>
            <span>Trẻ em dưới 1m được miễn phí</span> (phải đi cùng với người
            lớn).
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

export default TicketPricing;
