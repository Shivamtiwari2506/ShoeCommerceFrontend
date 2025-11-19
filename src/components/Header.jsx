import React, { useEffect, useState } from "react";
import Navigations from "./Navigations";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Dropdown, Space } from "antd";
import {
  IconUserCheck,
  IconArchive,
  IconLogout,
  IconUserCircle,
  IconShoppingBagHeart,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";
import { fetchUserData } from "../redux/actions/userActions";
import { decryptData } from "../common/commonFunction";
import { fetchCartItems } from "../redux/actions/cartActions";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const { user } = useSelector((state) => state.userState);
  const { cart } = useSelector((state) => state.cartState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const dropDownItems = [
    {
      key: "1",
      label: <Link to="#">My Profile</Link>,
      extra: <IconUserCheck stroke={2} size={20} />,
    },
    {
      key: "2",
      label: <Link to="#">My Orders</Link>,
      extra: <IconArchive stroke={2} size={20} />,
    },
    {
      key: "3",
      label: <Link to="#">My Wishlist</Link>,
      extra: <IconShoppingBagHeart stroke={2} size={20} />,
    },
    {
      key: "4",
      label: <span>Logout</span>,
      extra: <IconLogout stroke={2} size={20} />,
    },
  ];

  const handleMenuClick = ({ key }) => {
    if (key === "1") navigate("#");
    if (key === "2") navigate("#");
    if (key === "4") handleLogout();
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    dispatch(fetchUserData(decryptData(userId)));
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      dispatch(fetchCartItems(decryptData(userId)));
    }
  }, [dispatch]);

  return (
    <>
      <nav className="min-w-full fixed z-50 h-20 font-bold  shadow-md  flex items-center justify-between md:px-14 px-3 bg-white">
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full object-cover object-center border border-gray-300">
              <img
                src="https://t3.ftcdn.net/jpg/03/15/91/14/360_F_315911434_cEPQiSUyZmSNAtMh6UZf0yorDQnGjvFB.jpg"
                alt="logo"
                className="w-10 h-10 rounded-full object-cover object-center border border-gray-300 scale-125"
              />
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-gray-800 font-logo">
              ShoeVerse
            </span>
          </Link>
        </div>

        {/* Desktop View */}
        <div className="md:flex md:ml-96 hidden text-lg">
          <Navigations />
        </div>

        <div className="cursor-pointer flex items-center">
          <span className="md:mx-5 mx-2">
            <Link to="/cart">
              <div className="relative">
                <span className="absolute -top-2 left-5 text-[10px] font-medium rounded-full bg-black text-white px-1 pb-0.5 min-w-[16px] text-center flex items-center justify-center">
                  {cart?.products?.length || 0}
                </span>
                <FaCartPlus size={24} />
              </div>
            </Link>
          </span>
          <span className="md:mx-5 mx-2 mt-2">
            <Dropdown menu={{ items: dropDownItems, onClick: handleMenuClick }}>
              <div>
                <Space>
                  <div className="flex flex-col items-center">
                    {user && user?.profileImageUrl ? (
                      <img
                        src={user?.profileImageUrl}
                        alt="user_profile"
                        className="w-10 h-10 rounded-full object-cover object-center border border-gray-300"
                      />
                    ) : (
                      <IconUserCircle
                        stroke={2}
                        color="gray"
                        className="w-10 h-10"
                      />
                    )}
                    <p className="capitalize">
                      {user?.userName?.split(" ")[0]}
                    </p>
                  </div>
                </Space>
              </div>
            </Dropdown>
          </span>

          {/* Hamburger Icon */}
          <div
            className="text-4xl md:hidden block cursor-pointer z-50"
            onClick={() => setIsMobileView(!isMobileView)}
          >
            {isMobileView ? "×" : "≡"}
          </div>
        </div>

        {/* Background Overlay */}
        {isMobileView && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setIsMobileView(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white z-40 p-6 text-xl transform transition-transform duration-300 ease-in-out ${
            isMobileView ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Navigations closeMenu={() => setIsMobileView(false)} />

          <div className="absolute bottom-4 left-0 text-center">
            <p className="text-gray-600 text-2xl italic mb-4">
              Discover style that suits you.
              <br />
              Crafted for comfort. Worn with confidence.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
