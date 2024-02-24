import Image from "next/image";
import Mainpage from "./components/navigation/mainpage";
import Navbar from "./components/navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Mainpage />
      </div>
    </>
  );
}
