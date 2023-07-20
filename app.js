const videoCardContainer = document.querySelector(".video-container");

let api_key = "your api key";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  video_http +
    new URLSearchParams({
      key: api_key,
      part: "snippet",
      chart: "mostPopular",
      maxResults: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: api_key,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      makeVideoCard(video_data);
    });
};

const makeVideoCard = (data) => {
  videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
};

// search bar

const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener("click", () => {
  if (searchInput.value.length) {
    location.href = searchLink + searchInput.value;
  }
});
var myVideo1 = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");
var myVideo3 = document.getElementById("video3");
var myVideo4 = document.getElementById("video4");
var myVideo5 = document.getElementById("video5");
var myVideo6 = document.getElementById("video6");
var myVideo7 = document.getElementById("video7");
var myVideo8 = document.getElementById("video8");
function playPause1() {
  if (myVideo1.paused) myVideo1.play();
  else myVideo1.pause();
}

function playPause2() {
  if (myVideo2.paused) myVideo2.play();
  else myVideo2.pause();
}

function playPause3() {
  if (myVideo3.paused) myVideo3.play();
  else myVideo3.pause();
}

function playPause4() {
  if (myVideo4.paused) myVideo4.play();
  else myVideo4.pause();
}

function playPause5() {
  if (myVideo5.paused) myVideo5.play();
  else myVideo5.pause();
}

function playPause6() {
  if (myVideo6.paused) myVideo6.play();
  else myVideo6.pause();
}

function playPause7() {
  if (myVideo7.paused) myVideo7.play();
  else myVideo7.pause();
}

function playPause8() {
  if (myVideo8.paused) myVideo8.play();
  else myVideo8.pause();
}

let clip1 = document.querySelector("#vid1");
clip1.addEventListener("mouseover", function (e) {
  clip1.play();
});
clip1.addEventListener("mouseout", function (e) {
  clip1.pause();
});

let clip2 = document.querySelector("#vid2");
clip2.addEventListener("mouseover", function (e) {
  clip2.play();
});
clip2.addEventListener("mouseout", function (e) {
  clip2.pause();
});

let clip3 = document.querySelector("#vid3");
clip3.addEventListener("mouseover", function (e) {
  clip3.play();
});
clip3.addEventListener("mouseout", function (e) {
  clip3.pause();
});

let clip4 = document.querySelector("#vid4");
clip4.addEventListener("mouseover", function (e) {
  clip4.play();
});
clip4.addEventListener("mouseout", function (e) {
  clip4.pause();
});

let clip9 = document.querySelector("#vid9");
clip9.addEventListener("mouseover", function (e) {
  clip9.play();
});
clip9.addEventListener("mouseout", function (e) {
  clip9.pause();
});

let clip10 = document.querySelector("#vid10");
clip10.addEventListener("mouseover", function (e) {
  clip10.play();
});
clip10.addEventListener("mouseout", function (e) {
  clip10.pause();
});

let clip11 = document.querySelector("#vid11");
clip11.addEventListener("mouseover", function (e) {
  clip11.play();
});
clip11.addEventListener("mouseout", function (e) {
  clip11.pause();
});

let clip12 = document.querySelector("#vid12");
clip12.addEventListener("mouseover", function (e) {
  clip12.play();
});
clip12.addEventListener("mouseout", function (e) {
  clip12.pause();
});

let clip13 = document.querySelector("#vid13");
clip13.addEventListener("mouseover", function (e) {
  clip13.play();
});
clip13.addEventListener("mouseout", function (e) {
  clip13.pause();
});

let clip14 = document.querySelector("#vid14");
clip14.addEventListener("mouseover", function (e) {
  clip14.play();
});
clip14.addEventListener("mouseout", function (e) {
  clip14.pause();
});

let clip15 = document.querySelector("#vid15");
clip15.addEventListener("mouseover", function (e) {
  clip15.play();
});
clip15.addEventListener("mouseout", function (e) {
  clip15.pause();
});

let clip16 = document.querySelector("#vid16");
clip16.addEventListener("mouseover", function (e) {
  clip16.play();
});
clip16.addEventListener("mouseout", function (e) {
  clip16.pause();
});
