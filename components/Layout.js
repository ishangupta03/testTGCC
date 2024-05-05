import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./BackToTopButton";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
    return (
      <div className="transition-colors">
        <Navbar />
        {children}
        <div className="hidden lg:block">
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    )
};
export default Layout;
