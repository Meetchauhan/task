import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";

function Layout(props) {
  return (
    <>
      <Header />
      <div className="main">
        <Banner />
        <Profile />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
