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
    link: "/",
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
    title:
      "How does the temperature of a Copper wire affect its electrical resistance?",
    description: "Physics | IA Example | 388 words",
    type: "IA Example",
  },
  {
    title: "The influence of Hamlet's soliloquy on his inner conflict",
    description: "English Literature | EE Example | 4000 words",
    type: "EE Example",
  },
  {
    title:
      "How the use of AI in automation is transforming manufacturing industries",
    description: "Computer Science | IA Example | 1500 words",
    type: "IA Example",
  },
  {
    title: "Analyzing the impact of social media on teenage mental health",
    description: "Psychology | EE Example | 3980 words",
    type: "EE Example",
  },
  {
    title: "Optimization of logistic regression using gradient descent",
    description: "Mathematics | IO Example | 1200 words",
    type: "IO Example",
  },
  {
    title: "The role of photosynthesis in the carbon cycle",
    description: "Biology | IA Example | 1250 words",
    type: "IA Example",
  },
  {
    title: "The evolution of human rights in international law",
    description: "History | EE Example | 3700 words",
    type: "EE Example",
  },
  {
    title:
      "A study on renewable energy sources for sustainable urban development",
    description: "Environmental Systems | IO Example | 1100 words",
    type: "IO Example",
  },
];

export const EXPLORE_TABS = [
  {
    label: "IA Example",
    content: <CourseworkList />,
  },
  {
    label: "EE Example",
    content: <CourseworkList />,
  },
  {
    label: "IO Example",
    content: <CourseworkList />,
  },
];
