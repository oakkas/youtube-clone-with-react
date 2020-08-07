import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        selected
        className="sidebar_row"
        title="Home"
        Icon={HomeIcon}
      />
      <SidebarRow
        className="sidebar_row"
        title="Trending"
        Icon={WhatshotIcon}
      />
      <SidebarRow
        className="sidebar_row"
        title="Subscription"
        Icon={SubscriptionsIcon}
      />
      <hr />
      <SidebarRow
        className="sidebar_row"
        title="Library"
        Icon={VideoLibraryIcon}
      />
      <SidebarRow className="sidebar_row" title="History" Icon={HistoryIcon} />
      <SidebarRow
        className="sidebar_row"
        title="Your videos"
        Icon={OndemandVideoIcon}
      />
      <SidebarRow
        className="sidebar_row"
        title="Watch Later"
        Icon={WatchLaterIcon}
      />
      <SidebarRow
        className="sidebar_row"
        title="Liked videos"
        Icon={ThumbUpAltOutlinedIcon}
      />
      <SidebarRow
        className="sidebar_row"
        title="Show more"
        Icon={ExpandMoreOutlinedIcon}
      />
      <hr />
    </div>
  );
}

export default Sidebar;
