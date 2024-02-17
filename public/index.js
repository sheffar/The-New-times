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
    let General = " https://newsapi.org/v2/everything?q=Recent&apikey="
    let tech = " https://newsapi.org/v2/everything?q=Technology&apikey="
    let business = " https://newsapi.org/v2/everything?q=Business&apikey="
    let cars = " https://newsapi.org/v2/everything?q=cars&apikey="
    let Football = " https://newsapi.org/v2/everything?q=football&apikey="
    let Finance = " https://newsapi.org/v2/everything?q=finance&apikey="
    let sport_text = " https://newsapi.org/v2/everything?q=sport&apikey="
    let scholarship = " https://newsapi.org/v2/everything?q=scholarship&apikey="


    const RecentNews = async () => {
            const response = await fetch(General + Api_key);
            Recent_array = []
            const data = await response.json();
            // console.log(data)
            if (data.status === "ok") {
                Recent_array = data.articles;
                Recent()
            } else {
                console.log(data.status)
            }

            // TECHNONOGY
            const tech_response = await fetch(tech + Api_key);
            Tech_arry = []
            const Tech_json = await tech_response.json()
            // console.log(Tech_json)
            if (Tech_json.status === "ok") {
                Tech_arry = Tech_json.articles;
                Technology_func()
            } else {
                console.log(Tech_json.status)
            }
            // BUSINESS
            const business_response = await fetch(business + Api_key);
            business_array = []
            const Business_json = await business_response.json()

            if (Business_json.status === "ok") {
                business_array = Business_json.articles
                Business_func()
            } else {
                console.log(Business_json.status)
            }
            // cars

            const cars_response = await fetch(cars + Api_key)
            cars_array = []

            const cars_json = await cars_response.json()
            if (cars_json.status === "ok") {
                cars_array = cars_json.articles;
                cars_fun()

            } else {
                console.log(cars_json.status)
            }


            // FINANCE
            Finance_array = []
            const finance_response = await fetch(Finance + Api_key)
            const Finance_json = await finance_response.json()
            // console.log("cars response"+ finance_response)    
            if (Finance_json.status === "ok") {
                Finance_array = Finance_json.articles
                Finance_function()


            } else {
                console.log(Finance_json.status)
            }

        // FOOTBALL
        Football_array = []
        const Football_response = await fetch(Football + Api_key)
        const Football_json = await Football_response.json()
        if (Football_json.status === "ok") {
            Football_array = Football_json.articles;

            Football_function()


        } else {
            console.log(Football_json.status)
        }
        // sport_text
        sport_text_array = []
        const sport_response = await fetch(sport_text + Api_key)
        const sport_json = await sport_response.json()
        if (sport_json.status === "ok") {
            sport_text_array = sport_json.articles;

            sport_text_function()


        } else {
            console.log(sport_json.status)
        }

        // scholarship 

        scholarship_array = []


        const scholarship_response = await fetch(scholarship + Api_key)
        const scholarship_json = await scholarship_response.json()
        if (scholarship_json.status === "ok") {
            scholarship_array = scholarship_json.articles;

           
            console.log(scholarship_json);
            scholarship_function()



        } else {
            console.log(scholarship_json.status)
        }
    }
    RecentNews()
})


const Recent = () => {
    data1 = ""
    Recent_array.forEach((elem) => {

        data1 = `
        
        <div class="left_section_sub">
        <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">

                    <div class="left_section_img">
                        <img src="${elem.urlToImage}">
                    </div>
                    <div class="Left_section_dec">
                        <p>${elem.title}</p>
                    </div>
                </div>
        `
    })
    left.innerHTML = data1;

}



const Technology_func = () => {
    let data = "";
    Tech_arry.forEach((element, index) => {
        // console.log(element)
        if (index < 4) {
            // const shortenedDescription = element.description.slice(0, 100);

            data += `
            
            <div class="Right_section_box">
            
            <div class="Right_section_img">
            <a href="/news/${encodeURIComponent(element.url)}/${encodeURIComponent(element.urlToImage)}">
                        <img src="${element.urlToImage}">
                    </div>
                    <div class="Right_section_des">
                        <p>${element.title}</p>
                        <p class="Right_section_img_date">${element.publishedAt}</p>
                    </div>
            </div>
    `
        }
        return
    })
    // )
    right.innerHTML = data;
}

