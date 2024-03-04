const PIC_URL = "https://api.waifu.pics/nsfw/blowjob";
const moreBtn = document.querySelector("#more-btn");

moreBtn.addEventListener("click", handleBtn);

async function getImage(link) {
  const response = await fetch(link);
  const body = await response.json();
  const { url } = body;
  return url;
}

function renderPic(imgUrl) {
  const image = document.createElement("img");
  image.setAttribute("src", imgUrl);
  const imageFrame = document.querySelector("#image-frame");

  image.addEventListener("load", () => {
    imageFrame.replaceChildren(image);
  });
}

async function loadPic() {
  document.querySelector("#image-frame").textContent = "Fetching food...";

  const aniPic = await getImage(PIC_URL);
  return aniPic;
}

const url = await loadPic();
renderPic(url);

function handleBtn() {
  location.reload();
}
