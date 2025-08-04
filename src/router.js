import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Mentorship from "./pages/Mentorship";
import InputForm from "./pages/InputForm";

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/form" element={<InputForm />} />
    </Route>
  </Routes>
);

export default AppRoutes;
