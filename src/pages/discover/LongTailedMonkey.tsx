// LongTailedMonkey.tsx
import React, { useState } from "react";
import styles from "./LongTailedMonkey.module.css";
import { CallIcon, CategoryIconS, ClockIcon, Message } from "../../assets/Icon";
import Background from "../../component/background/Background";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import {
  RecommendedItem,
  SectionInfo,
  MonkeyData,
} from "../../context/interface";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";
import Header from "../../component/header/Header";
import Contact from "../../component/contact/Contact";

interface LongTailedMonkeyProps {}

const data: MonkeyData = {
  image:
    "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/4634145bbc08b5403105f05602d5f008efd3d22d",
  title: "KHỈ ĐUÔI DÀI",
  category: "Vườn thú",
  date: "04/01/2021",
  description: "Khỉ đuôi dài tại vườn thú Đầm Sen khể",
  sections: [
    {
      title: "Tìm hiểu về khỉ đuôi dài",
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/658dee1cd2416621ca650122ad09aac8896b284a",
      alt: "Loài khỉ đuôi dài",
      descriptions: [
        "Khỉ đuôi dài (Macaca fascicularis) có đuôi dài gần bằng hoặc hơn chiều dài cơ thể (khoảng 50 cm), và là loài có đuôi dài nhất. Lông chúng thường có màu xám đến nâu đỏ. Màu lông phía sau nhạt hơn, và lông trên đầu mọc hướng về sau. Thường có mào. Mặt có màu hồng.",
      ],
    },
    {
      title: "",
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/a9102c9ca15f45f8d6b08f30ff8b864ca20738fa",
      alt: "Khỉ đuôi dài chúa chăm con",
      descriptions: [
        "Con đực lớn thường có hai chỏm lông trắng trên miệng như bộ ria. Con cái có lông quanh mồm thưa hơn. Con non sinh ra có màu đen. Thức ăn chủ yếu là quả, hạt, nõn cây, lá và động vật như côn trùng, ếch, nhái, cua…. Chúng hoạt động vào ban ngày và trên cây. Loài này bơi rất giỏi và thường nhảy xuống nước từ cành cây.",
        "Trong tự nhiên, Khỉ đuôi dài sống thành đàn từ 10-100 con. Trung bình 1 con đực sẽ có 2,5 con cái. Mỗi lần mang thai từ 160 – 170 ngày. Và chỉ sinh 1 con. Điểm đặc biệt khỉ chúa là dáng vẻ oai phong. Đồng thời, khỉ chúa chỉ “cưng nhất” một chú khỉ con nào đó. Và chú khỉ con ấy sẽ được xem là “thái tử” kế vị ngôi sau này.",
      ],
    },
    {
      title: "Cuộc chiến quyền lực",
      image:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/bdc1d5747bea6b1bc75e4f1fc9a7b5678abd674e",
      alt: "",
      descriptions: [
        "Nếu con khỉ đực nào trong bầy có ý định “léng phéng” với các tề thiếp của khỉ chúa, nó sẽ bị đánh đuổi ra khỏi đàn. Còn nếu muốn “đảo chính” thì không hề dễ bởi vóc dáng to lớn của khỉ chúa. Thường thì đám khỉ đực chỉ dám “giành ngôi” khi khỉ chúa già hoặc bệnh tật. Còn không thì chúng phải di tản sang địa bàn khác, hoặc lẩn tránh khi khỉ chúa xuất hiện.",
        "Những con khỉ bị phế truất như vậy sẽ lang thang tìm bầy khác gia nhập. Hoặc tìm những bầy yếu hơn để khiêu chiến. Chúng đánh nhau “một mất một còn”, và nếu nó thắng, bầy đó là của nó. Đó là bản chất của đời sống hoang dã.",
        "Loại khỉ đuôi dài này đang được chăm sóc tại khu vườn thú của Công viên Văn hóa Đầm Sen.",
      ],
    },
  ],
};
const recommendedItems: RecommendedItem[] = [
  {
    id: 1,
    title: "Khỉ đuôi dài",
    date: "04/01/2021",
    imgSrc:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/598857269a2f809891caf73bb7a4316bd1b0d2c3",
    alt: "Image 1",
    category: "Vườn thú",
  },
  {
    id: 2,
    title: "Gấu ngựa",
    date: "02/03/2020",
    imgSrc:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/90474620a051dc1697a33ddf465d7b5f3183c346",
    alt: "Image 2",
    category: "Vườn thú",
  },
  {
    id: 3,
    title: "Đười ươi Sumatra",
    date: "05/03/2020",
    imgSrc:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/7ed6c986b0b70a54b93230f4f3446d1fac4be7fc",
    alt: "Image 3",
    category: "Vườn thú",
  },
  {
    id: 4,
    title: "Hà Mã Châu phi",
    date: "05/03/2020",
    imgSrc:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/00e60884aa54c438d141d55ab5f8c092d2ce68eb",
    alt: "Image 4",
    category: "Vườn thú",
  },
];
const LongTailedMonkey: React.FC<LongTailedMonkeyProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.longTailedMonkey}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.description}></Background>
          <div className={styles.introduce}>
            <Header
              title={data.title}
              category={data.category}
              date={data.date}
            ></Header>
          </div>

          <div className={styles.main}>
            {data.sections.map((section: SectionInfo, index: number) => (
              <div key={index} className={styles.section}>
                <div className={styles.sectionImage}>
                  {section.image && (
                    <img src={section.image} alt={section.title} />
                  )}
                  {section.alt && <p>{section.alt}</p>}
                </div>
                <div className={styles.section__content}>
                  {section.title !== "" && <h2>{section.title}</h2>}

                  <div className={styles.desc}>
                    {section.descriptions.map((desc: string, idx: number) => (
                      <p key={idx}>{desc}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <RecommendedCarousel
            recommendedItems={recommendedItems}
          ></RecommendedCarousel>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LongTailedMonkey;
