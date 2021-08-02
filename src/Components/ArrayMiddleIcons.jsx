import { Icon, InlineIcon } from "@iconify/react";
import roundDashboardCustomize from "@iconify-icons/ic/round-dashboard-customize";
import bxUserCircle from "@iconify-icons/bx/bx-user-circle";
import userGroup from "@iconify-icons/majesticons/user-group";
import bxSearchAlt from "@iconify-icons/bx/bx-search-alt";

const ArrayMiddleIcons = [
  {
    key: 1,
    classNani: "SearchIcon Bicon",
    classNani2:"SearchIcon1", 
    icons: (<Icon icon={bxSearchAlt} className="MiddleIcons"  style={{ zIndex: "1" }}
      />
    ),
    box: <input className="SearchBox" type="text" placeholder="Search" />,

    path:""
  },
  {
    key: 2,
    classNani: "DashboardIcon Bicon",
    classNani2: "DashboardIcon1",
    id: "DashboardI",
    icons: <Icon icon={roundDashboardCustomize} id="DashboardIc" className="MiddleIcons" />,
    title: <span id="DashboardT">Dashboard</span>,
    path:"/"
  },
  {
    key: 3,
    classNani: "UserIcon Bicon",
    classNani2: "UserIcon1",
    id: "UserI",
    icons: <Icon icon={bxUserCircle} id="UserIc" className="MiddleIcons" />,
    title:  <span id="UserT">User</span>,

    path:""
    
  },
  {
    key: 4,
    classNani: "MasterIcon Bicon",
    classNani2: "MasterIcon1",
    id: "MasterI",
    icons: <Icon icon={userGroup} id="MasterIc" className="MiddleIcons" />,
    title:<span id="MasterT"> Master</span>,
    path:""
  }
];

export default ArrayMiddleIcons;
