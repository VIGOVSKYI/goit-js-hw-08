import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
console.log(player);

function currentVideoTime (data) {
      console.log(data);
      
      const dataJson = JSON.stringify(data);

      localStorage.setItem("videoplayer-current-time", dataJson);
      console.log(localStorage);
    }

    player.on('timeupdate', throttle(currentVideoTime,1000));

const getCurrentVideoTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(getCurrentVideoTime);

player.setCurrentTime(getCurrentVideoTime.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});