// Global Variables:
const serverURL = 'https://hw7eecs130.herokuapp.com/';
let activeCardID = -1
let appPhotos;
var photoComments = []
// functions:
const loadCardListView = (imagesFromServer) => {
    // save to a global variable so this data will be
    // accessible to the other functions:
    appPhotos = imagesFromServer;
    
    //clear out old cards (if there are any):
    document.querySelector('.cards').innerHTML = '';

    // create new ones (based on photos list)
    let i = 0;
    for (image of appPhotos) {
        const template = `
            <li class="card" data-index="${i}">
                <div class="image" style="background-image:url('${image.image_url}')"></div>
            </li>`;
        i++;
        document.querySelector('.cards').innerHTML += template;
    }
    attachEventHandlers();
};

const getImagesFromServer = () => {
    fetch(serverURL + 'photos')
        .then((response) => {
            return response.json();
        })
        .then(loadCardListView);
};

const getCurrentPhoto = () => {
    return appPhotos[activeCardID];
};

const loadCardDetailView = () => {
    const container = document.querySelector('.preview_box');
    const photoItem = getCurrentPhoto();
    const imageURL = `url("${photoItem.image_url}")`;
    container.querySelector('.featured_image').style.backgroundImage = imageURL;
    getComments(photoItem.id)
    container.querySelector('.caption').innerHTML = getPhotoDetailTemplate(photoItem, photoComments);
    
    // update CSS:
    container.classList.add('active');
    document.querySelector('main').style.overflow = 'hidden';
};

const showPhotoDetail = (e) => {
    activeCardID = parseInt(e.target.parentElement.getAttribute('data-index'));
    loadCardDetailView();
};
const showUserPhotos = (e) => {
    var url = 'photos'
    if (e.target.value != -1){
        url += '/?user_id=' + e.target.value;
    }
    fetch(serverURL + url)
    .then((response) => {
        return response.json();
    })
    .then(loadCardListView);
}
const formatDate = (date) => {
    date = new Date(date)
    return date.toDateString();
};

const getPhotoDetailTemplate = (photoItem, comments) => {
    console.log(photoItem);
    console.log(comments);
    let template = `
        <h2 class="title">${photoItem.title}</h2>
        <p class="handle">@${photoItem.username}</p>
        <p class="likes">Likes: ${photoItem.likes}</p>
        <p class="date">${formatDate(photoItem.date)}</p>
        <button value="${photoItem.id}" class="like_btn" onclick="addPhotoLikes(${photoItem.id}, ${photoItem.likes})">Like</button>`;
        // return template;
        if (comments.length == 0) {
        return template;
    }
    template += `
    <div class="comments">
        <h3>Comments</h3>
    </div>`;

};
const loadPhotoComments = (commentsFromServer) => {
    const photoId = getCurrentPhoto().id;
    var comments = []
    for (comment of commentsFromServer){
        if (comment.photo_id == photoId){
            comments.push(comment);
        }
    }
    photoComments =  comments;
    console.log(photoComments)
}

const getComments = (id) =>{
    const photoItem = getCurrentPhoto();
    fetch(serverURL + 'comments')
        .then((response) => {
            // console.log(response.json());
            return response.json();
        })
        .then(loadPhotoComments);
}
const hidePhoto = (e) => {
    const container = document.querySelector('.preview_box');
    container.classList.remove('active');
    document.querySelector('main').style.overflow = 'auto';
};

const showNextPhoto = (e) => {
    ++activeCardID;
    if (activeCardID >= appPhotos.length) { activeCardID = 0; }
    loadCardDetailView();
};

const showPreviousPhoto = (e) => {
    --activeCardID;
    if (activeCardID < 0) { activeCardID = appPhotos.length - 1; }
    loadCardDetailView();
};

const addPhotoLikes = (id, currlikes) => {
    url = serverURL + 'photos/' + id;
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "likes": currlikes + 1
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
const attachEventHandlers = () => {
    for (card of document.querySelectorAll('.image')) {
        card.onclick = showPhotoDetail;
    }
    document.querySelector('.close').onclick = hidePhoto;
    document.querySelector('.featured_image').onclick = showNextPhoto;
    // document.querySelector('.caption').onclick = showNextPhoto;
    document.querySelector('.next').onclick = showNextPhoto;
    document.querySelector('.prev').onclick = showPreviousPhoto;
    document.querySelector('#users').onchange = showUserPhotos;
};

const loadUserDropdown = (usersFromServer) => {
    // save to a global variable so this data will be
    // accessible to the other functions:
    appUsers = usersFromServer;
    
    //clear out old cards (if there are any):
    document.querySelector('#users').innerHTML = '';
    var all_users = `
    <option class="user" value="-1">Pick User</option>`;
    document.querySelector('#users').innerHTML += all_users;
    // create new ones (based on photos list)
    let i = 0;
    for (user of appUsers) {
        const template = `
            <option class="user" value="${user.id}">${user.username}</option>`;
        i++;
        document.querySelector('#users').innerHTML += template;
    }
    attachEventHandlers();
};

const getUsersFromServer = () => {
    fetch(serverURL + 'users')
        .then((response) => {
            return response.json();
        })
        .then(loadUserDropdown);
};

// Initialize
getImagesFromServer();
getUsersFromServer();