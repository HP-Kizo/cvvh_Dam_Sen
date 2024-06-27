import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Slides from "../../component/slides/Slides";
import styles from "./Home.module.css";
import Navigate from "../../component/navigate/Navigate";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.home}>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      {isOpen ? <Navigate></Navigate> : <Slides></Slides>}
    </div>
  );
};

export default Home;
