import React from "react";
import Slider from "react-slick";
import SlideItem from "../slideItem/SlideItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SliderComponent.module.css";

const slideData = [
  {
    title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
    description:
      "CVVH Đầm Sen chuẩn bị ra mắt chương trình nhạc nước Đầm Sen Water Show với băng chiếu dài biểu diễn hơn 100 mét, kết hợp với ánh sáng.",
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/35aa65ceffb3a0884966a1a9b2cabf3918476770",
    link: "#",
  },
  {
    title: "Sự kiện khác",
    description: "Mô tả sự kiện khác...",
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/35aa65ceffb3a0884966a1a9b2cabf3918476770",
    link: "#",
  },
  // Add more slide items as needed
];

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {slideData.map((slide, index) => (
        <SlideItem
          key={index}
          title={slide.title}
          description={slide.description}
          image={slide.image}
          link={slide.link}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
