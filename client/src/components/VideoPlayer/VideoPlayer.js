import React from "react";
import ReactPlayer from "react-player";

// Css
import classes from "./VideoPlayer.module.scss";

const VideoPlayer = (props) => {
    console.log(props.videoPath);
    return (
        <div className={classes.video}>
            <ReactPlayer
                width="1000px"
                height="360px"
                controls
                url={props.videoPath}
            />
        </div>
    );
};

export default VideoPlayer;
