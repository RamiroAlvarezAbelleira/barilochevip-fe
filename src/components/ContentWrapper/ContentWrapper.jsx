import { useLocation } from "react-router-dom";
import {Footer} from "../Footer"
import {Header} from "../Header"
import { useEffect } from "react";

const ContentWrapper = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="content-wrapper" className="d-flex flex-column  bg-gray-100">
        <div id="content">
        <Header />
        <div className="container-fluid mx-0 px-0">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default ContentWrapper