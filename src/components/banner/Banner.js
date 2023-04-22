import banner from "../../images/banner.jpg";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-inner">
        <img src={banner} alt="banner" />
        <div className="breadcrumb">
          <div className="container">
            <div className="breadcrumb-inner">
              <h1 className="page-title">Profile</h1>
              <div className="breadcrumb-nav">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
