
// nav bar and home page logics will be done inside this file only


// back to top button functionality

let btn = document.querySelector("#backToTop");
window.addEventListener("scroll",()=>{
    
    if(window.scrollY>200) {
        btn.classList.add("active");
    }else {
        btn.classList.remove("active");
    }
})    

const backToTop = ()=>{
    document.body.scrollTop = 0;  // For Safari
    document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE and Opera
    //  ( documentElement  or  scrollingElement )
}

//------------------------------------------------------------------------------------

let imgs = document.querySelectorAll("#middle-body img");
for (const img of imgs) {
    img.addEventListener("click",()=>{
        console.log('sadjsdn');
        window.location.href = "products.html";
    })
}
