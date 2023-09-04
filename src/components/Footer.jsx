import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';
const Footer = () => (
  <footer>
    <div className="d-flex custom-screen py-10 mt-20 border-t text-center text-gray-600 sm:mt-28">
      <Link to='https://github.com' className="text-2xl mt-5"><FaGithub/></Link>
      <p>© 2023 Triple-A. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
