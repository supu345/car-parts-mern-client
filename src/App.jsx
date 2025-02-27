import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Shops from "./pages/Shops";
import CategoryShops from "./pages/CategoryShop";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BlogDetails from "./pages/blogDetails";
import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./components/dashboard/Wishlist";
import ProtectUser from "./utils/ProtectUser";
import Index from "./components/dashboard/Index";
import Orders from "./components/dashboard/Orders";
import Order from "./components/dashboard/Order";
import ChangePassword from "./components/dashboard/ChangePassword";
import BlogPage from "./pages/BlogPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/details/:slug" element={<Details />} />
          <Route path="/blog/details/:slug" element={<BlogDetails />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products?" element={<CategoryShops />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard" element={<ProtectUser />}>
            <Route path="" element={<Dashboard />}>
              <Route path="" element={<Index />} />
              <Route path="my-orders" element={<Orders />} />
              <Route path="my-wishlist" element={<Wishlist />} />
              <Route path="order/details/:orderId" element={<Order />} />
              <Route path="chage-password" element={<ChangePassword />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
