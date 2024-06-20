import React, { useState } from "react";
import styles from "./HungKingSquare.module.css";
import { CallIcon, Message } from "../../assets/Icon";
import Background from "../../component/background/Background";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import ImageWithCaption from "../../component/imageWithCaption/ImageWithCaption";
import PostContent from "../../component/postContent/PostContent";
import {
  ImageData,
  DataBG,
  PostContents,
  CarouselItem,
  RecommendedItem,
} from "../../context/interface";
import { title } from "process";
import ImageCarousel from "../../component/imageCarousel/ImageCarousel";
import RecommendedCarousel from "../../component/recommendedItems/RecommendedCarousel";

const HungKingSquare: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };

  const data: DataBG = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/7e43523773309c0e5aacb41acc8f3d840eff55b7",
    alt: "Quảng trường Vua Hùng trong ngày giỗ quốc tổ",
  };

  const postContents: PostContents[] = [
    {
      description:
        "Quảng trường này có tổng diện tích gần 1000m2. Bao gồm sân hành lễ được lát đá Granite với hoa văn mặt trời đặt ở chính giữa. Kế đến là thang rồng, tiết diện bề ngang 4,5 mét, đáp ứng đoàn khách 5 hàng. Trên cùng là khu vực dâng hương, được thiết kế 3 đền thờ. Chính giữa là chánh điện với tượng vua Hùng cao 1,7 mét, được làm bằng chất liệu composite phủ đồng, đặt trên bệ đá cao 0,8m.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/7e43523773309c0e5aacb41acc8f3d840eff55b7",
          alt: "Quảng trường vua Hùng",
          caption: "Quảng trường vua Hùng trong ngày giỗ quốc tổ",
        },
      ],
    },
    {
      description:
        "Bức tượng vua Hùng tại Đầm Sen đã được Thạc sĩ – Điêu khắc gia Phạm Văn Út thực hiện. Tác giả đã xây dựng bố cục vua Hùng ngồi trên ngai, cách điệu từ hoa văn trống đồng. Mặt tượng nhìn thẳng thể hiện sự tôn nghiêm. Tay phải nắm chùm bông lúa, ý muốn đề cao một nền văn hóa lúa nước của dân tộc Việt, cho con cháu đời sau phải gìn giữ và tôn vinh. Tay trái để tự nhiên trong tư thế ngồi trao đổi với các Lạc tướng, Lạc hầu. Các hoa văn trang trí trên bộ trang phục, được lấy cảm hứng từ đường nét của nền văn hóa Đông Sơn. Đặc biệt là hoa văn trên trống đồng Ngọc Lũ.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/1d274ca3c8eea6a1924a777684dbcc97323aeffe",
          alt: "Bức tượng vua Hùng mới được đặt tại Đầm Sen",
          caption: "Bức tượng vua Hùng mới được đặt tại Đầm Sen",
        },
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/38f55806fd05093d667d201ecb5cba81a4b3ff5e",
          alt: "Điêu khắc gia Phạm Văn Út",
          caption: "Điêu khắc gia Phạm Văn Út",
        },
      ],
    },
    {
      description:
        "Bên cạnh đó, chủ tịch Hồ Chí Minh từng nói: “Các vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước” (xem lịch sử câu nói tại đây). Thấu hiểu điều đó, Phuthotourist không chỉ hướng ý thức của du khách đến viếng người có công dựng nước, mà còn muốn nhắc đến công giữ nước của những danh tướng đã làm nên lịch sử. Đó là đền thờ Hưng Đạo Vương, vị vua từng đánh tan hai cuộc xâm lược của quân Nguyên – Mông (năm 1285 và năm 1288). Hưng Đạo Vương còn lưu truyền thế hệ sau bằng bài thơ “Hịch tướng sĩ”.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d971cfc375f5afccf5825f7113129058bccbda2e",
          alt: "Tượng Hai Bà Trưng trên mình voi",
          caption:
            "Gian thờ Hưng Đạo Vương đặt bên phải, với bào thơ Hịch Tướng Sĩ",
        },
      ],
    },
    {
      description:
        "Danh tướng thứ hai là Hai Bà Trưng (xem thông tin lịch sử tại đây). Hai nữ anh hùng dân tộc đầu tiên của đất Việt, phất cờ khởi nghĩa. Và lập quốc gia với kinh đô tại Mê Linh. Bà Trưng Trắc lên ngôi Nữ vương, trở thành vị vua nữ đầu tiên trong trong lịch sử Việt Nam. Với danh hiệu Trưng Nữ Vương. Cả hai biểu tượng danh tướng đều được đặt hai bên chánh điện, trong khuôn viên của quảng trường vua Hùng. (xem thêm về lễ khánh thành tượng Hai Bà Trưng tại đây)",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/99a4e9004be8f54a303469df19d5ef0096f2ca05",
          alt: "Tượng Hai Bà Trưng trên mình voi",
          caption: "Tượng Hai Bà Trưng trên mình voi",
        },
      ],
    },
  ];
  const postContents_2: PostContents[] = [
    {
      title: "Đến nhu cầu cần một đền thờ vua Hùng",
      description:
        "Từ những thành công đó, Phuthotourist lại tiếp tục suy nghĩ: Nếu như nhà thờ không thể thiếu tượng chúa, Đình chùa không thể vắng tượng phật. Thì một nơi mà hàng ngàn người dân cùng hướng về tổ tiên lại càng không thể thiếu một linh tượng.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/84445f09cc05ccce6ad24653640aeca0bd6f7e85",
          alt: "Các vị lãnh đạo và đại biểu lên dâng hương trước linh tượng vua Hùng tại Đầm Sen",
          caption:
            "Các vị lãnh đạo và đại biểu lên dâng hương trước linh tượng vua Hùng tại Đầm Sen",
        },
      ],
      content: [
        "Qua một khảo sát, cho thấy các địa điểm thờ phụng vua Hùng chỉ tập trung khách viếng vào ngày 10/3 âm lịch. Còn những ngày thường thì do mưu sinh cuộc sống, nên ít người lui tới. Thời gian rảnh rỗi chủ yếu vui chơi để phục hồi sức khỏe làm việc. Vì vậy, việc xây dựng một đền thờ vua Hùng vào khu vui chơi giải trí là việc nên làm. Khi du khách dạo chơi qua đây, sẽ dành vài phút tưởng nhớ đến các bậc anh linh đất Việt. Và truyền dạy cho con trẻ về chân dung của những vị vua nhân ái của đất nước.",
      ],
    },
    {
      title: "Những khó khăn khi thực hiện",
      description:
        "Mặc dù đã lên phương án xây dựng một Quảng trường vua Hùng từ nhiều năm. Nhưng khó khăn nhất là vấn đề chân dung của vua Hùng. Trong nhận thức của người Việt, một vị vua cha phải mang những nét anh minh và đức độ; nghiêm khắc nhưng bao dung; hiền hậu nhưng quyết đoán. Để lột tả được những nét đặc trưng đó, quả là điều không dễ. Điều này đã được bàn đi bàn lại, từ đường nét gương mặt; trang phục; vóc dáng; tư thế; cho đến cả chất liệu sao cho dễ di chuyển.",
      images: [
        {
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/400ce4bca0201b81d0ff75f8184ab27e33b55d4a",
          alt: "Sân hành lễ với sức chứa hàng ngàn người trong ngày đầu tiên ra mắt quảng trường vua Hùng tại Đầm Sen",
          caption:
            "Sân hành lễ với sức chứa hàng ngàn người trong ngày đầu tiên ra mắt quảng trường vua Hùng tại Đầm Sen",
        },
      ],
      content: [
        "Khó khăn kế tiếp là mặt bằng để xây dựng đền thờ. Với một nơi quy tụ mọi tầng lớp nhân dân đến vui chơi như Đầm Sen, thì việc tìm vị trí xây dựng khu linh thiêng, trang trọng không phải dễ. Đặc biệt là khi ý thức người dân về bảo vệ môi trường cảnh quan chưa cao. Việc xả rác bừa bãi, ăn nằm vạ vật nơi linh thiêng, chưa kể việc khắc tên vẽ bậy vẫn thường diễn ra ở nhiều nơi tôn nghiêm khiến ban lãnh đạo công ty phải suy nghĩ.",
        "Phuthotourist đã phối hợp với Viện nghiên cứu lịch sử, viện lịch sử dòng họ… để tìm giải pháp. Đồng thời tìm kiếm những nhà điêu khắc có kinh nghiệm để cùng bàn bạc ý tưởng; phác họa nên một chân dung vị vua Hùng dân tộc. Và cuối cùng, ngày 14/4/2019, Quảng trường vua Hùng chính thức ra mắt tại Đầm Sen. Mở thêm một địa điểm mới để người dân đến đây dâng hương trong những ngày giỗ quốc tổ.",
      ],
    },
  ];
  const listCarosel: CarouselItem[] = [
    {
      title: "Ngày giỗ tổ đầu tiên trước linh tượng",
      desc: [
        "8 giờ sáng ngày 14/4/2019, Phuthotourist cùng UBND Quận 11, Mặt trận tổ quốc VN Quận 11, Viện Lịch sử các dòng họ, đã tổ chức lễ dâng hương đầu tiên trước linh tượng vua Hùng. Và đây cũng là sự kiện ra mắt quảng trường Hùng Vương tại Đầm Sen. Hàng ngàn người dân và du khách đã đem lễ vật đến đây để dâng lên quốc tổ, cùng ôn lại lịch sử dân tộc ngàn năm.",
      ],
      slides: [
        {
          id: 1,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/82ccc34607aaad7868ea53bdc2f7dc54a087cc98",
          alt: "Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019",
        },
        {
          id: 2,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/82ccc34607aaad7868ea53bdc2f7dc54a087cc98",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b7cffa9b04c32d330ce18b94eb27ee4cace3a732",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 4",
        },
        {
          id: 5,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b7cffa9b04c32d330ce18b94eb27ee4cace3a732",
          alt: "Image 6",
        },
        {
          id: 7,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 7",
        },
      ],
    },
    {
      desc: [
        "Bên cạnh đó, Đầm Sen cũng tổ chức thi nấu bánh chưng với sự tham gia của các đơn vị trong quận 11. Tổng số bánh chưng 3000 chiếc đã được phát lộc cho du khách đến dâng hương tại quảng trường ngay trong buổi sáng giỗ tổ.",
      ],
      slides: [
        {
          id: 1,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/a39612b9f89dfcbcc5218f12e3b5468733049c18",
          alt: "Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019",
        },
        {
          id: 2,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/72c0ab21447ae2fa009057c895f205d523f15232",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/014d68fcdbea58a6421f0a1d139bc00b07c24b2e",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/a39612b9f89dfcbcc5218f12e3b5468733049c18",
          alt: "Image 4",
        },
        {
          id: 5,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/014d68fcdbea58a6421f0a1d139bc00b07c24b2e",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 6",
        },
        {
          id: 7,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 7",
        },
      ],
    },
    {
      desc: [
        "Trước đó, Đầm Sen cũng tổ chức lễ diễu hành đặc biệt vào chiều ngày 13/4/2019. Buổi diễn hành này nhằm giới thiệu quảng trường vua Hùng với nhân dân trên địa bàn quận 11.",
      ],
      slides: [
        {
          id: 1,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/684a00d14c20a81e9210e48c655dee35713039be",
          alt: "Quãng trường Vua Hùng",
        },
        {
          id: 2,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/5ef7afeeb05dd99f840b5d9192bb4524d4ed8dca",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/2af71cf8f2455424033058a14faf17b697631ac5",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/52bd135a44fd1e8c5809a74e36219699d6dd73bd",
          alt: "Image 4",
        },
        {
          id: 5,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/22ca37dc3788cd2c92a9dd1c8f4ce6d2e9481980",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/684a00d14c20a81e9210e48c655dee35713039be",
          alt: "Image 6",
        },
        {
          id: 7,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 7",
        },
      ],
    },
    {
      title: "Từ chiếc bánh chưng khổng lồ",
      desc: [
        "Trước 2007, Phuthotourist từng tự tổ chức ngày giổ tổ Hùng Vương tại Đầm Sen vào ngày 10/3 âm lịch. Với mục đích ban đầu là tạo địa điểm để nhân viên Phuthotourist và những du khách tưởng nhớ tổ tiên dân tộc. Số lượng khách tham dự lúc bấy giờ lên đến cả chục ngàn người, vượt xa dự tính ban đầu.",
      ],
      slides: [
        {
          id: 1,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/597d7714a4f095c17bb435d91ec10043a14bdad6",
          alt: "Quãng trường Vua Hùng",
        },
        {
          id: 2,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d3afdc57e97e3cc1914a649688abe1cf9fd97e27",
          alt: "Image 2",
        },
        {
          id: 3,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/fbe6ef5922855224637cf62c207f20d5ab6ddeab",
          alt: "Image 3",
        },
        {
          id: 4,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/597d7714a4f095c17bb435d91ec10043a14bdad6  ",
          alt: "Image 4",
        },
        {
          id: 5,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d3afdc57e97e3cc1914a649688abe1cf9fd97e27",
          alt: "Image 5",
        },
        {
          id: 6,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/fbe6ef5922855224637cf62c207f20d5ab6ddeab",
          alt: "Image 6",
        },
        {
          id: 7,
          src: "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/624b20efbfce3929f46aa5b8a7c078c36a6fab03",
          alt: "Image 7",
        },
      ],
    },
  ];
  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: "Địa điểm sống ảo",
      date: "11/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/38494a76a1736f01d20a0d60dbcd07f3016cb11e",
      alt: "Image 1",
      category: "Cảnh đẹp",
    },
    {
      id: 2,
      title: "Quảng trường Âu Lạc",
      date: "21/02/2020",
      imgSrc:
        "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d9f8d6f7764b3d7291c586ad0926ea02d67aff72",
      alt: "Image 2",
      category: "Cảnh đẹp",
    },
    {
      id: 3,
      title: "Quảng trường La Mã",
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
  return (
    <div className={styles.HungKingSquare}>
      <div className={styles.contact}>
        <div className={styles.contact__item}>{CallIcon}</div>
        <div className={styles.contact__item}>{Message}</div>
      </div>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt} />
          <div className={styles.introduce}>
            <Header
              title="Quảng trường vua Hùng"
              category="Cảnh đẹp"
              date="11/02/2020"
            />
          </div>
          <p className={styles.desc}>
            Hàng ngàn du khách đã đến dâng hương trước tượng Hùng Vương tại
            Quảng trường vua Hùng trong ngày 14/4/2019. Đây là quảng trường thứ
            3 của CVVH Đầm Sen đưa vào hoạt động. (Trước đó, Đầm Sen đã có quảng
            trường Âu Lạc và quảng trường La Mã chuyên phục vụ sự kiện). Đền thờ
            này được xem như một cúng phẩm dâng lên trong ngày giổ Quốc tổ.
          </p>
          <div className={styles.posts}>
            <h1 className={styles.title}>Ra mắt Quảng trường vua Hùng</h1>
            {postContents.map((post: PostContents, index: number) => (
              <PostContent key={index} {...post} />
            ))}
          </div>
          <div className={styles.underline}></div>
          <div className={styles.posts}>
            {listCarosel.map((carouselItem: CarouselItem, index: number) => (
              <ImageCarousel
                title={carouselItem.title}
                desc={carouselItem.desc}
                slides={carouselItem.slides}
              ></ImageCarousel>
            ))}
          </div>
          <p className={styles.description}>
            Sau khi Quốc Hội quyết định công nhận ngày quốc tổ vào tháng 4/2007,
            Phuthotourist đã phối hợp với UBMT Tổ Quốc Quận 11, tổ chức nhiều
            hoạt động lớn hơn. Tuy nhiên, Đầm Sen vẫn mong muốn làm được cống
            vật gì xứng đáng. Và phải mang ý nghĩa góp công sức của tập thể. Vậy
            là ý tưởng về chiếc bánh chưng khổng lồ ra đời từ những năm đầu
            2010. Và đến năm 2016, Đầm Sen đã xác lập kỷ lục Guinness Thế giới
            với chiếc bánh chưng khổng lồ nặng nhất: 2,5 Tấn. Để làm chiếc bánh
            chưng này, đã có hơn 50 người với nhiều công đoạn gói, nấu bánh khác
            thường. Sau đó luộc suốt 3 ngày liên tục để dâng cúng Quốc tổ.
          </p>
          <div className={styles.posts}>
            {postContents_2.map((post: PostContents, index: number) => (
              <PostContent key={index} {...post} />
            ))}
          </div>
          <div className={styles.related}>
            <RecommendedCarousel
              recommendedItems={recommendedItems}
            ></RecommendedCarousel>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HungKingSquare;
