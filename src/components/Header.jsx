import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          EduBridge
        </a>
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">product</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="#">Login</a>
          <a href="#" className="btn-join">
            join us
            <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
};
