const reels = [
  {
    isMuted: true,
    username: "wander_with_raj",
    likeCount: 5321,
    isLiked: false,
    shareCount: 134,
    commentCount: 76,
    isFollowed: true,
    caption: "Chasing sunsets and calm skies 🌅",
    video: "./videos/video1.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1772678595035-4ff18bac6d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    isMuted: true,
    username: "codebyaman",
    likeCount: 2980,
    isLiked: true,
    shareCount: 92,
    commentCount: 41,
    isFollowed: false,
    caption: "Debugging at 2 AM like a ninja 🧑‍💻",
    video: "./videos/video2.mp4",
    userprofile:
      "https://plus.unsplash.com/premium_photo-1684529264862-057f43999345?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlkZW98ZW58MHwxfDB8fHww",
  },
  {
    isMuted: true,
    username: "foodtrail",
    likeCount: 7420,
    isLiked: false,
    shareCount: 215,
    commentCount: 163,
    isFollowed: true,
    caption: "Street food adventures never end 🍜",
    video: "./videos/video3.mp4",
    userprofile:
      "https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    isMuted: true,
    username: "fitpulse",
    likeCount: 3144,
    isLiked: true,
    shareCount: 70,
    commentCount: 28,
    isFollowed: false,
    caption: "Leg day… survived barely 💪",
    video: "./videos/video4.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1771613934266-0f474dc34245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    isMuted: true,
    username: "artsy_riya",
    likeCount: 4560,
    isLiked: false,
    shareCount: 111,
    commentCount: 52,
    isFollowed: true,
    caption: "Turning imagination into sketches 🎨",
    video: "./videos/video5.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1772606270537-6eb199b55aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    isMuted: true,
    username: "travelbug",
    likeCount: 6892,
    isLiked: true,
    shareCount: 189,
    commentCount: 120,
    isFollowed: true,
    caption: "A small road, a big adventure 🚗",
    video: "./videos/video1.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1772678595035-4ff18bac6d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    isMuted: true,
    username: "daily_bytes",
    likeCount: 2103,
    isLiked: false,
    shareCount: 63,
    commentCount: 22,
    isFollowed: false,
    caption: "Tech talks in 30 seconds 📱",
    video: "./videos/video2.mp4",
    userprofile:
      "https://source.unsplash.com/100x100/?portrait,developer&sig=7",
  },
  {
    isMuted: true,
    username: "dancewave",
    likeCount: 8934,
    isLiked: true,
    shareCount: 342,
    commentCount: 211,
    isFollowed: true,
    caption: "When the beat hits just right 🎶",
    video: "./videos/video3.mp4",
    userprofile:
      "https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
  {
    isMuted: true,
    username: "wildsnap",
    likeCount: 3780,
    isLiked: false,
    shareCount: 120,
    commentCount: 49,
    isFollowed: false,
    caption: "Nature always tells a story 🌿",
    video: "./videos/video4.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1771613934266-0f474dc34245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    isMuted: true,
    username: "vibe_corner",
    likeCount: 5012,
    isLiked: true,
    shareCount: 150,
    commentCount: 68,
    isFollowed: false,
    caption: "Little moments, big memories ✨",
    video: "./videos/video5.mp4",
    userprofile:
      "https://images.unsplash.com/photo-1772606270537-6eb199b55aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
  },
];

var allReels = document.querySelector(".all-reels");
// var isMuted = true
function addData() {
  var sum = "";
  reels.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="reel">
          <video autoplay loop ${elem.isMuted ? "muted" : ""} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
            ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'}
          </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button id=${idx} class='follow'>${elem.isFollowed ? "Unfollow" : "Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon">
                <i class="ri-chat-3-line"></i>
              </h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon">
                <i class="ri-share-forward-fill"></i>
              </h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon">
                <i class="ri-more-2-fill"></i>
              </h4>
            </div>
          </div>
        </div>`;
  });

  allReels.innerHTML = sum;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed = true;
    }
    else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted){
      reels[dets.target.id].isMuted = true;
    }
    else {
      reels[dets.target.id].isMuted = false;
    }
    addData();
  }

  
});
