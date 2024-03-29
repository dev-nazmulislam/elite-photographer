import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Services from "./pages/Home/Services/Services";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import NotFound from "./pages/Shared/NotFound/NotFound";
import Singup from "./pages/Register/Singup";
import CheckOut from "./pages/Home/CheckOut/CheckOut";
import RequerAuth from "./pages/Shared/RequerAuth/RequerAuth";
import { createContext } from "react";
import useService from "./Hooks/useService";

export const ServiceContext = createContext("review");

function App() {
  const [servicesData, setServicesData] = useService();
  return (
    <div>
      <ServiceContext.Provider value={[servicesData, setServicesData]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/service/:serviceId"
            element={
              <RequerAuth>
                <CheckOut />
              </RequerAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Singup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ServiceContext.Provider>
    </div>
  );
}

export default App;
