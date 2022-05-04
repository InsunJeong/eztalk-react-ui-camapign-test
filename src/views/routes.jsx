/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Community        from "./Community.jsx";
import TemporaryChatroom from "./TemporaryChatroom.jsx";
import RegularChatroom  from "./RegularChatroom.jsx";
import Campaign         from "./Campaign.jsx";
import CampaignInsert   from "./CampaignInsert.jsx";
import CommunityAccount from "./CommunityAccount.jsx";
import CommunityAdmin   from "./CommunityAdmin.jsx";

import Icons from "../samples/Icons.jsx";
import User from "../samples/User.jsx";
import Typography from "../samples/Typography.jsx";
import TableList from "../samples/Tables.jsx";
import UpgradeToPro from "../samples/Upgrade.jsx";

var routes = [
  {
    path: "/communities",
    name: "Community",
    icon: "nc-icon nc-layout-11",
    component: Community,
    layout: "/menu",
    needAuth : false,
  },
  {
    path: "/temporary-chatroom",
    name: "준회원 채팅방",
    icon: "nc-icon nc-sound-wave",
    component: TemporaryChatroom,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "/regular-chatroom",
    name: "정회원 채팅방",
    icon: "nc-icon nc-chat-33",
    component: RegularChatroom,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "/campaigns",
    name: "캠페인",
    icon: "nc-icon nc-spaceship",
    component: Campaign,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "/campaigns/CampaignInsert",
    name: "캠페인 등록",
    icon: "nc-icon nc-spaceship",
    component: CampaignInsert,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "/community-accounts",
    name: "커뮤니티 통장",
    icon: "nc-icon nc-money-coins",
    component: CommunityAccount,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "/community-admin",
    name: "커뮤니티 관리",
    icon: "nc-icon nc-settings",
    component: CommunityAdmin,
    layout: "/menu",
    needAuth : true,
  },
  {
    path: "",
    name: "",
    icon: "",
    component: Icons,
    layout: "---",
    needAuth : false,
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "nc-icon nc-bank",
  //   component: Dashboard,
  //   layout: "/samples",
  //   needAuth : false,
  // },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/samples",
    needAuth : false,
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: User,
    layout: "/samples",
    needAuth : false,
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/samples",
    needAuth : false,
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/samples",
    needAuth : false,
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-planet",
    component: UpgradeToPro,
    layout: "/samples",
    needAuth : false,
  },
];
export default routes;
