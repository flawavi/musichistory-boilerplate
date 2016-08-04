var songBank = (function () {
  var favoriteSongs = [];

  return {
    getFavoriteSongs: function () {
      var container = document.querySelector("#song-container")
      songsJSON.forEach(function(songs) {
        container.innerHTML += `
    <div id="${songs.name.replace(/\s/g, "")}" class="song">
        <h1>${songs.name}</h1>
          <div class="details">
            <h2>${songs.artist}</h2>
            <h2>${songs.album}</h2>
            <h2>${songs.genre}</h2><button id="deleteButton" class="btn">Say Bye Bye</button>
          </div>
      </div>`
      })
    },
    loadFavoriteSongs: function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "songs.json");
      xhr.addEventListener("load", function (evt) {
        songsJSON = JSON.parse(evt.target.responseText).songs;
        callback(favoriteSongs);
      });
      xhr.send();
    },
    loadMoreFavoriteSongs: function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "more-songs.json");
      xhr.addEventListener("load", function (evt) {
        songsJSON = JSON.parse(evt.target.responseText).songs;
        callback(favoriteSongs);
      });
      xhr.send();
    }

  };


})(songBank || {});


songBank.loadFavoriteSongs(songBank.getFavoriteSongs)
document.querySelector("#song-container").addEventListener("click", function(evt){

  if (evt.target.id === "deleteButton") {
    evt.target.closest('.song').remove()
  }
})

var moreSongsBtn = document.getElementById("moreSongsBtn");
moreSongsBtn.addEventListener("click", function () {
  songBank.loadMoreFavoriteSongs(songBank.getFavoriteSongs)
})




// var songs = [];
// var stringSong = [];
// var joinedSongs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs.unshift("Your Gold Teeth > by Steely Dan on the album Countdown to Ecstasy");
// songs.push("Naive Melody [This Must be the Place] > by Talking Heads on the album Speaking in Tonuges");

// var stringify = function () {
//   for (var i = 0; i < songs.length; i++) {
//     stringSong.push(songs[i].split(""));
//   }
//   return stringSong
// }

// var replaceChar = function () {
//   for (var i = 0; i < stringSong.length; i++) {
//     for (var j = 0; j < stringSong[i].length; j++) {
//       if (stringSong[i][j] === ">") {
//         stringSong[i][j] = "-"
//       }else if
//         (stringSong[i][j] === "*" ||
//         stringSong[i][j] ===  "@" ||
//         stringSong[i][j] ===  "!" ||
//         stringSong[i][j] ===  ")" ||
//         stringSong[i][j] ===  "(")
//         {
//         stringSong[i][j] = "";
//       }
//     }
//   }
//   return stringSong
// }

// var joinify = function () {
//   for (var i = 0; i < stringSong.length; i++) {
//     joinedSongs.unshift(stringSong[i].join(""));
//   }
//     console.log(songs)
// }

// var addToDom = function (song, artist, album) {
//   // for (var i = 0; i < songs.length; i++) {
//   document.getElementById("song-container").innerHTML += `
//     <div class="song">
//         <h1>${song}</h1>
//           <div class="details">
//             <h2>${artist}</h2>
//             <h2>${album}</h2>
//             <h2>Genre</h2>
//           </div>
//       </div>`

//       document.getElementById("userSong").value = ""
//       document.getElementById("userArtist").value = "";
//       document.getElementById("userAlbum").value = "";


//   // }
// }

// var songDetails = function () {
//   joinedSongs.forEach(function(test){

//     var songName = test.slice(0, test.indexOf("-")-1);
//     var artistName = test.slice(test.indexOf("by")+3, test.indexOf("on the album"));
//     var albumName = test.slice(test.indexOf("album")+6);

//     addToDom(songName, artistName, albumName);
//   })
// }


// var fireEvents = function () {
//   stringify();
//   replaceChar();
//   joinify();
//   songDetails();
// }
// fireEvents();

// console.log(songs);







