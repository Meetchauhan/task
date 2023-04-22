import { useState } from "react";

function Menu(props) {
  const [subMenu, setSubMenu] = useState(false);

  function showSubMenu() {
    setSubMenu(true);
  }
  function hideSubMenu() {
    setSubMenu(false);
  }
  function handleToggle() {
    setSubMenu(!subMenu);
  }
  return (
    <ul className="menu-list">
      <li
        className={subMenu ? "active menu-title" : "menu-title"}
        onMouseEnter={showSubMenu}
        onMouseLeave={hideSubMenu}
        onClick={handleToggle}
      >
        {props.title}
              <span className={subMenu ? 'mobile-menu-icon active' : 'mobile-menu-icon'}></span>
      </li>
      <ul
        onMouseEnter={showSubMenu}
        onMouseLeave={hideSubMenu}
        className="submenu-list"
      >
        {subMenu &&
          props.subMenu.map((item, index) => (
            <li className="submenu-title" key={index}>
              {item}
            </li>
          ))}
      </ul>
    </ul>
  );
}
export default Menu;
