//Add List of Works
let listWorks = document.getElementById("listWork");
const categories = ["All", "UI", "UX", "Web Design"];

categories.forEach((category, index) => {
  let li = document.createElement("li");
  li.innerText = category;
  if (index == 0) {
    li.classList.add("active");
  }
  li.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    li.classList.add("active");

  });
  listWorks.appendChild(li);
});


//Add Image Works
let div = document.getElementById("img-works");
const images = [
  "images/works/work1.png",
  "images/works/work2.png",
  "images/works/work3.png",
];

images.forEach((image, index) => {
  let imgElement = document.createElement("img");
  imgElement.src = image;
  let divImg = document.createElement("div");
  divImg.classList.add("img-box");
  divImg.append(imgElement);
  div.appendChild(divImg);
});

