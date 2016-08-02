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
    songs = joinedSongs;
  }
    console.log(songs)
}

var songDetails = function () {

}

var addToDom = function () {
  for (var i = 0; i < songs.length; i++) {
  document.getElementById("song-container").innerHTML = `
    <div class="song">
        <h1>${joinedSongs[i]}</h1>
          <div class="details">
            <h2>Steely Dan</h2>
            <h2>Countdown to Ecstasy</h2>
            <h2>Yacht Rock</h2>
          </div>
      </div>`
  }
}

var fireEvents = function () {
  stringify();
  replaceChar();
  joinify();
  addToDom();
}
fireEvents();

console.log(songs);






