import styles from "./WaterShow.module.css";
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
  PostContents,
  RecommendedItem,
} from "../../context/interface";
import InfoCard from "../../component/infoCard/InfoCard";
import Contact from "../../component/contact/Contact";
import SliderComponent from "../../component/sliderComponent/SliderComponent";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";
import PostContent from "../../component/postContent/PostContent";
interface WaterShowProps {}

const WaterShow: React.FC<WaterShowProps> = () => {
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
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/fbf3f0d0eabf8421d1ecb1cbef60f3fad01179c5",
    alt: "Sắp ra mắt nhạc nước Đầm Sen Water Show.",
  };
  const postContents: PostContents[] = [
    {
      description:
        "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa, công nghệ Laser dance và màn hình khổng lồ hình rẽ quạt, được tạo bằng nước với chiều ngang 40 mét, và chiều cao 20 mét.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d83d4704421283b973300039c72f68007a8508ea",
          alt: "Ảnh minh họa dự án Đầm Sen Water show",
          caption: "Ảnh minh họa dự án Đầm Sen Water show",
        },
      ],
    },
    {
      description:
        "Sau đại dịch Covid 19, CVVH Đầm Sen đã dần phục hồi trở lại. Đặc biệt là tiếp tục triển khai dự án nhạc nước Đầm Sen Water Show. Đây được xem là công trình nhạc nước hoàn toàn mới tại TP.HCM, được biểu diễn ngay trên mặt hồ của công viên. Điểm đặc biệt của công trình nhạc nước này, là hình ảnh 3D được chiếu trên màn hình rẽ quạt khổng lồ được tạo bằng nước, rộng 40 mét (cao 20 mét). Hệ thống vòi phun nhạc nước hiện đại trên thê giới hiện nay, được lập trình kỹ lưỡng đến từng giây. Hệ thống khói lửa được tạo ra ngay trên mặt hồ. Đồng thời, hệ thống ánh sáng laser hiện đại được nhập từ Châu Âu, và hệ thống âm thanh với cả chục chiếc loa công suất lớn, đặt xung quanh hồ để tạo hiệu ứng cho người xem.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/cf231dded2a2da58bb0e4783cdb8724acfef5687",
          alt: "Vị trí ngồi rộng rãi tại nhà hàng Thủy Ta xem biểu diễn Laser show màn nước 3D trên hồ Đầm Sen 2019",
          caption:
            "Vị trí ngồi rộng rãi tại nhà hàng Thủy Ta xem biểu diễn Laser show màn nước 3D trên hồ Đầm Sen 2019",
        },
      ],
    },
  ];
  return (
    <div className={styles.waterShow}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <div className={styles.introduce}>
            <Background image={data.image} alt={data.alt}></Background>
            <Header
              title="Nhạc nước Đầm Sen Water show"
              category="Sắp diễn ra"
              date="11/02/2020"
            ></Header>
            <div className={styles.posts}>
              {postContents.map((post: PostContents, index: number) => (
                <PostContent key={index} {...post} />
              ))}
              <p className={styles.desc}>
                Trước đây, CVVH Đầm Sen đã từng có công trình nhạc nước, nhưng
                với quy mô nhỏ tại khu vực quảng trường La Mã. Rồi đến tháng tư
                năm 2019, Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist
                – cơ quan chủ quản của Đầm Sen) đã quyết định đầu tư giai đoạn 1
                của dự án nhạc nước trên mặt hồ với công trình màn nước laser
                show. Đến nay, giai đoạn 2 của hệ thống đang dần hoàn thiện
                trong tháng 11. Dự kiến Đầm Sen Water Show sẽ chính thức ra mắt
                vào đầu tháng 12/2020, để kịp phục vụ du khách vào những sự kiện
                cuối năm. Ban lãnh đạo Phuthotourist cũng đang cân nhắc liệu có
                cho phép du khách được thưởng thức nhạc nước bằng thuyền Pedalo
                trên mặt hồ. Nếu được, chắc chắn đây sẽ là điểm thú vị cho du
                khách được trải nghiệm cảm giác ở ngồi trên nước và xem nhạc
                nước như thế nào.
              </p>
            </div>
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

export default WaterShow;
