
let tsajson;
let icejson;
let hyponixjson;
let destinyjson;

let icecheck = false;
let destcheck = false;
let hypcheck = false;
let tsacheck = false;


function fetcher() {
    // ice
    fetch ('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv9Edl_WbtbPeURPtFDo-uA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I')
    .then((res) => res.json())
    .then((data) => {
      icejson = data;
      if (!data.pageInfo.totalResults == 0) {
        icecheck = true;
        iceurl = data.items[0].id.videoId;
        updater();
        } else {
          icecheck = false;
        }
    });
    //hyphonix
    fetch ('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaFpm67qMk1W1wJkFhGXucA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I')
    .then((res) => res.json())
    .then((data) => {
      hyphonixjson = data;
      if (!data.pageInfo.totalResults == 0) {
        hypcheck = true;
        hypurl = data.items[0].id.videoId;
        updater();
        } else {
          hypcheck = false;
        }
    });
    // tsa
    fetch ('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCB0H_1M78_jwTyfaJuP241g&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I')
    .then((res) => res.json())
    .then((data) => {
      tsajson = data;
      if (!data.pageInfo.totalResults == 0) {
        tsacheck = true;
        fetchMore(data.items[0].id.videoId);
        updater();
        } else {
          tsacheck = false;
        }
    });
    //destiny
    fetch ('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC554eY5jNUfDq3yDOJYirOQ&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I')
    .then((res) => res.json())
    .then((data) => {
      destinyjson = data;
      if (!data.pageInfo.totalResults == 0) {
        destcheck = true;
        fetchMore(data.items[0].id.videoId);
        updater();
        } else {
          destcheck = false;
        }
    });
  }


  function fetchMore(vidnum) {
      //tsa
      // tsaurl.items[0].statistics.viewCount
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CliveStreamingDetails&id=${vidnum}&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I`)
    .then((res) => res.json())
    .then((data) => {
    const viewcount = data.items[0].liveStreamingDetails.concurrentViewers;
    const tsadiv = document.querySelector('[data-who="tsacheck"] .number');
    tsadiv.innerHTML = viewcount;
    });
}

// liveStreamingDetails.concurrentViewers
