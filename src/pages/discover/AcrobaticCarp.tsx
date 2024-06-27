import { useState } from "react";
import { CallIcon, CategoryIcon, ClockIcon, Message } from "../../assets/Icon";
import styles from "./AcrobaticCarp.module.css";
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
import Contact from "../../component/contact/Contact";
interface AcrobaticCarpProps {}

const AcrobaticCarp: React.FC<AcrobaticCarpProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/14ec557781cf056192397e2b2b98d983405ab4df",
    alt: "Trò chơi Cá chép nhào lộn tại CVVH Đầm Sen",
  };
  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: "Vòng xoay không gian",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/22b9882e740a0c089c7bcee4d321e222019ab5b0",
      alt: "Image 1",
      category: "Cảm giác mạnh",
    },
    {
      id: 2,
      title: "Lâu đài kinh dị",
      date: "21/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d9f8d6f7764b3d7291c586ad0926ea02d67aff72",
      alt: "Image 2",
      category: "Cảm giác mạnh",
    },
    {
      id: 3,
      title: "Tàu vượt thác",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/ae581aa9c22d27a1228c9a0fc225718a4f09771e",
      alt: "Image 3",
      category: "Cảm giác mạnh",
    },
    {
      id: 4,
      title: "Spinning Coaster",
      date: "20/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/312f4f69d7febbe50cf11b1e6ec03b3f4d2d03eb",
      alt: "Image 4",
      category: "Cảm giác mạnh",
    },
  ];
  const listCarosel: CarouselItem = {
    desc: [
      "Cá chép nhào lộn là trò chơi cảm giác mạnh do Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist) đầu tư tại CVVH Đầm Sen. Đây là trò chơi hình thức con lắc Pendulum. Trò chơi gồm 2 con tàu hình cá chép, đong đưa theo trục đứng. Trò chơi này cũng tương tự như Phượng hoàng bay, nhưng có thể đánh vòng đến 360 độ.",
      "Người chơi ngồi bên trên sẽ được đưa lên cao đến hơn 10m, rồi rơi tự do xuống, lại bật lên nhiều vòng. Đỉnh điểm là khi cặp cá chép nhào lộn ngược trên không, khiến người chơi phải la hét vì phấn khích. Trò chơi nằm ở khu cảm giác mạnh tại cổng số 1 (đường Lạc Long Quân).",
    ],
    slides: [
      {
        id: 1,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/9e9e38c23c04a00b74033ad68d728cdc685f4ac4",
        alt: "Hai con tàu hình cá chép ",
      },
      {
        id: 2,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/a882f9fce19e0ca89ee04dbc472e2be4952bfefa",
        alt: "Image 2",
      },
      {
        id: 3,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/5747540570ae2a9333445d3cb0b0ea1d99511892",
        alt: "Image 3",
      },
      {
        id: 4,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d1ceb5b46b8364ae1b60f6b2da54f83f6b253782",
        alt: "Image 4",
      },
      {
        id: 5,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/14ec557781cf056192397e2b2b98d983405ab4df",
        alt: "Image 5",
      },
      {
        id: 6,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/14ec557781cf056192397e2b2b98d983405ab4df",
        alt: "Image 5",
      },
      {
        id: 7,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/14ec557781cf056192397e2b2b98d983405ab4df",
        alt: "Image 5",
      },
    ],
  };
  return (
    <div className={styles.acrobaticCarp}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header
              title="Cá chép lộn nhào"
              category="Cảm giác mạnh"
              date="11/02/2020"
            ></Header>

            <ImageCarousel
              slides={listCarosel.slides}
              title={listCarosel.title}
              desc={listCarosel.desc}
            ></ImageCarousel>
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

export default AcrobaticCarp;
