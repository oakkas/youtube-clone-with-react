import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsActiveSharpIcon from "@material-ui/icons/NotificationsActiveSharp";
import Avatar from "@material-ui/core/Avatar";

import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon" />
        <NotificationsActiveSharpIcon className="header_icon" />
        <Avatar
          className="header_icon"
          alt="Oguz Akkas"
          src="https://avatars1.githubusercontent.com/u/13190903?s=400&u=9fa834f912fcf90bd84c485b08f2303e1c8ec6af&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
