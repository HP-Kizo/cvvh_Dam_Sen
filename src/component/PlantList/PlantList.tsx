import React, { useEffect, useState } from "react";
import PlantCard from "../plantCard/PlantCard";
import styles from "./PlantList.module.css";

interface Plant {
  name: string;
  description: string;
  date: string;
  type: string;
  imageUrl: string;
}

const PlantList: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    // Replace with your data fetching logic
    const fetchData = async () => {
      const data: Plant[] = [
        {
          name: "Cây Dương Xỉ",
          description:
            "Là một trong những loài thực vật thuộc nhóm thực vật không có hoa và không có hạt. Nó sinh sản thông qua bào tử và thường mọc ở những nơi ẩm ướt.",
          date: "06/11/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/e7d46b52bb337076de6e22ad2b1d2ad1fd02667b",
        },
        {
          name: "Cây Hoa Giấy",
          description:
            "Là một chi trong thực vật có hoa bản địa khu vực Nam Mỹ, từ Brasil về phía tây tới Peru và về phía nam tới miền nam Argentina.",
          date: "05/11/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/6590516bbd00c3f20c86f8e602103e34bdd27ded",
        },
        {
          name: "Cây Lim Sét",
          description:
            "Cây Lim sét có hoa màu vàng rực rỡ trông rất đẹp mắt, mang đến cho mọi người không gian sống vô cùng sống động.",
          date: "06/11/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/10f748bef448c491645e7668401ee80874842561",
        },
        {
          name: "Cây Lan Ý",
          description:
            "Là một chi trong thực vật có hoa bản địa khu vực Nam Mỹ, từ Brasil về phía tây tới Peru và về phía nam tới miền nam Argentina.",
          date: "05/11/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/6778caf39415d0b36703e87e8d1f71f5f5ec62ff",
        },
        {
          name: "Rau Má Thái",
          description:
            "Rau má có tên gọi khác là tích tuyết thảo hay liên tiền thảo thường mọc ở những nơi ẩm ướt, râm mát, thường lùng, bờ mương, đường đi.",
          date: "29/07/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/13ea403fa17979c8f73e7db9ad21580f83fc5fec",
        },
        {
          name: "Cây Rẻ Quạt",
          description:
            "Cây rẻ quạt là một dược liệu Đông y quý, có vị đắng, tính hàn vào Kinh Can và Phế giúp thanh hoa, giải độc, hành huyết, tiêu đàm.",
          date: "29/07/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/e91f59d718dc2ea61be963b7e69c7f808acffc44",
        },
        {
          name: "Cây Cọ Dầu",
          description:
            "Là loại cây mang lại giá trị kinh tế cao do năng suất dầu cao hơn những loại cây có dầu khác.",
          date: "02/11/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/76e0f1225934709c53303b5e722237c73be6f055",
        },
        {
          name: "Bèo Tây",
          description:
            "Là một loại thực vật thủy sinh, thả trôi, sống nổi theo dòng nước, thuộc về chi Pontederia của Họ Bèo tây.",
          date: "14/09/2020",
          type: "Thực vật",
          imageUrl:
            "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/d270e3c53f007563adc94509a25c21346addf95b",
        },
      ];

      const sortedData = data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setPlants(sortedData.slice(0, 8));
    };

    fetchData();
  }, []);

  return (
    <div className={styles.grid}>
      {plants.map((plant: Plant, index: number) => (
        <PlantCard
          key={index}
          name={plant.name}
          description={plant.description}
          date={plant.date}
          type={plant.type}
          imageUrl={plant.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlantList;
