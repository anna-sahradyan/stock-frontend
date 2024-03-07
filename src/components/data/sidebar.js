import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
    {
        title: "Dashboard",
        icon: <FaTh />,
        path: "/dashboard",
    },
    {
        title: "Add Product",
        icon: <BiImageAdd />,
        path: "/add",
    },
    {
        title: "Account",
        icon: <FaRegChartBar />,
        children: [
            {
                title: "Profile",
                path: "/profile",
            },
            {
                title: "Edit Profile",
                path: "/edit-profile",
            },
        ],
    },
    {
        title: "Report Bug",
        icon: <FaCommentAlt />,
        path: "/contact-us",
    },
];

export default menu;