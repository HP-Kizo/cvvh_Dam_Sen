import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import styles from "./Fare.module.css";
import TicketOptions from "../../component/ticketOptions/TicketOptions";
import Footer from "../../component/footer/Footer";
import { CallIcon, Message } from "../../assets/Icon";
import { BackgroundProps } from "../../context/interface";
import Background from "../../component/background/Background";
import Contact from "../../component/contact/Contact";

interface FareProps {}

const Fare: React.FC<FareProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/3885f976a8101a482dd7d123c9ab7d228bfcb64c",
    alt: "Đầm Sen là điểm check-in được ưa chuộng của giới trẻ hiện nay.",
  };
  return (
    <div className={styles.fare}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <TicketOptions></TicketOptions>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Fare;
