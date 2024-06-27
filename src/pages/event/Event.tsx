import styles from "./Event.module.css";
import { useState } from "react";
import {
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
import InfoCard from "../../component/infoCard/InfoCard";
import Contact from "../../component/contact/Contact";
import SliderComponent from "../../component/sliderComponent/SliderComponent";
import EventList from "../../component/eventList/EventList";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";
interface EventProps {}

const Event: React.FC<EventProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: "Roller Coaster",
      date: "10/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/299b93bc5fbf0724b192d28c249f2a78df21de23",
      alt: "Image 1",
      category: "Cảm giác mạnh",
    },
    {
      id: 2,
      title: "Vòng xoay không gian",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/22b9882e740a0c089c7bcee4d321e222019ab5b0",
      alt: "Image 2",
      category: "Cảm giác mạnh",
    },
    {
      id: 3,
      title: "Vòng quay thần tốc",
      date: "12/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/41d93018e47e1e47f4c60c97fa286bb61a069eb1",
      alt: "Image 3",
      category: "Cảm giác mạnh",
    },
    {
      id: 4,
      title: "Cá chép nhào lộn",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/0f63e6e9c748c89742b2e4ca41ce8fef099eb909",
      alt: "Image 4",
      category: "Cảm giác mạnh",
    },
  ];
  return (
    <div className={styles.event}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <div className={styles.introduce}>
            <Header title="Sự kiện"></Header>
            {/* <SliderComponent></SliderComponent> */}
            <EventList />
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

export default Event;
