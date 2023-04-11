
document.getElementById("top-nav-bar").innerHTML = `

<div id="top-nav-bar-upper-box">
<p> Dream House</p>
<p> Dream House & Kids</p>
<p>Hindustan | Bhilai</p>
<img src="./logo/Flag_of_India.svg.png" alt="Indian Flag">
<button id="admin">Admin</button>

</div>

<div id="top-nav-bar-middle-box">
    <div id="top-nav-bar-middle-box-1">
        <div>
            <input type="text" placeholder="What can we help you find?">
        </div>
        <div>
            <button onclick="prod()">Products</button>
        </div>
        <div>
            <img src="./logo/Dream House.png" alt="logo" id="logo">
        </div>
        <div>
            <p id="display">Orders & Sign in</p>
            <img src="./logo/add-contact.png" alt="contact" id="login_popup">
            <img src="./logo/location.png" alt="location">
            <img src="./logo/heart.png" alt="wishlist">
            <img src="./logo/shopping-cart.png" alt="cart" id="cart">
        </div>
    </div>
        <div id="top-nav-bar-middle-box-2">
            <p>WEDDING REGISTRY</p>
            <p>FREE DESIGN SERVICE</p>
            <p>TRADE PROGRAM</p>
            <p>WHAT'S NEW</p>
            <p>COLLABORATIONS</p>
            <p>IN-STOCK</p>
            <p>HOLIDAYS</p>
        </div>
</div>

<div id="top-nav-bar-bottom-box">
    <div class="top-nav-bar-bottom-box-text">Furniture</div>
    <div class="top-nav-bar-bottom-box-text">Outdoor</div>
    <div class="top-nav-bar-bottom-box-text">Tabletop & Bar</div>
    <div class="top-nav-bar-bottom-box-text">Kitchen</div>
    <div class="top-nav-bar-bottom-box-text">Decor & Pillows</div>
    <div class="top-nav-bar-bottom-box-text">Rugs</div>
    <div class="top-nav-bar-bottom-box-text">Lighting</div>
    <div class="top-nav-bar-bottom-box-text">Window</div>
    <div class="top-nav-bar-bottom-box-text">Bedding & Bath</div>
    <div class="top-nav-bar-bottom-box-text">Gifts</div>
    <div class="top-nav-bar-bottom-box-text">Sale</div>
    <div class="top-nav-bar-bottom-box-text">Kids</div>
</div>
<div id="top-nav-bar-bottom-box-hover-body"></div>


`
function prod(){
    window.location.href = "products.html";
}

//-------------------- redirect to home page if logo is clicked-------------------

document.querySelector("#logo").addEventListener("click", () => {
    window.location.href = "index.html";
})

//-------------------- redirect to login page if contact logo is clicked-------------------

document.querySelector("#login_popup").addEventListener("click", () => {
    window.location.href = "login.html"
})

//-------------------- redirect to cart page if cart logo is clicked-------------------

document.querySelector("#cart").addEventListener("click", () => {
    window.location.href = "cart.html"
})

//----------------------------------------------------------------------------------

document.querySelector("#admin").addEventListener("click", () => {
    window.location.href = "adminLoginSignup.html"
})

// hover effect on top-nav-bar-bottom-box-> div->text

let arr = document.querySelectorAll(".top-nav-bar-bottom-box-text");

for (const div of arr) {
    div.addEventListener("mouseenter", () => {
        document.querySelector("#top-nav-bar-bottom-box-hover-body").innerHTML = `

        <style>

            #top-nav-bar-bottom-box-hover-body {
                visibility:visible;
                position : absolute;
            }
            
        </style>
        
        <div class="top-nav-bar-bottom-box-hover-body-card1">
            <p><u>Shop All Furniture</u></p>
            <p>Quick ship and in stock Furniture ></p>
            <p>New Furniture ></p>
            <p>Living Room Furniture ></p>
            <p>Dining and Kitchen Furniture ></p>
            <p>Storage and Modular Furniture ></p>
            <p>Bedroom Furniture ></p>
            <p>Home Office Furniture ></p>
            <p>Entryway Furniture ></p>
            <p>Leather Furniture ></p>
            <p>Now trending ></p>
            <p>Clearence Furniture ></p>
            <p>Buying Guides and Styling Ideas ></p>
            <p>Baby and Kids Furniture ></p>
        </div>

        <div class="top-nav-bar-bottom-box-hover-body-card2">
            <img src="./logo/f1.jpg" alt="Furniture">
        </div>

        <div class="top-nav-bar-bottom-box-hover-body-card3">
            <img src="./logo/f2.jpg" alt="Furniture">
        </div>
`
    })
}

// document.querySelector("#top-nav-bar-bottom-box").addEventListener("mouseenter", () => {

//     document.querySelector("#top-nav-bar-bottom-box-hover-body").innerHTML = `

//                 <style>

//                     #top-nav-bar-bottom-box-hover-body {
//                         visibility:visible;
//                         position : absolute;
//                     }

//                 </style>
//                 <div class="top-nav-bar-bottom-box-hover-body-card1">
//                     <p><u>Shop All Furniture</u></p>
//                     <p>Quick ship and in stock Furniture ></p>
//                     <p>New Furniture ></p>
//                     <p>Living Room Furniture ></p>
//                     <p>Dining and Kitchen Furniture ></p>
//                     <p>Storage and Modular Furniture ></p>
//                     <p>Bedroom Furniture ></p>
//                     <p>Home Office Furniture ></p>
//                     <p>Entryway Furniture ></p>
//                     <p>Leather Furniture ></p>
//                     <p>Now trending ></p>
//                     <p>Clearence Furniture ></p>
//                     <p>Buying Guides and Styling Ideas ></p>
//                     <p>Baby and Kids Furniture ></p>
//                 </div>

//                 <div class="top-nav-bar-bottom-box-hover-body-card2">
//                     <img src="./logo/f1.jpg" alt="Furniture">
//                 </div>

//                 <div class="top-nav-bar-bottom-box-hover-body-card3">
//                     <img src="./logo/f2.jpg" alt="Furniture">
//                 </div>
//     `
// })

for (const div of arr) {

    div.addEventListener("mouseleave", () => {

        document.querySelector("#top-nav-bar-bottom-box-hover-body").innerHTML = `
    
                    <style>
    
                        #top-nav-bar-bottom-box-hover-body {
                            visibility:hidden;
                        }
    
                    </style>
        `
    })
}

let raj = document.querySelector("#top-nav-bar-bottom-box-hover-body");
raj.addEventListener("mouseover", () => {
    raj.style.visibility = "visible";
})