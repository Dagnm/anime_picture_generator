const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const nameEl = document.querySelector(".animae-name");

btnEl.addEventListener("click", async function () {
  try {
   btnEl.disabled=true;
   btnEl.innerText="Loading...";
nameEl.innerText="Updating...";
animeImgEl.src="spinner.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
btnEl.disabled=false;
btnEl.innerText= 'Get Anime';
    animeContainerEl.style.display = "block";
    animeImgEl.src=data.url;
    nameEl.innerText=data.artist;
  } catch (error) {
   animeImgEl.style.display='none';
   btnEl.disabled=false;
   btnEl.innerText= 'Get Anime';
   nameEl.innerText="An error  happended please try again";
  }
});
