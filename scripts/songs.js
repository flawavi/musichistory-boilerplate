"use strict";

var songBank = (function () {
  var favoriteSongs = [];
  var songsJSON;
  var moreSongsJSON;

  return {
    getFavoriteSongs: function (songsJSON) {
      console.log(songsJSON);
      var container = $("#song-container");
      songsJSON.forEach(function(songs) {
        container.append(`
    <div id="${songs.name.replace(/\s/g, "")}" class="song">
        <h1>${songs.name}</h1>
          <div class="details">
            <h2>${songs.artist}</h2>
            <h2>${songs.album}</h2>
            <h2>${songs.genre}</h2><button id="deleteButton" class="btn">Say Bye Bye</button>
          </div>
      </div>`)
      });
    },
      loadFavoriteSongs: function(cb){
        $.getJSON("more-songs.json", function (res) {
        moreSongsJSON = res.songs;
        cb(moreSongsJSON)
        });
      },
      loadMoreFavoriteSongs: function(cb){
        $.getJSON("songs.json", function (res) {
        songsJSON = res.songs;
        cb(songsJSON)
        });
      }
    }


})(songBank || {});


songBank.loadFavoriteSongs(songBank.getFavoriteSongs)
$("#song-container").click(function(evt){
  if (evt.target.id === "deleteButton") {
    evt.target.closest('.song').remove()
  }
})

var moreSongsBtn = $("#moreSongsBtn");
moreSongsBtn.click(function () {
  songBank.loadMoreFavoriteSongs(songBank.getFavoriteSongs)
})




var songs = [];
var stringSong = [];
var joinedSongs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Your Gold Teeth > by Steely Dan on the album Countdown to Ecstasy");
songs.push("Naive Melody [This Must be the Place] > by Talking Heads on the album Speaking in Tonuges");

var stringify = function () {
  for (var i = 0; i < songs.length; i++) {
    stringSong.push(songs[i].split(""));
  }
  return stringSong
}

var replaceChar = function () {
  for (var i = 0; i < stringSong.length; i++) {
    for (var j = 0; j < stringSong[i].length; j++) {
      if (stringSong[i][j] === ">") {
        stringSong[i][j] = "-"
      }else if
        (stringSong[i][j] === "*" ||
        stringSong[i][j] ===  "@" ||
        stringSong[i][j] ===  "!" ||
        stringSong[i][j] ===  ")" ||
        stringSong[i][j] ===  "(")
        {
        stringSong[i][j] = "";
      }
    }
  }
  return stringSong
}

var joinify = function () {
  for (var i = 0; i < stringSong.length; i++) {
    joinedSongs.unshift(stringSong[i].join(""));
  }
    console.log(joinedSongs)
}

var addToDom = function (song, artist, album) {
  for (var i = 0; i < songs.length; i++) {
  $("#song-container").append(`
    <div class="song">
        <h1>${song}</h1>
          <div class="details">
            <h2>${artist}</h2>
            <h2>${album}</h2>
            <h2>Genre</h2>
          </div>
      </div>`)

      $("#userSong").val() = ""
      $("#userArtist").val() = "";
      $("#userAlbum").val() = "";


  }
}

var songDetails = function () {
  joinedSongs.forEach(function(song){

    var songName = song.slice(0, song.indexOf("-")-1);
    var artistName = song.slice(song.indexOf("by")+3, song.indexOf("on the album"));
    var albumName = song.slice(song.indexOf("album")+6);

    addToDom(songName, artistName, albumName);
  })
}

songDetails()
var fireEvents = function () {
  stringify();
  replaceChar();
  joinify();
  songDetails();
}
fireEvents();

console.log(songs);







