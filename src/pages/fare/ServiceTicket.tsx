import styles from "./ServiceTicket.module.css";
import { useState } from "react";
import {
  ArrowNarrowRight,
  CallIcon,
  FareIcon,
  FareMonthIcon,
  Message,
  OpenWindowIcon,
} from "../../assets/Icon";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Background from "../../component/background/Background";
import {
  BackgroundProps,
  CarouselItem,
  ImageData,
  RecommendedItem,
} from "../../context/interface";
import Contact from "../../component/contact/Contact";
import ServiceItem from "../../component/serviceItem/ServiceItem";
interface ServiceTicketProps {}

const ServiceTicket: React.FC<ServiceTicketProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/2fb568980bb9320ee4cd640ee635dfe70c8c2b56",
    alt: "Trải nghiệm các dịch vụ tiện ích của Đầm Sen ngay bạn nhé!",
  };

  const electricCarNotice = "Lưu ý: Không áp dụng Vé trọn gói Đầm sen!";
  const electricCarTable = [
    { type: "Happy car", people: "1-5", price: "150.000 đồng/30 phút" },
    { type: "Family car", people: "6-7", price: "200.000 đồng/30 phút" },
    { type: "Friendly car", people: "8-10", price: "250.000 đồng/30 phút" },
    { type: "Family car", people: "11-12", price: "300.000 đồng/30 phút" },
    { type: "Cung đường", people: "1-5", price: "50.000 đồng/chuyến" },
  ];

  const rentalNotice =
    "Lưu ý: Tiền thế chăn từ 300.000 đồng đến 500.000 đồng + CMND";
  const rentalTable = [
    { item: "Xe đẩy", price: "50.000 đồng/lần (Cỡ nhỏ)" },
    { item: "Xe đẩy", price: "80.000 đồng/lần (Cỡ lớn)" },
    { item: "Xe nôi", price: "80.000 đồng/lần (Cỡ nhỏ)" },
    { item: "Xe nôi", price: "120.000 đồng/lần (Cỡ lớn)" },
    { item: "Xe lăn", price: "100.000 đồng/lần" },
    { item: "Tủ giữ đồ", price: "20.000 đồng/lần" },
  ];

  const additionalNote = `Vé dịch vụ này không bao gồm trong các loại vé cổng, hay vé trọn gói, cũng như Silver. Để biết thêm về những loại vé này, <br/> xin vui lòng xem`;
  const linkText = " tại đây";
  const linkUrl = "#";
  return (
    <div className={styles.serviceTicket}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header title="Vé dịch vụ"></Header>
            <div className={styles.main}>
              <p className={styles.desc}>
                Bên cạnh các vé tham quan và chơi trò chơi tại Đầm Sen, chúng
                tôi còn có các vé dịch vụ cộng thêm dành cho du khách. Trong đó
                có các dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe
                lăn.
              </p>
              <ServiceItem
                electricCarNotice={electricCarNotice}
                electricCarTable={electricCarTable}
                rentalNotice={rentalNotice}
                rentalTable={rentalTable}
                additionalNote={additionalNote}
                linkText={linkText}
                linkUrl={linkUrl}
              />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ServiceTicket;
