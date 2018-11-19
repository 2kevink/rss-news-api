var button=document.getElementsByClassName("button")[0];
button.addEventListener("click", addNews);



function addNews() {
    fetch (`https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-19&sortBy=publishedAt&apiKey=f9bfb113ae594a8ea1429c683015b981`)
    .then((res)=> res.json())
    .then(res=> {
        console.log(res)
        let arr=[];
        for (let i of res.articles){
            arr.push({'title': i.title, 'content': i.content || i.description})
        }
        
        renderNews(arr)
    })
}

function renderNews(somearr) {
    let container = document.querySelector('.news');

    for (let article of somearr) {
        container.innerHTML += `
            <section class="news-block">
                <header class="news-desc">${article.title}</header>
                <p class="news-text">${article.content}</p>
            </section>
        `
    }
}