import React from "react";
import "../style/sidebar.css";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import SidebarRow from "./SidebarRow";

function Sidebar(props) {
  return (
    <div className={`sidebar ${props.closed ? "closed" : ""}`}>
      <div className="logo">Catalus</div>
      <SidebarRow Title="Dashboard" Icon={DashboardOutlinedIcon} Path={"/"} />
      <SidebarRow Title="Subjects" Icon={ListAltIcon} Path={"/subjects"} />
      <SidebarRow
        Title="Chapters"
        Icon={SettingsApplicationsOutlinedIcon}
        Path={"/chapters"}
      />
      <SidebarRow
        Title="Subtopics"
        Icon={AccountTreeOutlinedIcon}
        Path={"/subtopics"}
      />

      <SidebarRow
        Title="Questions"
        Icon={FormatListBulletedOutlinedIcon}
        Path={"/questions"}
      />
    </div>
  );
}

export default Sidebar;
