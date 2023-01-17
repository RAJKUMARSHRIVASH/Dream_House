
// nav bar and home page logics will be done inside this file only

// hover effect on top-nav-bar-bottom-box-> div->text


document.querySelector("#top-nav-bar-bottom-box").addEventListener("mouseenter", () => {

    document.querySelector("#top-nav-bar-bottom-box-hover-body").innerHTML = `

                <style>

                    #top-nav-bar-bottom-box-hover-body {
                        visibility:visible;
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

document.querySelector("#top-nav-bar-bottom-box").addEventListener("mouseleave", () => {

    document.querySelector("#top-nav-bar-bottom-box-hover-body").innerHTML = `

                <style>

                    #top-nav-bar-bottom-box-hover-body {
                        visibility:hidden;
                    }

                </style>
    `
})