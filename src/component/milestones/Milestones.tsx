import React from "react";
import styles from "./Milestones.module.css";

const milestonesData: string[] = [
  "Năm 1977 – 1983: Đầm Sen do Thành Phố quản lý. Sau đó, 8/9/1983 Thành Phố giao cho Quận 11 quản lý (55ha, theo quyết định 325/QĐ-UB).",
  "Quyết định 215/QĐ-UB ngày 25/5/1984 giao Đầm Sen về các đơn vị: Ban xây dựng nhà đất và công trình quận 11, Xí nghiệp quốc doanh nuôi trồng thủy sản và Công ty ăn uống và dịch vụ tổng hợp quận 11. Do khó khăn chung và thiếu vốn đầu tư, Đầm Sen chỉ đáp ứng được nhu cầu khách lẻ là hồ nuôi cá với một số cây rất ít, chưa hình thành là một công viên.",
  "Năm 1985: quận 11 ra quyết định 108/QĐ-UB thành lập giao Đầm Sen cho Công ty Dịch vụ Văn hóa Tổng hợp quận 11 và có đại diện Xí nghiệp nuôi trồng thủy sản để thành lập Ban quản lý Đầm Sen.",
  "Năm 1989: Đồng ý tách quận 11, tách Công ty Dịch Vụ Du lịch Phú Thọ ngay nay được giao quản lý Đầm Sen, xí nghiệp quốc doanh nuôi trồng thủy sản giải thể.",
  "Từ đó Công Viên Văn Hóa ĐẦM SEN, một đơn vị trực thuộc Công ty Du Lịch dịch vụ Phú Thọ Quận 11, từ khi đi vào hoạt động đã mạnh dạn đổi mới, cải thiện tích cực và phát triển mạnh mẽ, trở thành một công viên rộng lớn và hiện đại bậc nhất hiện nay ở TP. HCM, trở thành một công viên văn hóa và du lịch đi đầu và thành công nhất trong cả nước. Từ đầu năm 2003, Công Viên Văn Hóa Đầm Sen chính thức là thành viên của Tổng Công Ty Du Lịch Sài Gòn (Saigontourist). Đó là nhờ sự quan tâm tập trung đầu tư và nỗ lực đồng của ban giám đốc công ty Du lịch Phú Thọ, sự quản lý sáng suốt của BGD và tập thể cán bộ – công nhân viên có tinh thần trách nhiệm cao, đầy đặn kinh nghiệm làm việc.",
];

const Milestones: React.FC = () => {
  return (
    <div className={styles.milestones}>
      <header className={styles.header}>
        <h1>Các Mốc Son Phát Triển</h1>
      </header>
      <ul className={styles.content}>
        {milestonesData.map((milestone: string, index: number) => (
          <li key={index}>{milestone}</li>
        ))}
      </ul>
      <div className={styles.image}>
        <img
          src="https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/fca6ca85b13aa9664b7b6a121455cfc90e72a57e"
          alt="cau-cuu-khuc"
        />
      </div>
    </div>
  );
};

export default Milestones;
