import React from "react";
import "./AttractionHighlight.css";
import { ArrowRight } from "../../assets/Icon";
import AttractionDescription from "../attractionDescription/AttractionDescription";

interface AcAttractionHighlightData {
  position: string;
  header: string;
  desc: string;
  image: string;
  alt: string;
}

const AttractionHighlight: React.FC = () => {
  const data: AcAttractionHighlightData[] = [
    {
      position: "left",
      header: "Hơn 30 trò chơi",
      desc: "Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu lượn siêu tốc, vượt thác, Power Surge...); 5 trò chơi tương tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi thiếu nhi; và nhiều trò chơi khác.",
      image: "https://via.placeholder.com/346x517",
      alt: "Công viên Văn hóa Đầm Sen từ trên cao.",
    },
    {
      position: "right",
      header: "Nhiều loại thú quý hiếm",
      desc: "  Đầm Sen còn được biết đến như một vườn thú có thể nuôi sinh sản được các loại động vật quý hiếm (thuộc sách đỏ) như: đười ươi Sumatra (sinh 2 lần); vượn má vàng; chim già đẩy, chim Giang sen… Ngoài ra còn có một Thủy cung với các loài thủy sinh vật biển và cá Amazon phong phú, như cá mập, cá Hải tượng (2 mét)…",
      image: "https://via.placeholder.com/346x517",
      alt: "Vượn đen má vàng tại Công viên Văn hóa Đầm Sen..",
    },
    {
      position: "left",
      header: "Nhà hàng Thủy Tạ Đầm Sen",
      desc: "Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn đường phố trong công viên, đặc biệt là nhà hàng Thủy Tạ, với không gian thưởng thức ẩm thực bên hồ.",
      image: "https://via.placeholder.com/346x517",
      alt: "Công viên Văn hóa Đầm Sen từ trên cao.",
    },
    {
      position: "right",
      header: "Cà phê Vườn Đá",
      desc: "Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài Gòn. Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá khổng lồ, với nhiều hình dáng kỳ dị theo nhãn quan của mỗi người. Buổi sáng thứ bảy và chủ nhật, quán thường đông khách do có nhạc sống, với những ca khúc bất hủ của thập niên 70-80, do các ban nhạc chuyên nghiệp TP.HCM biểu diễn.",
      image: "https://via.placeholder.com/346x517",
      alt: "Vượn đen má vàng tại Công viên Văn hóa Đầm Sen.",
    },
  ];
  return (
    <div className="attraction-container">
      <h1 className="attraction-title">Đầm Sen Thế Giới Tuyệt Vời</h1>
      <div className="attraction-content">
        {data.map((res: AcAttractionHighlightData, index: number) => (
          <AttractionDescription
            key={index}
            position={res.position}
            header={res.header}
            desc={res.desc}
            image={res.image}
            alt={res.alt}
          ></AttractionDescription>
        ))}
      </div>
    </div>
  );
};

export default AttractionHighlight;
