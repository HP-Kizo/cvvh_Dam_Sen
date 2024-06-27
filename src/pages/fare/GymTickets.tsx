import { useState } from "react";
import {
  CallIcon,
  FareIcon,
  FareMonthIcon,
  Message,
  OpenWindowIcon,
} from "../../assets/Icon";
import Navbar from "../../component/navbar/Navbar";
import styles from "./GymTickets.module.css";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Background from "../../component/background/Background";
import {
  BackgroundProps,
  CarouselItem,
  ImageData,
  RecommendedItem,
} from "../../context/interface";
import InfoCard from "../../component/infoCard/InfoCard";
import Contact from "../../component/contact/Contact";
interface GymTicketsProps {}

const GymTickets: React.FC<GymTicketsProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/c1b23d7d56901ee9e2b0de6770781e7c7b1e6665",
    alt: "Đầm Sen là nơi tập thể dục yêu thích của hội người cao tuổi",
  };
  return (
    <div className={styles.gymTickets}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header title="Vé tập thể dục"></Header>
            <p className={styles.desc}>
              Quý khách có thể vào CVVH Đầm Sen để tập thể dục quanh hồ thoáng
              mát vào mỗi buổi sáng, trên diện tích 32 hecta với nhiều cây xanh
              và không khí trong lành của một công viên giải trí hàng đầu Việt
              Nam.
            </p>
            <div className={styles.container}>
              <InfoCard
                icon={OpenWindowIcon}
                title="GIỜ MỞ CỬA"
                description="4h00 - 8h00 <br/> (mỗi ngày)"
                color="#259E58"
              />
              <InfoCard
                icon={FareIcon}
                title="GIÁ VÉ"
                description="5.000 đồng/lượt"
                color="#FF41B2"
              />
              <InfoCard
                icon={FareMonthIcon}
                title="VÉ THÁNG"
                description="Chưa áp dụng"
                color="#3781DB"
              />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default GymTickets;
