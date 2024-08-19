import CourseworkList from "@/components/ui/CourseworkList";
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
    link: "/coursework",
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
export const ACCEPTED_FILE_TYPES = ["application/pdf"];
export const MAX_FILE_SIZE = 25; // 25MB for now
export const COURSEWORK_ITEMS = [
  {
    title: "How does the temperature of a Copper...",
    description: "Physics | IA Example | 388 words",
    type: "ia",
  },
];
export const EXPLORE_TABS = [
    {
      label: "IA Example",
      content: <CourseworkList items={COURSEWORK_ITEMS} />,
    },
    {
      label: "EE Example",
      content: <CourseworkList items={COURSEWORK_ITEMS} />,
    },
  ];