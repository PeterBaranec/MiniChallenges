import { playlistArr } from "/playlist.js";

function getPlaylistHtml(playlistArr) {
  const playlist = playlistArr
    .map(function (playlist) {
      return `
<section class="card">
    <div class="card-start">
        <img src="/images/${playlist.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${playlist.title}</h4>
            <p class="card-artist">${playlist.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
        `;
    })
    .join("");
  return playlist;
}

document.getElementById("container").innerHTML = getPlaylistHtml(playlistArr);
