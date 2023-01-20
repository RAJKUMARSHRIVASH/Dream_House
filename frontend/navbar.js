//-------------------- redirect to home page if logo is clicked-------------------

document.querySelector("#logo").addEventListener("click",()=>{
    window.location.href = "index.html";
})

//-------------------- redirect to login page if contact logo is clicked-------------------

document.querySelector("#login_popup").addEventListener("click",()=>{
    window.location.href = "login.html"
})

//-------------------- redirect to cart page if cart logo is clicked-------------------

document.querySelector("#cart").addEventListener("click",()=>{
    window.location.href = "cart.html"
})

//----------------------------------------------------------------------------------

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
raj.addEventListener("mouseover",()=>{
    raj.style.visibility = "visible";
})