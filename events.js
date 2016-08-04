// add event listeners to make addView and listView appear and disappear

var listMusic = $("#list-music");
var listView = $("#list-view");
var addMusic = $("#add-music");
var addView = $("#add-view");

addMusic.click( function(){
  console.log("hello add view");
  addView.toggleClass("hidden");
  listView.toggleClass("hidden");
})

listMusic.click( function(){
  console.log("hello list view")
  listView.toggleClass("hidden")
  addView.toggleClass("hidden")
})

var button = $("#btn");

button.click( function() {
  var userSong = $("#userSong").val();
  var userArtist = $("#userArtist").val();
  var userAlbum = $("#userAlbum").val();
  var newSong = userSong + " by " + userArtist + " on the album " + userAlbum + ".";
  joinedSongs.push(newSong);
  addToDom(userSong, userArtist, userAlbum);
})





