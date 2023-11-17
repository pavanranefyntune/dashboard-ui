import {BiSolidDashboard} from "react-icons/bi";
import {BiStats} from "react-icons/bi";
import {GrTransaction} from "react-icons/gr";
import {RiTeamFill} from "react-icons/ri";
import {IoIosStats} from "react-icons/io";
import {IoIosSettings} from "react-icons/io";


const sideBarData = [
    {
        id: 1,
        name: "Dashboard",
        icon: BiSolidDashboard,
        path: "/",
    },
    {
        id: 2,
        name: "Statistic",
        icon: BiStats,
        path: "/",
    },
    {
        id: 3,
        name: "Transaction",
        icon: GrTransaction,
        path: "/",
    },
    {
        id: 4,
        name: "Users",
        icon: RiTeamFill,
        path: "/users",
    },
    {
        id: 5,
        name: "Sell Reports",
        icon: IoIosStats,
        path: "/",
    },
    {
        id: 6,
        name: "Setting",
        icon: IoIosSettings,
        path: "/",
    }
]


export default sideBarData;