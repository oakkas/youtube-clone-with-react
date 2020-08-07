import React from "react";

import ChannelImage from "./images/download.jfif";
import VideoCard from "./VideoCard.js";
import "./RecommendedVideos.css";

export default function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage={ChannelImage}
          channel="Sonny Sangha"
          image="https://yt3.ggpht.com/a/AATXAJy5xCV9uU9I5fWNih0v43nwyved5bm9x2a-o8j95oc=s100-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}
