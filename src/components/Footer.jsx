import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col">
            <h2>GET IN TOUCH</h2>
            <p>Lorem ipsum dolor sit amet </p>
            <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter">
                  <FaXTwitter />
                </i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram">
                  <FaLinkedin />
                </i>
              </a>
            </div>
          </div>
          <div className="col">
            <h2>Company info</h2>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  About us
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  we are hiring
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>feature</h2>
            <ul>
              <li>bussiness marketing</li>
              <li>User Analytic</li>
              <li>live chat</li>
              <li>ullimated support</li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>IOS & Android</li>
              <li>Watch a demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <p>
            &copy; 2025 | All right reserved made by |{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mohammed-sabrymahdy"
            >
              <strong>mohammed sabry</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
