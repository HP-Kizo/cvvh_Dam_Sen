import styles from "./CentralService.module.css";

interface centralServiceProps {}
interface CentralService {
  image: string;
  header: string;
  desc: string;
}

const centralService: React.FC<centralServiceProps> = () => {
  const data: CentralService[] = [
    {
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/f1fec5b941a206d2c5210434f5ca56fcc5bcd16c",
      header: "Trò chơi",
      desc: "Lịch sử hình thành CVVH gắn liền với sự phát triển hơn 50 trò chơi. Từ thư giãn đến cảm giác mạnh, phân bổ đều khắp khuôn viên Đầm Sen.",
    },
    {
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/6f7b150355160b7a996098e199e8f35895740ef5",
      header: "Sự kiện",
      desc: "Là nơi tổ chức nhiều kỷ lục Việt Nam như kỷ lục bánh tét, bánh chưng, bánh Noel… Các sự kiện văn hóa lớn như lễ hội: bắn pháo hoa, Cosplay, khinh khí cầu, xe cổ…",
    },
    {
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/ffee290fd149f3775254811d98e9d9b5adbc087e",
      header: "Cảnh trí",
      desc: "Với đủ loại cây xanh, từ bon sai kiểng cổ đến nhiều loài kì hoa dị thảo với các khu vườn xanh mát: Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu…",
    },
    {
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/debb341969af208caaf210aa0b1564945388981b",
      header: "Chim thú",
      desc: "Hơn 100 chủng loại, bao gồm động vật nuôi trồng, động vật hoang dã và động vật quý hiếm: đười ươi, voi, trăng, cá sấu, đà điểu, hưu sao, giang sen…",
    },
    {
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/cf08a416dd5329064f36b140a47884d66c8aaf74",
      header: "Ẩm thực",
      desc: "Được biết đến với nhà hàng Thủy Tạ, và cà phê Vườn Đá. Chuyên phục vụ các món ăn Hoa – Việt, với đội ngũ đầu Bếp kinh nghiệm lâu năm trong ngành.",
    },
  ];
  return (
    <div className={styles.centralService}>
      <header className={styles.header}>
        <h1>Những loại hình dịch vụ trọng tâm</h1>
      </header>
      <div className={styles.content}>
        {data.map((res: CentralService, index: number) => (
          <div className={styles.central__item}>
            <img className={styles.image} src={res.image} alt={res.header} />
            <header className={styles.title}>
              <h1>{res.header}</h1>
            </header>
            <div className={styles.underline}></div>
            <p className={styles.desc}>{res.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default centralService;
