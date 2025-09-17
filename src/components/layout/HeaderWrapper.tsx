import Header from "./Header"
import BannerWrapper from "../ui/BannerWrapper";
import styles from "./Navbar.module.css"
import MarqueeWrapper from "../sections/MarqueeWrapper"

export default function HeaderWrapper() {

  return (
    <>
      <div className={styles.navWrapper}>
        <BannerWrapper/>
        <MarqueeWrapper/>
        <Header />
      </div>  
    </>
  );
}
