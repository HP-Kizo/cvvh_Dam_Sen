import styles from "./HistoryBegin.module.css";
interface HistoryBeginProps {}

const HistoryBegin: React.FC<HistoryBeginProps> = () => {
  return (
    <div className={styles.historyBegin}>
      <header className={styles.header}>
        <h1>Lịch sử hình thành</h1>
      </header>
      <div className={styles.desc}>
        <p>
          Lịch sử hình thành CVVH Đầm Sen bắt đầu sau ngày đất nước thống nhất.
          Lúc bấy giờ, Đầm Sen còn là một khu ruộng hoang đầm lầy. Nơi đó chỉ
          toàn những đụn rau muống, rau ngổ, cây cỏ rậm rịt. Đồng thời đây cũng
          là nơi chứa các tệ nạn xã hội.
        </p>
        <p>
          Ngày 15/2/1976, Thành ủy – UBND TP.HCM ra lời kêu gọi “Hãy xây dựng
          cho thành phố 3 công viên văn hóa lớn, một tại Bình Tiên, một tại Tân
          Bình và một tại Đầm Sen”. Hàng triệu công nhân lao động đã tham gia.
          Công viên Đầm Sen được khởi công như thế trên diện tích 55ha. Từ một
          đầm lầy hôm nào, đã sớm trở thành một hồ nước sạch, với cảnh quan
          thoáng mát cho người dân thành phố.
        </p>
      </div>
    </div>
  );
};

export default HistoryBegin;
