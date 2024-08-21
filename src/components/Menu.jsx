import { useState } from "react";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUser,
  FaBook,
  FaUserFriends,
  FaSignOutAlt,
  FaCog,
  FaCalendarAlt,
  FaEnvelope,
  FaBullhorn,
  FaRegFileAlt,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePlayLesson, MdAssignmentInd } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { GiArchiveRegister } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";

const menuItems = [
  {
    title: "MENU",
    items: [
      { icon: FaHome, label: "Home", href: "/" },
      { icon: FaChalkboardTeacher, label: "Teachers", href: "/list/teachers" },
      { icon: FaUserFriends, label: "Students", href: "/list/students" },
      { icon: BsCurrencyExchange, label: "Fees", href: "/list/fees" },
      { icon: FaUser, label: "Parents", href: "/list/parents" },
      { icon: FaBook, label: "Subjects", href: "/list/subjects" },
      { icon: SiGoogleclassroom, label: "Classes", href: "/list/classes" },
      { icon: MdOutlinePlayLesson, label: "Lessons", href: "/list/lessons" },
      { icon: PiExam, label: "Exams", href: "/list/exams" },
      {
        icon: MdAssignmentInd,
        label: "Assignments",
        href: "/list/assignments",
      },
      { icon: FaRegFileAlt, label: "Results", href: "/list/results" },
      {
        icon: GiArchiveRegister,
        label: "Attendance",
        href: "/list/attendance",
      },
      { icon: FaCalendarAlt, label: "Events", href: "/list/events" },
      { icon: FaEnvelope, label: "Messages", href: "/list/messages" },
      { icon: FaBullhorn, label: "Announcements", href: "/list/announcements" },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: FaUser, label: "Profile", href: "/profile" },
      { icon: FaCog, label: "Settings", href: "/settings" },
      { icon: FaSignOutAlt, label: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
  const [activeItem, setActiveItem] = useState("/");

  const handleClick = (href) => {
    setActiveItem(href);
  };

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-orange-600 font-bold my-4">
            {section.title}
          </span>
          {section.items.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => handleClick(item.href)}
              className={`flex items-center gap-4 text-blue-500 py-3 px-4 rounded-md transition-colors duration-300 ${
                activeItem === item.href
                  ? "bg-blue-900 text-white"
                  : "hover:bg-blue-700"
              }`}
              style={{ width: "250px", height: "55px" }}
            >
              <item.icon className="w-6 h-6 text-white" />{" "}
              {/* Adjusted icon size */}
              <span className="hidden lg:block dark:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
