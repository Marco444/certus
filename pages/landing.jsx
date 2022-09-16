import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    var frameNumber = 0, // start video at frame 0
      // lower numbers = faster playback
      playbackConst = 500,
      // get page height from video duration
      setHeight = document.getElementById("set-height"),
      // select video element
      vid = document.getElementById("v0");

    // dynamically set the page height according to video length
    vid.addEventListener("loadedmetadata", function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });

    // Use requestAnimationFrame for smooth playback
    function scrollPlay() {
      var frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }, []);

  return (
    <div id="set-height">
      <p id="time">
        <video id="v0" tabIndex="0" autobuffer="autobuffer" preload="preload">
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          ></source>
        </video>
      </p>
    </div>
  );
}

export default Landing;
