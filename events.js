// add event listeners to make addView and listView appear and disappear

var listMusic = document.getElementById("list-music");
var listView = document.getElementById("list-view");
var addMusic = document.getElementById("add-music");
var addView = document.getElementById("add-view");

addMusic.addEventListener("click", function(){
  console.log("hello add view");
  addView.classList.remove("hidden");
  listView.classList.add("hidden");
})

listMusic.addEventListener("click", function(){
  console.log("hello list view")
  listView.classList.remove("hidden")
  addView.classList.add("hidden")
})

var button = document.getElementById("btn");

console.log(button);
button.addEventListener("click", function() {
  var userSong = document.getElementById("userSong").value;
  var userArtist = document.getElementById("userArtist").value;
  var userAlbum = document.getElementById("userAlbum").value;
  var newSong = userSong + " by " + userArtist + " on the album " + userAlbum + ".";
  console.log("hello")
  joinedSongs.push(newSong);
  addToDom(userSong, userArtist, userAlbum);
})




