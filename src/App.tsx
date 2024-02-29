import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import VotePage from "./pages/VotePage";
import AdminPage from "./pages/AdminPage";
import Onyet from "./assets/img/onyet.png";
import ListPaslon from "./pages/ListPaslon";
import ListPartai from "./pages/ListPartai";
import AddPaslon from "./pages/AddPaslon";
import AddPartai from "./pages/AddPartai";
import Slider from "react-slick";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [userSignIn, setUserSignin] = useState({
    username: "",
    password: "",
    isLogin: false,
    listas: "",
  });

  function PrivatRoute() {
    if (userSignIn.listas === "admin") {
      navigate("/admin");
    }

    return <Outlet />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              userSignIn={userSignIn}
              setUserSignIn={setUserSignin}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <AdminPage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/list-partai"
          element={
            <ListPartai userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/voting"
          element={
            <VotePage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/list-paslon"
          element={
            <ListPaslon userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
      </Routes>

      {/* <Navbar />
      <LandingPage />
      <DetailPage />
      <VotePage />
      <AdminPage />
      <ListPaslon />
      <ListPartai />
      <AddPaslon />
      <AddPartai />
      <Footer /> */}
    </>
  );
}

export default App;
