import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import VrpanoIcon from "@mui/icons-material/Vrpano";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const NavbarData = [
    {
        title: "한국어 교육과정소개",
        icon: <BorderColorIcon />,
        iconClosed: <ArrowDropDownIcon />,
        iconOpened: <ArrowDropUpIcon />,
        dropdown: [
            { title: "Intro", path: "/info-Kor/intro" },
            { title: "Sample Video", path: "/info-Kor/sample" },
        ],
    },
    {
        title: "영어 교육과정소개",
        icon: <BorderColorIcon />,
        iconClosed: <ArrowDropDownIcon />,
        iconOpened: <ArrowDropUpIcon />,
        dropdown: [
            { title: "Elementary", path: "/info-Eng/ele" },
            { title: "Middle", path: "/info-Eng/mid" },
            { title: "High", path: "/info-Eng/high" },
        ],
    },

    { title: "Meta-Class", path: "/meta-class", icon: <VrpanoIcon /> },
    { title: "고객지원", path: "/customer/qna", icon: <PersonPinIcon /> },
];
