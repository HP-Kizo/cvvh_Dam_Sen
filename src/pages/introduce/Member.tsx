import styles from "./Member.module.css";
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
import HeaderSection from "../../component/headerSection/HeaderSection";
import ImageCarousel from "../../component/imageCarousel/ImageCarousel";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";
interface MemberProps {}

const Member: React.FC<MemberProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/2293f7e2e6df96895dbbe4c711cf7637ec2b3b08",
    alt: "Thông tin về các đơn vị thành viên của CVVH Đầm Sen",
  };

  const carousel_1: CarouselItem = {
    slides: [
      {
        id: 1,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d3c06f2da370de01b84f79f6c3f3f8751328ac17",
        alt: "Vua đầu bếp “Jan Can Cook” từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen",
      },
      {
        id: 2,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/a96f8134e384b0bf4134be40c7d0bef673f2ba40",
        alt: "Image 2",
      },
      {
        id: 3,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/119515b0b08360c9c833c8e2e37b81e5d5a7370b",
        alt: "Image 3",
      },
      {
        id: 4,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/34f65bc79551e501deee954df78a6e581d8de1d9",
        alt: "Image 4",
      },
      {
        id: 5,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/770d85e9acdc811f0885979afbb66fade8392736",
        alt: "Image 5",
      },
      {
        id: 6,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/4b0ea2ad43f3b10c7b8e190bac475fc3f705b6c1",
        alt: "Image 6",
      },
      {
        id: 7,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
        alt: "Image 7",
      },
    ],
  };
  const carousel_2: CarouselItem = {
    slides: [
      {
        id: 1,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/485430331cef02a79b65557ced7d1499578360c0",
        alt: "Quán cà phê Stone Garden tại CVVH Đầm Sen",
      },
      {
        id: 2,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/0a1419120d96ce8e5d9e97b8a54c2544bdc90e8a",
        alt: "Image 2",
      },
      {
        id: 3,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b43883b00eb0b9e5feea8055e8c540bbef08f0d4",
        alt: "Image 3",
      },
      {
        id: 4,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/11b7b50ea646611ed4636d1f8c850993b5cf259f",
        alt: "Image 4",
      },
      {
        id: 5,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/1fef5141cdfa3e90442a93533188b36e55581c23",
        alt: "Image 5",
      },
      {
        id: 6,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/efebd38aaf54990ef6e3ab5a3f553dcd12a7734f",
        alt: "Image 6",
      },
      {
        id: 7,
        src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
        alt: "Image 7",
      },
    ],
  };

  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: "Hà Mã Châu Phi",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/8feabf67f1d2e78df19ef76c8cd28b127e50bae8",
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
    <div className={styles.member}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header title="Thành viên"></Header>

            <div className={styles.container}>
              <HeaderSection
                title="Nhà hàng thủy tạ"
                description={`Đơn vị thành viên đầu tiên của Đầm Sen là Nhà hàng Thủy tạ nằm ở cổng số 2 của CVVH Đầm Sen. Địa chỉ số 3 Hòa Bình, Quận 11, TP.HCM. Ra đời từ năm 1985, nằm trong lòng CVVH Đầm Sen (thuộc Công ty cổ phần Dịch vụ & Du lịch Phú Thọ quản lý), nhà hàng Thủy Tạ đã định hình thương hiệu và không ngừng phát triển. Hàng năm, đội ngũ nhân viên của nhà hàng đều được đào tạo nâng cao về nghiệp vụ cũng như thái độ phục vụ để đáp ứng mọi yêu cầu của thực khách. Chính vì vậy, suốt nghiều năm qua, nhà hàng Thủy Tạ Đầm Sen vẫn là cái tên được lựa chọn hàng đầu của các cá nhân và cơ quan đơn vị khi đặt tiệc tổ chức sự kiện.`}
                imageUrl="https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/91dd68f3d3c5c466479c9f761802eb11d56fcb10"
                buttonText="Xem thêm"
                icon={ArrowNarrowRight}
              />
              <ImageCarousel slides={carousel_1.slides}></ImageCarousel>
              <HeaderSection
                title="cà phê vườn đá"
                description={`Cà phê Vườn Đá bắt đầu hoạt động vào năm 2009. Đây được xem là cà phê rộng và “thiên nhiên” nhất tại TP.HCM. Khuôn viên quán là một phần diện tích của CVVH Đầm Sen. Kiến trúc nhà sàn bên cạnh những tảng đá thiên nhiên với đa dạng hình thù. Đồng thời có dòng suối chảy róc rách cùng những loài chim thả tự nhiên. Khách đến có thể cảm nhận như một “Đà Lạt thu nhỏ”. Đồng thời, vào mỗi tối và sáng thứ bảy – chủ nhật đều có biểu diễn nhạc sống. </br>
Năm 2018, đơn vị thành viên của Đầm Sen này đã khai trương thêm gian triển lãm tranh đá quý để khách tham quan có điều kiện thưỡng lãm.`}
                imageUrl="https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/91dd68f3d3c5c466479c9f761802eb11d56fcb10"
                buttonText="Xem thêm"
                icon={ArrowNarrowRight}
              />
              <ImageCarousel slides={carousel_2.slides}></ImageCarousel>
              <RecommendedCarousel
                recommendedItems={recommendedItems}
              ></RecommendedCarousel>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Member;
