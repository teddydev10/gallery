// import {galleryImgs} from "./imgs";
const galleryImgs = [{
    "cinema": ["1","2","3","4","5"]
},{
    "photo": ["","","",""]
},{
    "sport": ["","","","",""]
},{
    "music": ["","","",""]
},{
    "travel": ["","","","","",""]
},{
    "cuisine": ["https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80",
    "https://images.unsplash.com/photo-1578937014093-1af355e09c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1561669043-e2bd7a5a211c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1561560648-792dceba104d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80",
    ""]
}];

const moveActive = () => {
    const lis = document.querySelectorAll(".interest_container-list li");
    const liArray = [...lis];

    liArray.map(li => {
        li.addEventListener("click", function(){
            const firstChild = document.querySelector(".active > :first-child");
            liArray.map(li => {
                li.classList.remove("active");
            });

            this.classList.add("active");
            console.log(this.dataset)
            firstChild.style.backgroundColor = this.dataset.color;
            firstChild.style.color = this.dataset.color;
            const activity = galleryImgs.filter( el => Object.keys(el)[0] === this.dataset.activity);
            displayImgs(activity[0]);
        })
    })
}

const displayImgs = (imgArr = Object.values(galleryImgs)[0]) => {
        const ul = document.querySelector(".gallery ul");
        ul.innerHTML = "";
        Object.values(imgArr)[0].map(() => createElements("li","","",".gallery ul"));

        const galleryCurrentLis = document.querySelectorAll(".gallery ul li");
        const liArr = [...galleryCurrentLis];

        liArr.map( (el,index) => createElements("img","images",Object.values(imgArr)[0][index],el))
}

const createElements = (newElement,newClass,src,divParent) => {
    let appendDiv;
    const elementHtml = document.createElement(newElement);
    newClass !== "" && elementHtml.classList.add(newClass);
    src !== "" ? elementHtml.setAttribute("src",src) : "";

    typeof divParent === "object" ? appendDiv = divParent : appendDiv = document.querySelector(divParent);

    appendDiv.appendChild(elementHtml);
}



displayImgs();
moveActive();

