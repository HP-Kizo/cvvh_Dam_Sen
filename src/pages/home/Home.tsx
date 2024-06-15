import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Sildes from "../../component/slides/Slides";
import styles from "./Home.module.css";
import Navigate from "../../component/navigate/Navigate";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.home}>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
      {isOpen ? <Navigate></Navigate> : <Sildes></Sildes>}
    </div>
  );
};

export default Home;
