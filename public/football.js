let humbuger = document.querySelector('.hummbuger');
let body = document.querySelector(".body")
let left = document.querySelector('.left_section');
let right = document.querySelector('.Right_section');
let nav = document.querySelector(".rr")

document.addEventListener("DOMContentLoaded", function () {


    humbuger.addEventListener("click", () => {
        nav.classList.toggle("activate")
        humbuger.classList.toggle("activate")

    })

    let Api_key = "2d5671fc4eb54394ac7f3d4c6ae110a1";

    //RIGHT SECTION 
    let Football = " https://newsapi.org/v2/everything?q=football&apikey="
    let cake = " https://newsapi.org/v2/everything?q=cake&apikey="

    const Main_section = async () => {
        const response = await fetch(Football + Api_key)
        Football_array = []

        const data = await response.json()

        if (data.status === "ok") {
            Football_array = data.articles
            Business_left_section_function()
        } else {
            console.log(data.status)
        }

        // Cake function
        const cake_response = await fetch(cake + Api_key)
        cake_array = []

        const cake_data = await cake_response.json()

        if (cake_data.status === "ok") {
            cake_array = cake_data.articles
            cake_function()
        } else {
            console.log(cake_data.status)
        }
    }

    Main_section()

    let Business_left_section_div = document.querySelector(".Business_left_section");

    const Business_left_section_function = () => {
        let data = '';
        Football_array.forEach((Element, index) => {

            if (index < 40) {
                data += `
            <a href="/news/${encodeURIComponent(Element.url)}/${encodeURIComponent(Element.urlToImage)}">
            <div class="business_news">
            <div class="business_news_img">
                <img src="${Element.urlToImage}" alt="football">
            </div>
            <div class="business_news_des">
                <div class="business_news_headline">
                    <p>${Element.title}</p>
                </div>
                <div class="business_news_short">
                   ${Element.description}
                </div>
            </div>
        </div>
        `
            }
            return
        })

        Business_left_section_div.innerHTML = data;

    }




    let recent_post_div = document.querySelector('.recent_post');

    const cake_function = () => {
        let data = '';
        cake_array.forEach((Element, index) => {

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
        recent_post_div.innerHTML = data;

    }
})


