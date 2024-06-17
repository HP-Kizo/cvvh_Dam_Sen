import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import styles from "./Introduce.module.css";
import AttractionHighlight from "../../component/attractionHighlight/AttractionHighlight";
import OperatingTime from "../../component/operatingTime/OperatingTime";
import TicketPricing from "../../component/ticketPricing/TicketPricing";

interface IntroduceProps {}

const Introduce: React.FC<IntroduceProps> = () => {
  const image = {
    url: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b68e58acf455e3b824b3bf2428e17de38be33daa",
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.introduce}>
        <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
        <div className={styles.wrap_content}>
          <div className={styles.content}>
            <div className={styles.background}>
              <img
                className={styles.image}
                src={image.url}
                alt="Công viên Văn Hóa Đầm Sen với hơn 30 trò chơi, địa điểm check in và nhiều loại thú quý hiếm"
              />
              <p className={styles.desc}>
                Công viên Văn Hóa Đầm Sen với hơn 30 trò chơi, địa điểm check in
                và nhiều loại thú quý hiếm
              </p>
            </div>
            <AttractionHighlight></AttractionHighlight>
            <OperatingTime></OperatingTime>
            <TicketPricing></TicketPricing>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Introduce;
