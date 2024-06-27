import React from "react";
import EventCard from "../eventCard/EventCard";
import styles from "./EventList.module.css";
import { Event } from "../../context/interface";

const mockEvents: Event[] = [
  {
    title: "Ra mắt về Đầm Sen Special chơi cả 2 công viên",
    date: "06/11/2020",
    description:
      "Với sự xuất hiện của 2 công viên mới cùng các trò chơi hấp dẫn và chương trình ca nhạc đặc sắc...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/404a2f6b0b7f12f86632909e052fc4fcae126e63",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Sắp ra mắt Đầm Sen Lake Show cuối năm 2020",
    date: "05/11/2020",
    description:
      "Đầm Sen lần đầu tiên ra mắt dự án Lake Show với diện mạo nước trình diễn hoành tráng...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b6fdd86247bd3bc4e8b35d6a1260819593333c93",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Lễ hội củn cưng",
    date: "07/12/2018",
    description:
      "Sự kiện nơi mọi người đến cùng cưng dắt tập trung tại khu vực Cổng Vườn Vĩnh Ẩn Đầm Sen...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/7d789dba8157457c1a90f33dd5e38784fcd8f6e5",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: 'Ngày hội ẩm thực chay 2019 Đầm Sen: "Vui Lan hoa bách hợp"',
    date: "10/08/2019",
    description:
      "Một sự kiện không thể bỏ lỡ với các món ăn chay ngon miệng tại khu vực Đầm Sen...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/92f17270a801781fd5c46608095e328f593f87e9",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Cùng báo chí nói không với rác thải môi trường",
    date: "21/06/2019",
    description:
      "Chương trình phối hợp tổ chức báo chí và khu vui chơi Đầm Sen với sự đóng góp và tuyên truyền...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/17ff0f90cf6acd9e3bbdf9698a5cf55ded9b65dc",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Đón năm mới 2020: nhiều sân chơi miễn phí",
    date: "29/07/2020",
    description:
      'Ngoài những chương trình "sáng tạo" tại Đầm Sen, du khách sẽ được tham gia nhiều sân chơi miễn phí...',
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/e1924450a19874045d4495268fba1feee91fec98",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Sắp ra mắt Quảng trường Vua Hùng tại Đầm Sen",
    date: "08/04/2019",
    description:
      "Một sự kiện đặc biệt nơi Đầm Sen sẽ khánh thành quảng trường Vua Hùng vào dịp lễ lớn trong năm...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/94b7ddda63aae6fdaea4640d81aa46703d034678",
    category: "Sự kiện",
    link: "#",
  },
  {
    title: "Hè 2019 và những chương trình đặc biệt cho thiếu nhi",
    date: "30/05/2019",
    description:
      "Một mùa hè đầy sôi động với những chương trình giải trí đặc biệt dành riêng cho thiếu nhi tại Đầm Sen...",
    imageUrl:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d270e3c53f007563adc94509a25c21346addf95b",
    category: "Sự kiện",
    link: "#",
  },
];

const EventList: React.FC = () => {
  return (
    <div className={styles.eventList}>
      {mockEvents.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          date={event.date}
          description={event.description}
          imageUrl={event.imageUrl}
          category={event.category}
          link={event.link}
        />
      ))}
    </div>
  );
};

export default EventList;
