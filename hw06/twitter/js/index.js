const search = (ev) => {
    searchval = document.querySelector('input').value;
    let url = 'https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=' + searchval;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    // console.log(data);
    // clean_data = JSON.stringify(data, ['screen_name', 'text'], '\t');
    clean_data = data;
    temp = ""
    for (var i = 0; i<clean_data.length; i++)
    {
        temp += '<div class="tweet">'
        temp += '<h2>' + data[i]['screen_name'] +'</h2>'
        temp += '<p>' + data[i]['text'] +'</p>'
        temp += '</div>'
    }
    document.querySelector('#output').innerHTML = temp;
    // document.querySelector('#output').innerHTML = JSON.stringify(data, ['screen_name', 'text'], 4);
};
    
document.querySelector('#search').onclick = search;