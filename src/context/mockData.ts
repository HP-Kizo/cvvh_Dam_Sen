interface Item {
  id: number;
  name: string;
}

interface Category {
  title: string;
  items: Item[];
}

interface Categories {
  [key: string]: Category[];
}

export const categories: Categories = {
  games: [
    {
      title: "Cảm Giác Mạnh",
      items: [
        { id: 1, name: "Cá Chép Nhào Lộn" },
        { id: 2, name: "Lâu Đài Kinh Dị" },
        { id: 3, name: "Phượng Hoàng Bay" },
        { id: 4, name: "Spinning Coaster" },
        { id: 5, name: "Xe Bay Ảo Tưởng" },
        { id: 6, name: "Thảm Bay" },
        { id: 7, name: "Vòng Quay Thần Tốc" },
        { id: 8, name: "Power Surge" },
        { id: 9, name: "Tàu Vượt Thác" },
        { id: 10, name: "Roller Coaster" },
        { id: 11, name: "Vòng Xoay Không Gian" },
        { id: 12, name: "Đấu Trường Bò Tót" },
        { id: 13, name: "Xe Điện Dụng" },
      ],
    },
    {
      title: "Tương Tác Ảo",
      items: [
        { id: 14, name: "Xem Phim Cinemax 8D" },
        { id: 15, name: "Đua Xe Turbo Racing" },
        { id: 16, name: "9D Virtual Reality" },
        { id: 17, name: "Bắn Súng Run Raider" },
        { id: 18, name: "Lâu Đài Kỳ Thú" },
      ],
    },
    {
      title: "Giải Trí",
      items: [
        { id: 19, name: "Băng Đăng" },
        { id: 20, name: "Du Quay Dừng Ferris Wheel" },
        { id: 21, name: "Monorail" },
        { id: 22, name: "Đạp Vịt Pedalo" },
        { id: 62, name: "Massage Cá" },
      ],
    },
    {
      title: "Thiếu Nhi",
      items: [
        { id: 23, name: "Ếch Nhảy" },
        { id: 24, name: "Điệu Nhảy Thiên Thần" },
        { id: 25, name: "Kinh Khí Cầu Bay" },
        { id: 26, name: "Hải Cẩu Vượt Thác" },
        { id: 27, name: "Ngựa Bay" },
        { id: 28, name: "Kids Playground" },
        { id: 29, name: "Khủng Long Bay" },
        { id: 30, name: "Siêu Nhân Robot" },
        { id: 31, name: "Rồng Lượn" },
        { id: 32, name: "Vòng Lượn Tuổi Thơ" },
        { id: 33, name: "Pháo Đài Bay" },
        { id: 34, name: "Nhà Hơi Liên Hoàn" },
      ],
    },
  ],
  zoo: [
    {
      title: "Động Vật Hoang Dã",
      items: [
        { id: 1, name: "Sư Tử" },
        { id: 2, name: "Hổ" },
        { id: 3, name: "Gấu" },
        { id: 4, name: "Hươu Cao Cổ" },
        { id: 5, name: "Voi" },
      ],
    },
    {
      title: "Chim Chóc",
      items: [
        { id: 6, name: "Chim Đại Bàng" },
        { id: 7, name: "Chim Công" },
        { id: 8, name: "Chim Hồng Hạc" },
      ],
    },
  ],
  scenery: [
    {
      title: "Cảnh Đẹp",
      items: [
        { id: 1, name: "Thác Nước" },
        { id: 2, name: "Rừng Rậm" },
        { id: 3, name: "Đồi Hoa" },
      ],
    },
  ],
  stage: [
    {
      title: "Sân Khấu",
      items: [
        { id: 1, name: "Nhạc Kịch" },
        { id: 2, name: "Xiếc" },
        { id: 3, name: "Kịch Nói" },
      ],
    },
  ],
  education: [
    {
      title: "Giáo Dục Trải Nghiệm",
      items: [
        { id: 1, name: "Thí Nghiệm Khoa Học" },
        { id: 2, name: "Học Làm Bánh" },
        { id: 3, name: "Trồng Cây" },
      ],
    },
  ],
  food: [
    {
      title: "Ẩm Thực",
      items: [
        { id: 1, name: "Nhà Hàng 1" },
        { id: 2, name: "Nhà Hàng 2" },
        { id: 3, name: "Nhà Hàng 3" },
      ],
    },
  ],
};
