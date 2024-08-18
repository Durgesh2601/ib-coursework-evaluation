import { FaClipboardList, FaHome, FaUser } from "react-icons/fa";

export const SIDEBAR_MENU_ITEMS = [
  {
    id: 1,
    icon: <FaHome className="mr-3" />,
    link: "/",
  },
  {
    id: 2,
    icon: <FaClipboardList className="mr-3" />,
    link: "/courseworks",
  },
  {
    id: 3,
    icon: <FaUser className="mr-3" />,
    link: "/profile",
  },
];
export const SELECT_FIELDS = {
  coursework_type: {
    placeholder: "Select Coursework Type",
    options: [
      {
        value: "ia",
        label: "IA Example",
      },
      {
        value: "ee",
        label: "EE Example",
      },
      {
        value: "io",
        label: "IO Example",
      },
    ],
  },
  subject: {
    placeholder: "Select Subject",
    options: [
      {
        value: "physics",
        label: "Physics",
      },
      {
        value: "chemistry",
        label: "Chemistry",
      },
      {
        value: "mathematics",
        label: "Mathematics",
      },
    ],
  },
};
