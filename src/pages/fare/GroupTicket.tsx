import { useState } from "react";
import styles from "./GroupTicket.module.css";
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
interface GroupTicketProps {}

const GroupTicket: React.FC<GroupTicketProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/c1b23d7d56901ee9e2b0de6770781e7c7b1e6665",
    alt: "Đầm Sen là nơi vui chơi yêu thích của các bạn nhỏ.",
  };
  return (
    <div className={styles.groupTicket}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header title="Vé tập thể"></Header>
            <div className={styles.main}>
              <p>
                Đối với các đoàn khách: Nhóm bạn, cơ quan đoàn thể, Trường học,
                công ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi
                cho Quý cơ quan khi đến tham quan vui chơi tại CVVH Đầm Sen. Bên
                cạnh đó, Quý cơ quan cũng có thể đặt yêu cầu hướng dẫn, tổ chức
                sự kiện, Team building chúng tôi cũng sẽ đáp ứng đầy đủ.
              </p>
              <p>
                Để biết chi tiết về chính sách giá ưu đãi và thủ tục đến tham
                quan tại CVVH Đầm Sen, Quý khách vui lòng liên hệ với nhân viên
                phụ trách như sau:
              </p>
              <strong>
                1. Công ty Du Lịch giá ưu đãi/ nhóm bạn/ Cơ quan đoàn thể:
              </strong>
              <ul>
                <li>Mrs. Minh: 0902 575 805</li>
                <li>Mr. Đăng Khánh: 0789 848 418</li>
              </ul>
              <strong>
                2. Trường học: <span>Mr. Hiếu: Trường: 0989 967 129</span>
              </strong>
              <strong>3. Công nhân + sự kiện:</strong>
              <ul>
                <li>Mrs. Minh: 0902 575 805</li>
                <li>Mr. Đăng Khánh: 0789 848 418</li>
              </ul>
              <strong>
                4. Hotline:
                <span> (028) 3963 3593 – 0902 575 805 (Mrs. Minh)</span>
              </strong>
            </div>
            <div className={styles.tour}>
              <h2>ĐẶT TOUR – SỰ KIỆN – TIỆC</h2>
              <div>
                <p>Phòng Tiếp nhận Tour Đầm Sen</p>
                <br />
                <ul>
                  <li>
                    <strong>Địa chỉ:</strong> Cổng 1A, số 3, Hòa Bình, Phường 3,
                    Quận 11, TP. HCM
                  </li>
                  <li>
                    <strong>ĐT:</strong> (028) 3963 3593 – (028) 3858 8868
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default GroupTicket;
