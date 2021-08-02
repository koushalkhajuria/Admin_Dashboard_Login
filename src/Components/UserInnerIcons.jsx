import { Icon, InlineIcon } from "@iconify/react";
import userOutlined from "@iconify-icons/ant-design/user-outlined";
import usersFourLight from "@iconify-icons/ph/users-four-light";
import reportAnalytics from "@iconify-icons/tabler/report-analytics";
import passwordIcon from "@iconify-icons/carbon/password";
import bxReset from "@iconify-icons/bx/bx-reset";

const UserInnerIcons = [
  {
    id: 1,
    title: "User Master",
    classNani: "Usermastericon",
    icons: <Icon style={{ height: "30px", width: "30px" , padding: "4px 0",}} icon={userOutlined}  />,

    path:"/usermaster"
    
  },
  {
    id: 2,
    title: "User Group Master",
    classNani: "Usergroupicon",
    icons: <Icon style={{ height: "30px", width: "30px" , padding: "4px 0",}} icon={usersFourLight}  />,

    path:"/usergroup"
    
  },
  {
    id: 3,
    title: "User Log Report",
    classNani: "Userlogicon",
    icons: <Icon style={{ height: "30px", width: "30px" , padding: "4px 0",}} icon={reportAnalytics}  />,

    path:"/userlogreport"
  },
  {
    id: 4,
    title: "Change Password",
    classNani: "Changepasswordicon",
    icons: <Icon style={{ height: "30px", width: "30px" , padding: "4px 0",}} icon={passwordIcon}  />,

    path:"/changepassword"
  },
  {
    id: 5,
    title: "Reset Password",
    classNani: "Resetpasswordicon",
    icons: <Icon style={{ height: "30px", width: "30px" , padding: "4px 0",}} icon={bxReset}  />,

    path:"/resetpassword"
  }
];

export default UserInnerIcons;
