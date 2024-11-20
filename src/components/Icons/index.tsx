import { 
    FaWallet, 
    FaSortAmountDown, 
    FaCoins, 
    FaChartPie 
} from "react-icons/fa";

import { 
    FaArrowTrendDown, 
    FaArrowTrendUp, 
    FaPlus 
} from "react-icons/fa6";

import { 
    RiMenuUnfoldLine, 
    RiMenuFoldLine 
} from "react-icons/ri";

import { 
    IoMdClose 
} from "react-icons/io";

import { 
    MdLightMode, 
    MdDarkMode, 
    MdSpaceDashboard, 
    MdKeyboardDoubleArrowLeft, 
    MdKeyboardArrowLeft, 
    MdKeyboardArrowRight, 
    MdKeyboardDoubleArrowRight 
} from "react-icons/md";

import { 
    LuEye, 
    LuEyeOff 
} from "react-icons/lu";

import { 
    TbAppsFilled 
} from "react-icons/tb";



export const icons = {
    CROSS: <IoMdClose />,
    PLUS: <FaPlus />,

    ARROW_LEFT_DOUBLE: <MdKeyboardDoubleArrowLeft />,
    ARROW_LEFT: <MdKeyboardArrowLeft />,
    ARROW_RIGHT: <MdKeyboardArrowRight />,
    ARROW_RIGHT_DOUBLE: <MdKeyboardDoubleArrowRight />,

    WALLET: <FaWallet />,
    COINS: <FaCoins />,
    CHART_PIE: <FaChartPie />,

    APPS: <MdSpaceDashboard />,
    APPS_ADD: <TbAppsFilled />,

    MENU_OPEN: <RiMenuUnfoldLine />,
    MENU_HIDE: <RiMenuFoldLine />,

    TRAND_UP: <FaArrowTrendUp />,
    TRAND_DOWN: <FaArrowTrendDown />,
    SORT: <FaSortAmountDown />,

    THEME_LIGHT: <MdLightMode />,
    THEME_DARK: <MdDarkMode />,

    EYE_ON: <LuEye />,
    EYE_OFF: <LuEyeOff />,
    
} as const;
