const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d08ff880425144bb8d2bf082a55f6d7b';

// search input
let search = document.getElementById('search');
search.addEventListener('keypress', searchFunction);
function searchFunction(e){
    let searchKey = document.getElementById('search').value;
    if(e.which == 13){
        console.log(searchKey);
        if(searchKey != ''){
            let searchUrl = `https://newsapi.org/v2/everything?q=${searchKey}&apiKey=d08ff880425144bb8d2bf082a55f6d7b`;
            news(searchUrl);
            let display = '';
            document.getElementById('not-found').innerHTML = display;
        } if (searchKey == "asasdasdasdasd") {
            console.log('no');
            let display = '<p>No article was found based on the search.<p>';
            document.getElementById('not-found').innerHTML = display;
        }
        
        else {
            news(url);
        }
    }

}

// get news
async function news(url){
    const response = await fetch(url);
    const data = await response.json(); 
    console.log(data);
    let output = '';
    data.articles.forEach(item => {
        output += `
            <li class="article">
                <img class="article-img"  src="${item.urlToImage}">
                <h2 class="article-title">${item.title}</h2>
                <p class="-article-description">${item.content}</p>
                <span class="article-author"> - ${item.author}</span>
                <a class="article-link" href="${item.url}" target="_blank">Read more...</a>
            </li>
        `;
    });
    document.getElementById('news-articles').innerHTML = output;
}
news(url);