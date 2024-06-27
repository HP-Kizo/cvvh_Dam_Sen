import { useState } from "react";
import {
  ArrowNarrowRight,
  CallIcon,
  CategoryIcon,
  ClockIcon,
  Message,
  WhiteClock,
} from "../../assets/Icon";
import {
  BackgroundProps,
  CarouselItem,
  ImageData,
  RecommendedItem,
} from "../../context/interface";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Background from "../../component/background/Background";
import ImageCarousel from "../../component/imageCarousel/ImageCarousel";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";
import Header from "../../component/header/Header";
import styles from "./Plants.module.css";
import { title } from "process";
import PlantList from "../../component/PlantList/PlantList";
import Contact from "../../component/contact/Contact";
interface PlantsProps {}

const Plants: React.FC<PlantsProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: "Địa điểm sống ảo",
      date: "20/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/38494a76a1736f01d20a0d60dbcd07f3016cb11e",
      alt: "Image 1",
      category: "Cảnh đẹp",
    },
    {
      id: 2,
      title: "Quảng trường Âu Lạc",
      date: "20/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d9f8d6f7764b3d7291c586ad0926ea02d67aff72",
      alt: "Image 2",
      category: "Cảnh đẹp",
    },
    {
      id: 3,
      title: "Tàu vượt thác",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/6bad53a3b37e5676f7a93b8c5b14da680c23624f",
      alt: "Image 3",
      category: "Cảnh đẹp",
    },
    {
      id: 4,
      title: "Cầu cửu khúc",
      date: "20/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b1887cf3067089df96e1892185676a50bd92189e",
      alt: "Image 4",
      category: "Cảnh đẹp",
    },
  ];
  interface BG {
    id: number;
    image: string;
    title: string;
    desc: string;
    category: string;
    date: string;
  }
  const data: BG = {
    id: 1,
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/15f348d484d24bf95e0d1af9fbed525565083648",
    title: "Hoa sen",
    desc: "Hoa sen từ lâu đã được biết tới là loài hoa thanh khiết có ý nghĩa truyền thống lâu đời ở phương Đông. Sen mọc và lớn lên giữa bùn lầy nhưng không hề vì bùn mà bị ô nhiễm, vấy bẩn.",
    category: "Thực vật",
    date: "29/06/2020",
  };
  return (
    <div className={styles.plants}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          {/* <Background image={data.image} alt={data.alt}></Background> */}
          <div className={styles.introduce}>
            <Header
              title="Thực vật"
              category="Giáo dục trải nghiệm"
              date="29/06/2020"
            ></Header>
            <div className={styles.header}>
              <div className={styles.image}>
                <img src={data.image} alt={data.title} />
              </div>
              <div className={styles.header_content}>
                <h1>{data.title}</h1>
                <span className={styles.underline}></span>
                <p className={styles.desc}>{data.desc}</p>
                <div className={styles.wrap_category}>
                  <div className={styles.category}>
                    {CategoryIcon}
                    <h3>{data.category}</h3>
                  </div>
                  <div className={styles.date}>
                    {WhiteClock}
                    <p>{data.date}</p>
                  </div>
                </div>
                <button className={styles.detail}>
                  <p>Xem thêm</p> {ArrowNarrowRight}
                </button>
              </div>
            </div>
            <PlantList></PlantList>
            <RecommendedCarousel
              recommendedItems={recommendedItems}
            ></RecommendedCarousel>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Plants;
