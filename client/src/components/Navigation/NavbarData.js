import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const NavbarData = [
    {
        title: "교육안내",
        icon: <BorderColorIcon />,
        iconClosed: <ArrowDropDownIcon />,
        iconOpened: <ArrowDropUpIcon />,
        dropdown: [
            { title: "Elementary", path: "/info/ele" },
            { title: "Middle", path: "/info/mid" },
            { title: "High", path: "/info/high" },
        ],
    },
    {
        title: "교육자료소개",

        icon: <MenuBookIcon />,
        iconClosed: <ArrowDropDownIcon />,
        iconOpened: <ArrowDropUpIcon />,
        dropdown: [
            { title: "Elementary", path: "/intro/ele" },
            { title: "Middle", path: "/intro/mid" },
            { title: "High", path: "/intro/high" },
        ],
    },
    // {
    //     title: "교객지원",
    //     icon: <PersonPinIcon />,
    //     iconClosed: <ArrowDropDownIcon />,
    //     iconOpened: <ArrowDropUpIcon />,
    //     dropdown: [
    //         { title: "자주 묻는 질문", path: "/customer/qna" },
    //         { title: "공지사항", path: "/customer/board" },
    //     ],
    // },
    { title: "고객지원", path: "/customer/qna", icon: <PersonPinIcon /> },
    { title: "Meta-Class", path: "/meta-class", icon: <VrpanoIcon /> },
];
