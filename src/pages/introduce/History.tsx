import { useState } from "react";
import { CallIcon, Message } from "../../assets/Icon";
import styles from "./History.module.css";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Background from "../../component/background/Background";
import { BackgroundProps } from "../../context/interface";
import HistoryBegin from "../../component/historyBegin/HistoryBegin";
import Milestones from "../../component/milestones/Milestones";
interface HistoryProps {}

const History: React.FC<HistoryProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d040138dfda907bfed6d15f8f62a939093529bd2",
    alt: "Đầm Sen là một trong những điểm bắn pháo hoa trong các sự kiện lớn của cả nước.",
  };
  return (
    <div className={styles.history}>
      <div className={styles.contact}>
        <div className={styles.contact__item}>{CallIcon}</div>
        <div className={styles.contact__item}>{Message}</div>
      </div>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <HistoryBegin></HistoryBegin>
          <Milestones></Milestones>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default History;