let Business = document.querySelector("#business")

let business_data = "";

const Business_func = () => {
    business_array.forEach((elm, index) => {
        // const short = elm.descr
        if (index < 5) {
            business_data += `
        
        <a href="/news/${encodeURIComponent(elm.url)}/${encodeURIComponent(elm.urlToImage)}">
        <div class="The_news_box"> 
        <div class="The_news_img">
        <img src="${elm.urlToImage}" alt="Business">
        </div>
        <div class="The_news_des">
            <p>${elm.title}</p>
        </div>
    </div>
        `
        }
        return
    })
    Business.innerHTML = business_data
}
let car = document.querySelector("#cars")
let car_data = "";


const cars_fun = () => {
    cars_array.forEach((elm, index) => {
        if (index < 5) {

            car_data += `
        
        <a href="/news/${encodeURIComponent(elm.url)}/${encodeURIComponent(elm.urlToImage)}">
        <div class="The_news_box">
        <div class="The_news_img">
            <img src="${elm.urlToImage}" alt="car">
        </div>
        <div class="The_news_des">
            <p>${elm.title}</p>
        </div>
    </div>
        `
        }
        return
    })
    car.innerHTML = car_data;
}

let Finance = document.querySelector("#Finance")
console.log(Finance);

let Finance_data = ""

const Finance_function = () => {
    // console.log(Working);
    Finance_array.forEach((elm, index) => {
        // console.log(elm)
        if (index < 5) {

            Finance_data += `
        
         <a href="/news/${encodeURIComponent(elm.url)}/${encodeURIComponent(elm.urlToImage)}">
        <div class="The_news_box">
        <div class="The_news_img">
        <img src="${elm.urlToImage}" alt="Finance">
        </div>
        <div class="The_news_des">
         <p>${elm.title}</p>
        </div>
        </div>
        `
        }
        return
    })
    Finance.innerHTML = Finance_data;
}


let Football_div = document.querySelector(".sport_view");
// console.log(Football_div);

const Football_function = () => {

    data1 = ""
    Football_array.forEach((elem) => {
        data1 = `
        <div class="sport_sub">
        <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">
        <div class="sport_view_img">
            <img src="${elem.urlToImage}" alt="sport">
        </div>
        <div class="sport_view_title">
            <p>${elem.title}</p>
            <p class="date">${elem.publishedAt}</p>
        </div>
    </div>
        `
    })
    Football_div.innerHTML = data1;

}

let sport_text_div = document.querySelector('.sport_text');

const sport_text_function = () => {

    data1 = ""
    sport_text_array.forEach((elem, index) => {
        if (index < 6) {

            data1 += `
            <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">
            <p class="written">${">" + elem.title}</p>
            `
        }
        return
    })
    sport_text_div.innerHTML = data1;

}

let scholarship_div = document.querySelector(".scholarship_div");

const scholarship_function = () => {
    let data1 = ""

    data1 += ""
    scholarship_array.forEach((elem, index) => {
        // const [text] = scholarship_array;
        // const {title} = text;
        // console.log(title);
        if (index < 21) {

            data1 += `
            <a href="/news/${encodeURIComponent(elem.url)}/${encodeURIComponent(elem.urlToImage)}">
            
            <div class="scholar_sub">
            <div class="scholar_img_div">
            <img src="${elem.urlToImage}" alt="scholarship"> 
            </div>
            <div class="scholar_title_div">
                <p>${elem.title}</p>
                <div class="scholar_title_sub">
                    <p>${elem.author}</p>
                    <p>${elem.publishedAt}</p>
                </div>
            </div>
        </div>
            `
        }
        return
    })
    scholarship_div.innerHTML = data1;

}