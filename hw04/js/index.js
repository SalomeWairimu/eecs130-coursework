var curr_image = ""
const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    const clickedElement = e.target;
    // figure out what its background image is:
    const imgURL = clickedElement.style.backgroundImage;
    console.log(imgURL);
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
    var feat_img = document.querySelector('.featured_image');
    feat_img.style.backgroundImage = imgURL;
    document.querySelector('.preview_box').classList.add("active");
    curr_image = clickedElement;
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
// document.querySelector('.card').onclick = showPhoto;
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}



// PART 3: Close functionality
// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.
// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).
const close = (e) => {
    document.querySelector('.preview_box').classList.remove("active");
    curr_image = "";
}

document.querySelector('.close').onclick = close;

// PART 4: Next functionality:
// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = (e) =>{
    var next_elem_div = curr_image.parentElement.nextElementSibling;
    if (next_elem_div == null)
    {
        var parent = document.querySelector('.cards');
        next_elem_div = parent.children[0];
    }
    const next_elem = next_elem_div.children[0];
    const imgURL = next_elem.style.backgroundImage;
    var feat_img = document.querySelector('.featured_image');
    feat_img.style.backgroundImage = imgURL;
    document.querySelector('.preview_box').classList.add("active");
    curr_image = next_elem;
}
document.querySelector('.next').onclick = next;

// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
const prev = (e) =>{
    var prev_elem_div = curr_image.parentElement.previousElementSibling;
    if (prev_elem_div == null)
    {
        var parent = document.querySelector('.cards');
        prev_elem_div = parent.children[((parent.children).length -1)];
    }
    const prev_elem = prev_elem_div.children[0]
    const imgURL = prev_elem.style.backgroundImage;
    var feat_img = document.querySelector('.featured_image');
    feat_img.style.backgroundImage = imgURL;
    document.querySelector('.preview_box').classList.add("active");
    curr_image = prev_elem;
}
document.querySelector('.prev').onclick = prev;

// setinterval functionality:
const moveCarousel = (e) =>{
    next();
}

setInterval(function() {
    if (document.querySelector('.preview_box').classList.contains("active"))
    {
        moveCarousel();
    }
},3000);

// new image functionality:

const newImg = (e) =>{
    var url = prompt("Please enter image url e.g.: https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg");
    var node = document.createElement("li");
    node.className = "card";
    var inner = document.createElement("div");
    inner.className = "image";
    inner.style.backgroundImage = 'url(' + url + ')';
    node.appendChild(inner);
    var cards = document.querySelector('.cards');
    cards.appendChild(node);
}

document.querySelector('.new').onclick = newImg;

// increase thumbnail width:

const incWidth = (e) =>{
    const cards = document.querySelectorAll('.card');
    for (card of cards) {
        card.style.width = e;
    }
}

const callWidthFunc = (e) =>{
    const clickedElement = e.target;
    var size = clickedElement.className.split(' ')[1];
    incWidth(size);
    
}
const widthbtns = document.querySelectorAll('.width');
for (widthbtn of widthbtns) {
    widthbtn.onclick = callWidthFunc;
}

// increase thumbnail height:

const incHeight = (e) =>{
    const cards = document.querySelectorAll('.card');
    for (card of cards) {
        card.style.height = e;
    }
}

const callHeightFunc = (e) =>{
    const clickedElement = e.target;
    var size = clickedElement.className.split(' ')[1];
    incHeight(size);
    
}
const heightbtns = document.querySelectorAll('.height');
for (heightbtn of heightbtns) {
    heightbtn.onclick = callHeightFunc;
}