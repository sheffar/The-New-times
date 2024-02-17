// the nav bar styling
let humbuger = document.querySelector('.hummbuger');
let nav = document.querySelector(".rr")

humbuger.addEventListener("click", () => {
    nav.classList.toggle("activate")
    humbuger.classList.toggle("activate")

})

document.addEventListener("DOMContentLoaded", function () {



    const imageElement = document.querySelector(".cart_image");
    const contentElement = document.querySelector(".drops_here");

    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const image = decodeURIComponent(urlParams.get("image"));
    const title = decodeURIComponent(urlParams.get("conten"));

    // Set the image and content in the cart.html page
    imageElement.setAttribute("src", image);
    contentElement.textContent = title;


});







let Api_key = "a705e358dc5f4d18a1f4b6c3459800ed";
let covid = " https://newsapi.org/v2/everything?q=covid&apikey="



let con = document.querySelector(".display_right_section")
const getdata = async () => {
    dataArr = []
    const response = await fetch(covid + Api_key)
    const data2 = await response.json()

    dataArr.push(data2)

    console.log(dataArr)
    displayData()

}
getdata()



let data1 = ""
const displayData = () => {
    dataArr.forEach((element) => {
        data1 += `
        <div class="Right_section_box">
            <div class="Right_section_img">
                <img src="${element.urlToImage}">
            </div>
            <div class="Right_section_des">
                <p>${element.title}</p>
                <p class="Right_section_img_date">${element.publishedAt}</p>
            </div>
        </div>
        `
    });
    con.innerHTML = data1;
}

// ADDING COMMENT BELOW THE NEWS
const addcomment = () => {
    let username = document.querySelector(".name_input").value;
    let comment = document.querySelector(".comment_field").value;
    if (username === "") {
        console.log("please input your name")
    } if (comment === "") {
        console.log("plaese type in your comment before clicking on")

    } else {
        console.log("i clciked")
        // create new element
        let NewDiv = document.createElement("div")
        NewDiv.classList.add("comment")
        // create element for new and comment

        let nameElement = document.createElement("h4");
        nameElement.textContent = username;
        nameElement.classList.add("nameElement")
        console.log(nameElement)
        let commentElement = document.createElement("p");
        commentElement.classList.add("commentElement")
        commentElement.textContent = comment;

        // Append name and comment elements to the comment container
        NewDiv.appendChild(nameElement);
        NewDiv.appendChild(commentElement);
        // Get the comments section and insert the new comment container at the beginning
        let commentsSection = document.getElementById("comments");
        commentsSection.insertBefore(NewDiv, commentsSection.firstChild);
        // console.log(commentsSection.innerHTML)
        // Clear the input fields after adding the comment
        document.querySelector(".name_input").value = "";
        document.querySelector(".comment_field").value = "";
    }
}


