import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import styles from "./Discover.module.css";
interface DiscoverProps {}

const Discover: React.FC<DiscoverProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.discover}>
      <Navbar isOpen={isOpen} onOpenChange={onOpenChange}></Navbar>
    </div>
  );
};

export default Discover;
