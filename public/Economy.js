let humbuger = document.querySelector('.hummbuger');
let nav = document.querySelector(".rr")
// let body = document.querySelector(".body")
document.addEventListener("DOMContentLoaded", function () {
humbuger.addEventListener("click", () => {
    nav.classList.toggle("activate")
    humbuger.classList.toggle("activate")
});

// API AND THE KEY

let Api_key = "2d5671fc4eb54394ac7f3d4c6ae110a1";
let Economy = " https://newsapi.org/v2/everything?q=business&apikey="
let Movies = " https://newsapi.org/v2/everything?q=cars&apikey="

let Economy_array = []
let Movie_array = []

const The_call = async () => {
    const Economy_call = await fetch(Economy + Api_key);
    const data = await Economy_call.json();
    // console.log(data)
    if (data.status === "ok") {
        Economy_array = data.articles;
        // console.log(Economy_array);
        Economy_function()
    } else {
        console.log(data.status)
    }

    const Movie_call = await fetch(Movies + Api_key);
    const Movie_data = await Movie_call.json();

    if(Movie_data.status === "ok"){
        Movie_array = Movie_data.articles;
        Movie_function()
    }else{
        console.log(Movie_data);
    }


}
The_call()


let Economy_element = document.querySelector('.Business_left_section');

const Economy_function = () => {
    console.log(Economy_array);

    let data = '';
    Economy_array.forEach((Element, index) => {
            if (index < 40) {
            data += `
            <a href="/news/${encodeURIComponent(Element.url)}/${encodeURIComponent(Element.urlToImage)}">
            <div class="business_news">
            
            <div class="business_news_img">
                <img src="${Element.urlToImage}" alt="Economy_news">
            </div>
            <div class="business_news_des">
                <div class="business_news_headline">
                    <p>${Element.title}</p>
                </div>
            </div>
        </div>
        `
    }
    return
        })

    Economy_element.innerHTML = data;


}




let recent_div = document.querySelector('.recent_post')

const Movie_function = () => {
    // console.log(Economy_array);

    let data = '';
    Movie_array.forEach((Element, index) => {
        console.log(Movie_array);

            if (index < 40) {
            data += `
            <a href="/news/${encodeURIComponent(Element.url)}/${encodeURIComponent(Element.urlToImage)}">
            <div class="The_post_box">
             <div class="The_post_img">
             <img src="${Element.urlToImage}" alt="Finance">
             </div>
             <div class="The_post_des">
             <p>${Element.title}</p>
                 </div>
              </div>
        `
    }
    return
        })

        recent_div.innerHTML = data;


}




});
