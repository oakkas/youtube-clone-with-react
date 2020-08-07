import React from "react";

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";
import ChannelImage from "./images/download.jfif";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find almost any programming language videos"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="569K"
        description="Do you want a FREE oneline..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtune clone"
        image={ChannelImage}
      />

      <VideoRow
        views="1.4M"
        subs="569K"
        description="Do you want a FREE oneline..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtune clone"
        image={ChannelImage}
      />

      <VideoRow
        views="1.4M"
        subs="569K"
        description="Do you want a FREE oneline..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's build a Youtune clone"
        image={ChannelImage}
      />
    </div>
  );
}

export default SearchPage;
