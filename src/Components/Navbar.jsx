import { FiMenu } from "react-icons/fi";

import logo from "../assets/bostalogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 relative">
        <Link className="w-4/12" to={"/"}>
          <div>
            <img src={logo} alt="logo" className="w-full" />
          </div>
        </Link>
        <div className="flex items-center">
          <Link
            className="flex items-center text-[#FF0000] text-base font-semibold mr-4"
            to={"/shipping-tracking"}
          >
            <div className="flex ">
              <p className="mr-1">Track Shipment</p>
            </div>
          </Link>
          <div>
            <FiMenu size={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
