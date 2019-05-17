const search = (ev) => {
    var q = document.querySelector('input').value;
    let url = 'https://www.apitutor.org/youtube/simple/?q=' + q + '&type=video';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data)
    temp = ""
    for (var i = 0; i<data.length; i++)
    {
        temp += '<div class="video">'
        src = 'http://img.youtube.com/vi/' + data[i]['videoId'] + '/default.jpg'
        temp += '<a href=' + data[i]['url'] + '><img src =' + src +'></a>'
        temp += '<p>' + data[i]['title'] +'</p>'
        temp += '</div>'
    }
    document.querySelector('#output').innerHTML = temp;
};
    
document.querySelector('#search').onclick = search;