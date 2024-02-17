let humbuger = document.querySelector('.hummbuger');
let nav = document.querySelector(".rr")
// let body = document.querySelector(".body")

humbuger.addEventListener("click", () => {
    nav.classList.toggle("activate")
    humbuger.classList.toggle("activate")
})

let Api_key = "2d5671fc4eb54394ac7f3d4c6ae110a1";
let business = " https://newsapi.org/v2/everything?q=Business&apikey="
let cake = " https://newsapi.org/v2/everything?q=cake&apikey="


let Business_array = []
let cake_array = []

const The_call = async () => {
    const Business_call = await fetch(business + Api_key);
    const data = await Business_call.json();
    // console.log(data)
    if (data.status === "ok") {
        Business_array = data.articles;
        console.log(Business_array);
        Business_function_right()
    } else {
        console.log(data.status)
    }


  // Cake function
        const cake_response = await fetch(cake + Api_key)

        const cake_data = await cake_response.json()

        if (cake_data.status === "ok") {
            cake_array = cake_data.articles
            console.log(cake_array);
            Business_function()
        } else {
            console.log(cake_data.status)
        }


}
The_call()

let business_right = document.querySelector(".Business_left_section")


const Business_function_right = () => {

    let Business_data = ""
    Business_array.forEach((elem, index) => {
        if (index < 10){
        Business_data += `
        <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">
        
        <div class="business_news">
         <div class="business_news_img">
           <img src="${elem.urlToImage}" alt="Business_news">
         </div>
         <div class="business_news_des">
         <div class="business_news_headline">
           <p>${elem.title}</p>
         </div>
          <div class="business_news_short">
             ${elem.description}
          </div>
          </div>
         </div>
                   
        `
    }
    return
    })
    business_right.innerHTML = Business_data;
}



let recent_post = document.querySelector(".recent_post")

const Business_function = () => {

    let Business_data = ""
    cake_array.forEach((elem, index) => {
        if (index < 40){
        Business_data += `
        <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">
        <div class="The_post_box">
            <div class="The_post_img">
              <img src="${elem.urlToImage}" alt="Business">
         </div>
         <div class="The_post_des">
          <p>${elem.title}</p>
       </div>
        </div>
        `
    }
    return
    })
    recent_post.innerHTML = Business_data;
}



