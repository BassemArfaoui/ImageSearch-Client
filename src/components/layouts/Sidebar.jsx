import {
  FiHome,
  FiSettings,
  FiHeart,
  FiGrid,
  FiPlusCircle,
  FiSearch,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import TooltipWrapper from "../tools/TooltipWrapper";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <FiHome />, label: "Home", path: "/" },
    { icon: <FiSearch />, label: "Search", path: "/search" },
    { icon: <FiHeart />, label: "wishList", path: "/wishlist" },
    { icon: <FiSettings />, label: "Settings", path: "/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="group relative md:h-full  border-r-2 border-r-gray-400">
      <div className="h-full bg-white-800 flex gap-2 flex-row justify-evenly md:justify-start md:flex-col items-center md:py-4 py-1 w-full md:w-w-16 ">
        {menuItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            ((location.pathname.startsWith("/classes") ||
              location.pathname.startsWith("/subjects")) &&
              item.path === "/menu");

          return (
            <TooltipWrapper tooltip={item.label} placement="right" enterDelay={1500}>
              <div
                key={index}
                onClick={() => handleNavigation(item.path)}
                className={`p-3 cursor-pointer rounded-lg hover:bg-sky-100 ${
                  isActive
                    ? "text-blue-500  hover:bg-gray-200"
                    : "text-gray-500  "
                }`}
              >
                {item.icon}
              </div>
            </TooltipWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
