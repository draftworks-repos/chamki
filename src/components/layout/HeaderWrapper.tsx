import Header from "./Header"
import Banner from "../ui/Banner";
import styles from "./Navbar.module.css"
import MarqueeWrapper from "../sections/MarqueeWrapper"

export default function HeaderWrapper() {

  return (
    <>
      <div className={styles.navWrapper}>
        <Banner/>
        <MarqueeWrapper/>
        <Header />
      </div>  
    </>
  );
}
