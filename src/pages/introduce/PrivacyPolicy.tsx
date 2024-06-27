import styles from "./PrivacyPolicy.module.css";
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
interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  const data: BackgroundProps = {
    image:
      "https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/35aa65ceffb3a0884966a1a9b2cabf3918476770",
    alt: "Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông tin chúng tôi thu thập, lý do chúng tôi thu thập và cách bạn có thể cập nhật, quản lý, xuất và xóa thông tin của mình.",
  };
  return (
    <div className={styles.privacyPolicy}>
      <Contact></Contact>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      <div className={styles.wrap_content}>
        <div className={styles.content}>
          <Background image={data.image} alt={data.alt}></Background>
          <div className={styles.introduce}>
            <Header title="Chính sách bảo mật"></Header>

            <div className={styles.container}>
              <div className={styles.section}>
                <h1 className={styles.title}>Chúng tôi là ai?</h1>
                <p className={styles.desc}>
                  Đầm Sen là một trong những khu du lịch lớn đặc sắc nhất nước
                  Việt Nam. Kiến trúc được kết hợp một cách hoàn mĩ nền văn hóa
                  Đông - Tây và một chút vẻ đẹp thời La Mã. Ngoài những khu vui
                  chơi, Đầm Sen còn có những nhà hàng, khách sạn và hàng chục
                  các loại hình khác để phục vụ khách du lịch. Đầm Sen là nơi
                  vui chơi giải trí rất hấp dẫn cho người trong và ngoài nước.
                </p>
              </div>
              <div className={styles.section}>
                <img
                  src="https://www.figma.com/file/LzF2IIrcDoA7ppxBK5ldpT/image/b68e58acf455e3b824b3bf2428e17de38be33daa"
                  alt=""
                  className={styles.image}
                />
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>
                  Thông tin cá nhân nào bị thu thập và tại sao thu thập?
                </h1>
                <div className={styles.section__content}>
                  <h2 className={styles.header}>1. Bình luận</h2>
                  <p className={styles.desc}>
                    Khi khách truy cập để lại bình luận trên trang web, chúng
                    tôi thu thập dữ liệu được hiển thị trong mẫu bình luận và
                    cũng là địa chỉ IP của người truy cập và chuỗi user agent
                    của người dùng trình duyệt để giúp phát hiện spam. <br />
                    Một chuỗi ẩn danh được tạo từ địa chỉ email của bạn (còn
                    được gọi là hash) có thể được cung cấp cho dịch vụ Gravatar
                    để xem bạn có đang sử dụng nó hay không. Chính sách bảo mật
                    của dịch vụ Gravatar có tại đây:
                    <span className={styles.url}>
                      https://automattic.com/privacy/
                    </span>
                    . Sau khi chấp nhận bình luận của bạn, ảnh tiểu sử của bạn
                    được hiển thị công khai trong ngữ cảnh bình luận của bạn.
                  </p>
                </div>
                <div className={styles.section__content}>
                  <h2 className={styles.header}>2. Thư viện</h2>
                  <p className={styles.desc}>
                    Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên
                    hình ảnh có dữ liệu vị trí được nhúng (EXIF GPS) đi kèm.
                    Khách truy cập vào trang web có thể tải xuống và giải nén
                    bất kỳ dữ liệu vị trí nào từ hình ảnh trên trang website
                  </p>
                </div>
                <div className={styles.section__content}>
                  <h2 className={styles.header}>3. Cookies</h2>
                  <p className={styles.desc}>
                    Nếu bạn viết bình luận trong website, bạn có thể cung cấp
                    cần nhập tên, email địa chỉ website trong cookie. Các thông
                    tin này nhằm giúp bạn không cần nhập thông tin nhiều lần khi
                    viết bình luận khác. Cookie này sẽ được lưu giữ trong một
                    năm. <br /> Nếu bạn có tài khoản và đăng nhập và website,
                    chúng tôi sẽ thiết lập một cookie tạm thời để xác định nếu
                    trình duyệt cho phép sử dụng cookie. Cookie này không bao
                    gồm thông tin cá nhân và sẽ được gỡ bỏ khi bạn đóng trình
                    duyệt. <br /> Khi bạn đăng nhập, chúng tôi sẽ thiết lập một
                    vài cookie để lưu thông tin đăng nhập và lựa chọn hiển thị.
                    Thông tin đăng nhập gần nhất lưu trong hai ngày và lựa chọn
                    hiển thị gần nhất lưu trong một năm. Nếu bạn chọn “Nhớ tôi”,
                    thông tin đăng nhập sẽ được lưu trong hai tuần. Nếu bạn
                    thoát tài khoản, thông tin cookie đăng nhập sẽ bị xoá. Nếu
                    bạn sửa hoặc công bố bài viết, một bản cookie bổ sung sẽ
                    được lưu trong trình duyệt. Cookie này không chứa thông tin
                    cá nhân và chỉ đơn giản bao gồm ID của bài viết bạn đã sửa.
                    Nó tự động hết hạn sau 1 ngày.
                  </p>
                </div>
                <div className={styles.section__content}>
                  <h2 className={styles.header}>
                    4. Nội dung nhúng từ website khác
                  </h2>
                  <p className={styles.desc}>
                    Các bài viết trên trang web này có thể bao gồm nội dung được
                    nhúng (ví dụ: video, hình ảnh, bài viết, v.v.). Nội dung
                    được nhúng từ các trang web khác hoạt động theo cùng một
                    cách chính xác như khi khách truy cập đã truy cập trang web
                    khác. <br />
                    Những website này có thể thu thập dữ liệu về bạn, sử dụng
                    cookie, nhúng các trình theo dõi của bên thứ ba và giám sát
                    tương tác của bạn với nội dung được nhúng đó, bao gồm theo
                    dõi tương tác của bạn với nội dung được nhúng nếu bạn có tài
                    khoản và đã đăng nhập vào trang web đó.
                  </p>
                </div>
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>
                  Dữ liệu của bạn tồn tại bao lâu?
                </h1>
                <p className={styles.desc}>
                  Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ
                  được giữ lại vô thời hạn. Điều này là để chúng tôi có thể tự
                  động nhận ra và chấp nhận bất kỳ bình luận nào thay vì giữ
                  chúng trong khu vực đợi kiểm duyệt. Đối với người dùng đăng ký
                  trên trang web của chúng tôi (nếu có), chúng tôi cũng lưu trữ
                  thông tin cá nhân mà họ cung cấp trong hồ sơ người dùng của
                  họ. Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa thông tin
                  cá nhân của họ bất kỳ lúc nào (ngoại trừ họ không thể thay đổi
                  tên người dùng của họ). Quản trị viên trang web cũng có thể
                  xem và chỉnh sửa thông tin đó.
                </p>
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>
                  Các quyền nào của bạn với dữ liệu của mình
                </h1>
                <p className={styles.desc}>
                  Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận
                  xét, bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng
                  tôi lưu giữ về bạn, bao gồm mọi dữ liệu bạn đã cung cấp cho
                  chúng tôi. Bạn cũng có thể yêu cầu chúng tôi xóa mọi dữ liệu
                  cá nhân mà chúng tôi lưu giữ về bạn. Điều này không bao gồm
                  bất kỳ dữ liệu nào chúng tôi có nghĩa vụ giữ cho các mục đích
                  hành chính, pháp lý hoặc bảo mật.
                </p>
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>
                  Các dữ liệu của bạn được gửi tới đâu
                </h1>
                <p className={styles.desc}>
                  Các bình luận của khách (không phải là thành viên) có thể được
                  kiểm tra thông qua dịch vụ tự động phát hiện spam.
                </p>
              </div>
              <div className={styles.section}>
                <h1 className={styles.title}>Thông tin bổ sung</h1>
                <p className={styles.desc}>
                  1. Cách chúng tôi bảo vệ dữ liệu của bạn <br />
                  2. Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện <br />
                  3. Những bên thứ ba chúng tôi nhận dữ liệu từ đó <br />
                  4. Việc quyết định và/hoặc thu thập thông tin tự động mà chúng
                  tôi áp dụng với dữ liệu người dùng <br />
                  5. Các yêu cầu công bố thông tin được quản lý
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
