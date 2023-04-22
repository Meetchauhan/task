import { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import MenuData from "../../data/headreData/MenuData";
import Menu from "./Menu";
import "./header.css";

function Header() {
  const [category, setCategory] = useState(false);
  const [resize, setResize] = useState(window.innerWidth);
  const [hamBtn, setHamBtn] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resize]);

  function showCategory() {
    setCategory(true);
  }
  function hideCategory() {
    setCategory(false);
  }
  function handleResize() {
    setResize(window.innerWidth);
  }
  function handleHamBtn() {
    setHamBtn(!hamBtn);
  }
  function handleSticky() {
    if (window.scrollY > 75) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", handleSticky);
  return (
    <header className={sticky ? "sticky header" : "header"}>
      <div className="header-container">
        <nav className="header-nav">
          <div className="logo">
            <img className="headerLogo" src={logo} alt="logo" />
          </div>
          {resize > 991 && (
            <div className="menu-inner">
              <div className="category">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
                <ul className="header-cat">
                  <li
                    className="header-cat-item"
                    onMouseEnter={showCategory}
                    onMouseLeave={hideCategory}
                  >
                    Category
                  </li>
                  {category && (
                    <ul
                      onMouseEnter={showCategory}
                      onMouseLeave={hideCategory}
                      className="header-sub-category"
                    >
                      <li className="category-title">English Book</li>
                      <li className="category-title">Math Book</li>
                      <li className="category-title">Story Book</li>
                    </ul>
                  )}
                </ul>
              </div>

              <div className="header-menu">
                {MenuData.map((item) => (
                  <Menu
                    key={item.id}
                    title={item.title}
                    subMenu={item.subMenu}
                  />
                ))}
              </div>
              <div className="search">
                <form className="search">
                  <input
                    type="text"
                    className="header-form"
                    placeholder="Search Course"
                  />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          )}
          {resize < 992 && (
            <button type="button" onClick={handleHamBtn} className="ham-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          )}
        </nav>
        {resize < 992 && hamBtn && (
          <div className="mobile-menu">
            {MenuData.map((item) => (
              <Menu key={item.id} title={item.title} subMenu={item.subMenu} />
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
