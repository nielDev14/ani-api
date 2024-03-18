
const PIC_URL = `https://api.waifu.im/search?included_tags=${randomTag()}&is_nsfw=null&gif=false`;
console.log(PIC_URL)
const moreBtn = document.querySelector("#more-btn");
moreBtn.addEventListener("click", handleBtn);

async function getImage(link) {
  const response = await fetch(link);
  const body = await response.json();
  let url = body.images[0].url;
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
  let img = document.createElement('img');
  img.src = "./assets/loading.svg";
  document.querySelector("#image-frame").appendChild(img);

  const aniPic = await getImage(PIC_URL);
  return aniPic;
}

const url = await loadPic();
renderPic(url);

function handleBtn() {
  location.reload();
}

function randomTag() {
  const tags = ["ass", "hentai", "milf", "oral", "paizuri", "ecchi", "ero"]
  
  const randomTag = tags[Math.floor(Math.random() * tags.length)]
  
  return randomTag
  
}