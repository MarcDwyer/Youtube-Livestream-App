const hyphonix = document.getElementsByClassName('hyphonix');
const youtube = document.getElementsByClassName('youtube');
const tsa = document.getElementsByClassName('tsa');
const ice = document.getElementsByClassName('ice');
const destiny = document.getElementsByClassName('destiny');
const tsapic = document.getElementsByClassName('suit');
const hyphonixpic = document.getElementsByClassName('bald');
const icepic = document.getElementsByClassName('bignose');
const destpic = document.getElementsByClassName('dwarf');
const video = document.getElementsByClassName('video');
const title = document.getElementsByClassName('title')
let streamercount = 1;


let tsajson;
let icejson;
let hypjson;
let destinyjson;



function start() {
  console.log('IT WORKED');
  // Hyphonix
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaFpm67qMk1W1wJkFhGXucA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
  hypjson = data;
if (data.pageInfo.totalResults == 1) {
  streamercount++;
  $(hyphonixpic).addClass(' active');
  $('img').remove('.two');
  $(hyphonix).append("<img class='youtube two' src='img/online.png'>");
}
})
// Ice
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv9Edl_WbtbPeURPtFDo-uA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
  icejson = data;
if (data.pageInfo.totalResults == 1) {
  streamercount++;
  $(icepic).addClass(' active');
  $('img').remove('.one');
  $(ice).append("<img class='youtube one' src='img/online.png'>");

}
})
// TSA
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCB0H_1M78_jwTyfaJuP241g&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
  tsajson = data;
if (data.pageInfo.totalResults == 1) {
  streamercount++;
  $(tsapic).addClass(' active');
  $('img').remove('.three');
  $(tsa).append("<img class='youtube three' src='img/online.png'>");
}
})
$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC554eY5jNUfDq3yDOJYirOQ&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
  destinyjson = data;
  if (data.pageInfo.totalResults == 1) {
    streamercount++;
    $(destpic).addClass(' active');
    $('img').remove('.four');
    $('.destiny').append("<img class='youtube four' src='img/online.png'>");
}
clicks();
})
updater();

}


function updater() {
console.log('updater is running..')

  setInterval(function () {
    // Hyphonix
    streamercount = 0;
    console.log("yeah it ran");
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCaFpm67qMk1W1wJkFhGXucA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
    hypjson = data;
  if (data.pageInfo.totalResults == 1) {
    $(hyphonixpic).addClass(' active');
    $('img').remove('.two');
    $(hyphonix).append("<img class='youtube two' src='img/online.png'>");
    streamercount++;
  } else {
    $(hyphonixpic).removeClass(' active');
    $('img').remove('.two');
    $(hyphonix).append("<img class='youtube two' src='img/youtube.svg'>");

  }
  })
  // Ice
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv9Edl_WbtbPeURPtFDo-uA&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
    icejson = data;
  if (data.pageInfo.totalResults == 1) {
    $(icepic).addClass(' active');
    $('img').remove('.one');
    $(ice).append("<img class='youtube one' src='img/online.png'>");
    streamercount++;
} else {
  $(icepic).removeClass(' active');
  $('img').remove('.one');
  $(ice).append("<img class='youtube one' src='img/youtube.svg'>");
}
  })
  // TSA
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCB0H_1M78_jwTyfaJuP241g&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
    tsajson = data;
  if (data.pageInfo.totalResults == 1) {
    $(tsapic).addClass(' active');
    $('img').remove('.three');
    $(tsa).append("<img class='youtube three' src='img/online.png'>");
    streamercount++;
} else {
  $(tsapic).removeClass(' active');
  $('img').remove('.three');
  $(tsa).append("<img class='youtube three' src='img/youtube.svg'>");
}
  })
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC554eY5jNUfDq3yDOJYirOQ&eventType=live&type=video&key=AIzaSyAxfrRQxi1QW-ilyKqXPXqqI-Woq0Ocm5I', function (data) {
    destinyjson = data;
    if (data.pageInfo.totalResults == 1) {
      streamercount++;
      $(destpic).addClass(' active');
      $('img').remove('.four');
      $('.destiny').append("<img class='youtube four' src='img/online.png'>");
  } else  {
    $(destpic).removeClass(' active');
    $('img').remove('.four');
    $(tsa).append("<img class='youtube four' src='img/youtube.svg'>");
  }
  })
  clicks();
}, 300000)
}
start();

// tsajson.items[0].id.videoId
function clicks() {
console.log('clicks ran');
  if (tsajson.pageInfo.totalResults == 1) {
    const videonumber = tsajson.items[0].id.videoId;
    const theurl = "https://www.youtube.com/embed/" + videonumber;
  $(tsa).on('click', function() {
  $('.stream').remove();
  $(video).append('<iframe class="stream" src="' + theurl + '"></iframe>');
  $(video).css('background-color', 'black');
});
}
if (icejson.pageInfo.totalResults == 1) {
  const icevideonumber = icejson.items[0].id.videoId;
  const icetheurl = "https://www.youtube.com/embed/" + icevideonumber;
$(ice).on('click', function() {
$('.stream').remove();
$(video).append('<iframe class="stream" src="' + icetheurl + '"></iframe>');
$(video).css('background-color', 'black');
});
}
if (hypjson.pageInfo.totalResults == 1) {
  const hypvideonumber = hypjson.items[0].id.videoId;
  const hyptheurl = "https://www.youtube.com/embed/" + hypvideonumber;
$(hyphonix).on('click', function() {
$('.stream').remove();
$(video).append('<iframe class="stream" src="' + hypicetheurl + '"></iframe>');
$(video).css('background-color', 'black');

});
}
if (destinyjson.pageInfo.totalResults == 1) {
  const destnumber = destinyjson.items[0].id.videoId;
  const desturl = "https://www.youtube.com/embed/" + destnumber;
  $(destiny).on('click', function() {
    console.log('clicked!');
    $('.stream').remove();
  $(video).append('<iframe class="stream" src="' + desturl + '"></iframe>');
  $(video).css('background-color', 'black');
});
}
}
